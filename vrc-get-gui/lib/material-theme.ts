import {
	argbFromHex,
	Hct,
	hexFromArgb,
	MaterialDynamicColors,
	type DynamicColor,
	SchemeContent,
	SchemeExpressive,
	SchemeFidelity,
	SchemeFruitSalad,
	SchemeMonochrome,
	SchemeNeutral,
	SchemeRainbow,
	SchemeTonalSpot,
	SchemeVibrant,
} from "@material/material-color-utilities";

export const DEFAULT_THEME_SOURCE_HEX = "#6cb6ff";
export const DEFAULT_THEME_MODE = "auto";
export const DEFAULT_THEME_SCHEME = "vibrant";

export const USER_THEME_SOURCE_KEY = "user_theme_source";
export const USER_THEME_MODE_KEY = "user_theme_mode";
export const USER_THEME_SCHEME_KEY = "user_theme_scheme";
export const USER_THEME_STYLE_ID = "user-theme-style";

export const THEME_SCHEME_LABELS = {
	"tonal-spot": "调性点缀",
	fidelity: "高保真",
	monochrome: "单色",
	neutral: "中性",
	vibrant: "活力",
	expressive: "表现力",
	content: "内容主题",
	rainbow: "彩虹",
	"fruit-salad": "果缤纷",
} as const;

export type ThemeSchemeName = keyof typeof THEME_SCHEME_LABELS;
export type ThemeMode = "auto" | "light" | "dark";

export const THEME_SCHEME_NAMES = Object.keys(
	THEME_SCHEME_LABELS,
) as ThemeSchemeName[];

const FULL_THEME_ROLE_NAMES = [
	"primary",
	"surface-tint",
	"on-primary",
	"primary-container",
	"on-primary-container",
	"secondary",
	"on-secondary",
	"secondary-container",
	"on-secondary-container",
	"tertiary",
	"on-tertiary",
	"tertiary-container",
	"on-tertiary-container",
	"error",
	"on-error",
	"error-container",
	"on-error-container",
	"background",
	"on-background",
	"surface",
	"on-surface",
	"surface-variant",
	"on-surface-variant",
	"outline",
	"outline-variant",
	"shadow",
	"scrim",
	"inverse-surface",
	"inverse-on-surface",
	"inverse-primary",
	"primary-fixed",
	"on-primary-fixed",
	"primary-fixed-dim",
	"on-primary-fixed-variant",
	"secondary-fixed",
	"on-secondary-fixed",
	"secondary-fixed-dim",
	"on-secondary-fixed-variant",
	"tertiary-fixed",
	"on-tertiary-fixed",
	"tertiary-fixed-dim",
	"on-tertiary-fixed-variant",
	"surface-dim",
	"surface-bright",
	"surface-container-lowest",
	"surface-container-low",
	"surface-container",
	"surface-container-high",
	"surface-container-highest",
] as const;

export function clamp(value: number, min: number, max: number) {
	return Math.min(max, Math.max(min, value));
}

export function normalizeHexColor(value: unknown) {
	if (typeof value !== "string") return null;
	const normalized = value.trim().toLowerCase();
	return /^#[0-9a-fA-F]{6}$/.test(normalized) ? normalized : null;
}

export function normalizeThemeMode(value: unknown): ThemeMode {
	return value === "light" || value === "dark" || value === "auto"
		? value
		: DEFAULT_THEME_MODE;
}

export function normalizeThemeScheme(value: unknown): ThemeSchemeName {
	return typeof value === "string" &&
		THEME_SCHEME_NAMES.includes(value as ThemeSchemeName)
		? (value as ThemeSchemeName)
		: DEFAULT_THEME_SCHEME;
}

export function hctFromHex(sourceHex: string) {
	const hct = Hct.fromInt(argbFromHex(sourceHex));
	return {
		hue: Math.round(hct.hue),
		chroma: Math.round(clamp(hct.chroma, 0, 150)),
		tone: Math.round(clamp(hct.tone, 0, 100)),
	};
}

export function hexFromHctInputs(hue: number, chroma: number, tone: number) {
	return hexFromArgb(
		Hct.from(clamp(hue, 0, 360), clamp(chroma, 0, 150), clamp(tone, 0, 100))
			.toInt(),
	);
}

function kebabToCamelCase(value: string) {
	return value.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());
}

function getScheme(sourceHct: Hct, isDark: boolean, schemeName: ThemeSchemeName) {
	switch (schemeName) {
		case "fidelity":
			return new SchemeFidelity(sourceHct, isDark, 0);
		case "monochrome":
			return new SchemeMonochrome(sourceHct, isDark, 0);
		case "neutral":
			return new SchemeNeutral(sourceHct, isDark, 0);
		case "vibrant":
			return new SchemeVibrant(sourceHct, isDark, 0);
		case "expressive":
			return new SchemeExpressive(sourceHct, isDark, 0);
		case "content":
			return new SchemeContent(sourceHct, isDark, 0);
		case "rainbow":
			return new SchemeRainbow(sourceHct, isDark, 0);
		case "fruit-salad":
			return new SchemeFruitSalad(sourceHct, isDark, 0);
		case "tonal-spot":
			return new SchemeTonalSpot(sourceHct, isDark, 0);
	}
}

export function buildFullMaterialThemeCss(
	sourceHex: string,
	isDark: boolean,
	schemeName: ThemeSchemeName,
) {
	const sourceHct = Hct.fromInt(argbFromHex(sourceHex));
	const scheme = getScheme(sourceHct, isDark, schemeName);
	const colors = new MaterialDynamicColors();

	const declarations = FULL_THEME_ROLE_NAMES.map((roleName) => {
		const accessorName = kebabToCamelCase(roleName);
		const dynamicColorFactory = (
			colors as unknown as Record<string, () => DynamicColor | undefined>
		)[accessorName];
		const dynamicColor = dynamicColorFactory?.();
		if (!dynamicColor) return null;
		const value = hexFromArgb(dynamicColor.getArgb(scheme));
		return `--md-sys-color-${roleName}: ${value};`;
	}).filter(Boolean);

	return `:root, .light, .dark, .system {\n    ${declarations.join("\n    ")}\n}`;
}

export function isDarkThemeActive(mode: ThemeMode) {
	if (mode === "dark") return true;
	if (mode === "light") return false;

	return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function applyMaterialTheme(
	sourceHex: string,
	mode: ThemeMode,
	schemeName: ThemeSchemeName,
) {
	const normalizedHex = normalizeHexColor(sourceHex);
	if (!normalizedHex) return false;

	let styleEl = document.getElementById(USER_THEME_STYLE_ID);
	if (!styleEl) {
		styleEl = document.createElement("style");
		styleEl.id = USER_THEME_STYLE_ID;
		document.head.appendChild(styleEl);
	}
	const darkThemeActive = isDarkThemeActive(mode);
	document.documentElement.classList.remove("light", "dark", "system");
	document.documentElement.classList.add(darkThemeActive ? "dark" : "light");
	styleEl.textContent = buildFullMaterialThemeCss(
		normalizedHex,
		darkThemeActive,
		schemeName,
	);
	document.documentElement.style.setProperty(
		"--theme-hue",
		`${hctFromHex(normalizedHex).hue}`,
	);
	return true;
}

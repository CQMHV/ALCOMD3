"use client";

import { useMemo } from "react";
import type { TauriBasePackageInfo } from "@/lib/bindings";
import { cn } from "@/lib/utils";
import { compareVersion } from "@/lib/version";

export function RepositoryPackageList({
	packages,
	className,
}: {
	packages: TauriBasePackageInfo[];
	className?: string;
}) {
	const deduplicatedPackages = useMemo(() => {
		const map = new Map<string, TauriBasePackageInfo>();

		for (const info of packages) {
			const existing = map.get(info.name);
			if (!existing || compareVersion(existing.version, info.version) < 0) {
				map.set(info.name, info);
			}
		}

		return [...map.values()];
	}, [packages]);

	return (
		<ul className={cn("list-disc pl-6", className)}>
			{deduplicatedPackages.map((info) => (
				<li key={info.name}>{info.display_name ?? info.name}</li>
			))}
		</ul>
	);
}

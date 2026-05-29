# ALCOMD3 downstream notes

This repository is a downstream fork of upstream ALCOM / vrc-get. The notes
below document ALCOMD3-specific changes that should be preserved when syncing
from upstream.

## Branding

ALCOMD3 intentionally uses downstream branding while keeping selected upstream
compatibility points.

- Product and visible app name: `ALCOMD3`.
- Window title: `ALCOMD3`.
- Windows installer display name: `ALCOMD3`.
- Windows shortcuts: `ALCOMD3`.
- Windows setup output name: `alcomd3-{version}-setup.exe`.
- Main executable file name remains `ALCOM.exe` for compatibility with the
  existing install path, protocol associations, and updater/install migration.
- Windows installer is intended to overwrite the existing ALCOM installation
  instead of installing side by side.

Important files:

- `vrc-get-gui/Tauri.toml`
- `vrc-get-gui/src/commands/start.rs`
- `vrc-get-gui/index.html`
- `vrc-get-gui/app/_main/settings/index.tsx`
- `vrc-get-gui/bundle/windows-setup.iss`
- `xtask/src/bundle_alcom.rs`
- `xtask/src/bundle_alcom/setup_exe.rs`

## Icon

The app icon is derived from the original ALCOM icon and recolored to the
ALCOMD3 theme color `#6cb6ff`.

When regenerating icons, keep the full logo design. Do not replace the small
icon sizes with a simplified variant unless that is an explicit design decision.
The current Windows `.ico` intentionally contains full-logo entries at common
larger sizes so Windows Explorer and taskbar rendering do not fall back to the
old green icon.

Important files:

- `vrc-get-gui/app-icon.png`
- `vrc-get-gui/icons/icon.png`
- `vrc-get-gui/icons/icon.ico`
- `vrc-get-gui/icons/32x32.png`
- `vrc-get-gui/icons/64x64.png`
- `vrc-get-gui/icons/128x128.png`
- `vrc-get-gui/icons/128x128@2x.png`
- `vrc-get-gui/icons/Square*.png`
- `vrc-get-gui/icons/StoreLogo.png`
- `vrc-get-gui/build.rs`

## Material Design 3 changes

ALCOMD3 includes Material Design 3-style UI changes and a custom Material Theme
setting. Preserve the user-facing ability to customize the application theme
color.

Additional downstream UI details to preserve:

- The Material Theme entry is shown in the side navigation.
- The side navigation includes optional BOOTH, VRChatAvatarLearn, and version
  buttons. These can be hidden with the `hide_sidebar_links` setting.
- The version button displays `version: v{actual_version}` and copies
  `v{actual_version}`.
- Toasts use rounded MD3 styling, MD3 semantic progress colors, and the app
  base background color rather than the side navigation color.
- The log page auto-scroll button keeps a transparent border when inactive to
  avoid layout jitter.
- Important project/package actions use ALCOMD3 emphasis button styling.
- The setup flow and settings copy should use `ALCOMD3` in user-facing text.

Important files include frontend components and settings pages under:

- `vrc-get-gui/app`
- `vrc-get-gui/components`
- `vrc-get-gui/app/globals.css`
- `vrc-get-gui/lib/material-theme.ts`
- `vrc-get-gui/locales/*.json5`
- `vrc-get-gui/src/commands/environment/config.rs`
- `vrc-get-gui/src/config.rs`

## Package operation progress

ALCOMD3 adds downstream package operation progress and cancellation behavior
over upstream ALCOM. Preserve this when syncing package management code.

User-facing behavior:

- Installing, removing, and reinstalling packages show a progress dialog.
- The dialog shows per-package status, overall progress, and success/failure
  counts.
- Failed packages can be retried.
- Long-running operations can be terminated by the user.
- Closing the main window during an operation requests termination instead of
  immediately closing the app.
- Termination should not turn already successful packages into failed items.
- Parallel package work should continue where possible; one package failure
  should not unnecessarily stop unrelated packages.

Backend behavior to preserve:

- `AbortCheck` is shared between frontend cancellation, window-close
  interception, package download, package extraction, and package apply steps.
- Download/cache verification and zip extraction check cancellation between
  copy chunks.
- Package install/remove/reinstall progress is reported through
  `TauriProjectApplyProgress`.
- Partial package failures are collected and reported while successful packages
  can still finish.

Important files:

- `vrc-get-gui/app/_main/projects/manage/-use-package-change.tsx`
- `vrc-get-gui/app/_main/projects/manage/-package-list-card.tsx`
- `vrc-get-gui/src/commands/project.rs`
- `vrc-get-gui/src/commands/start.rs`
- `vrc-get-gui/src/state/project_apply.rs`
- `vrc-get-vpm/src/traits.rs`
- `vrc-get-vpm/src/environment/package_installer.rs`
- `vrc-get-vpm/src/unity_project/pending_project_changes.rs`
- `vrc-get-vpm/src/utils/extract_zip.rs`

## Repository management additions

ALCOMD3 adds VPM repository management improvements over upstream ALCOM:

- Repository ordering / priority adjustment.
- Viewing the package list contained in a repository.

When syncing upstream package or repository management changes, preserve these
downstream features.

Important areas:

- `vrc-get-gui/app/_main/packages/repositories`
- `vrc-get-gui/components/ReorderableList.tsx`

## Updater

ALCOMD3 uses its own update source instead of the upstream ALCOM update feed.

Preserve these downstream behaviors:

- Stable update endpoint:
  `https://alcomd3.cqmhv.com/api/gui/tauri-updater.json`.
- Beta update endpoint:
  `https://alcomd3.cqmhv.com/api/gui/tauri-updater-beta.json`.
- Automatic update check failures should be silent for users.
- Manual update checks should show dialogs for both no-update and failed-update
  results.
- Real server/network failures should remain in logs, but the derived
  "update check failed" user-facing conclusion should not be added as another
  log entry.
- Release versions use semver strings such as `1.1.6-MD3.2`; this compares
  greater than `1.1.6-MD3.1`.

Important files:

- `vrc-get-gui/src/commands/util.rs`
- `vrc-get-gui/src/updater.rs`
- `vrc-get-gui/app/_main/settings/index.tsx`
- `vrc-get-gui/components/providers.tsx`
- `vrc-get-gui/locales/*.json5`

## Licenses and third-party notices

The application has an in-app Licenses page generated by
`vrc-get-gui/scripts/vite-build-license-json.ts`.

ALCOMD3-specific license entries to preserve:

- `ALCOMD3 Icon, derived from ALCOM Icon`, licensed under CC BY 4.0 via
  `vrc-get-gui/icon-LICENSE`.
- `Anton font`, licensed under OFL via
  `vrc-get-gui/third-party/Anton-Regular-OFL.txt`.
- `Noto Sans font`, licensed under OFL via
  `vrc-get-gui/third-party/NotoSans-OFL.txt`.

Also keep `vrc-get-gui/THIRD-PARTY.md` accurate. It documents the icon
derivation and bundled fonts.

## Windows installer

ALCOMD3 uses Inno Setup for Windows packages.

Preserve these downstream behaviors:

- Installer product name is `ALCOMD3`.
- Output setup file uses `alcomd3` and includes the version.
- `VersionInfoProductVersion` uses a Windows-compatible numeric version.
- Setup icon uses `vrc-get-gui/icons/icon.ico`.
- Old `ALCOM` desktop/start menu shortcuts are removed during install.
- Main installed executable remains `ALCOM.exe`.

Important files:

- `vrc-get-gui/bundle/windows-setup.iss`
- `xtask/src/bundle_alcom/setup_exe.rs`

## GitHub configuration

Most upstream GitHub workflows were removed intentionally. ALCOMD3 release
automation should be rebuilt separately instead of inheriting upstream
publication workflows.

Preserve:

- `.github/actions/sign-windows/action.yml`
- `.github/ISSUE_TEMPLATE/*`

Removed intentionally:

- `.github/workflows/*`
- `.github/dependabot.yml`
- `.github/labeler.yml`
- `.github/scripts/*`
- `.github/copilot-instructions.md`

When syncing upstream, delete/modify conflicts under `.github/workflows` and
`.github/scripts` can usually be resolved by keeping the downstream deletion,
unless a new workflow is explicitly being adopted.

## Release notes

The current release note draft is:

- `release-notes/ALCOMD3_1.1.6-MD3.2.md`

Previous downstream release notes are also kept under `release-notes/`.

Keep future release notes focused on downstream differences from upstream ALCOM,
not every upstream fix.

## Local build commands

Windows release build:

```powershell
cargo xtask build-alcom --release --target x86_64-pc-windows-msvc
cargo xtask bundle-alcom --release --target x86_64-pc-windows-msvc --bundles setup-exe,setup-exe-zip
```

Expected Windows setup outputs:

- `target/x86_64-pc-windows-msvc/release/bundle/setup/alcomd3-{version}-setup.exe`
- `target/x86_64-pc-windows-msvc/release/bundle/setup/alcomd3-{version}-setup.exe.zip`

Known non-blocking warnings:

- `xtask/src/bundle_alcom/linux.rs` has an unused `mode` warning.
- Vite may warn that `vrc-get://localhost/global-info.js` cannot be bundled
  without `type="module"`. This has not blocked Windows release packaging.

# ALCOMD3

Languages: English | [日本語](#日本語) | [繁體中文](#繁體中文) | [简体中文](#简体中文)

ALCOMD3 is an unofficial downstream fork of
[ALCOM / vrc-get](https://github.com/vrc-get/vrc-get). It keeps ALCOM's VRChat
project, VPM repository, package, and template management features while adding
a Material Design 3-style interface and downstream usability changes.

This project is not an official product of VRChat, VCC, or upstream ALCOM.

## What is ALCOMD3?

ALCOM is a cross-platform open-source alternative to VRChat Creator Companion
(VCC). ALCOMD3 builds on that work and focuses on a more modern desktop UI and
improved repository management.

Main downstream differences:

- Material Design 3-style interface.
- Customizable application theme color.
- ALCOMD3 app name, window title, installer name, shortcuts, and icon.
- VPM repository ordering / priority adjustment.
- Ability to view the package list contained in a repository.
- Windows installer files use versioned `alcomd3` names, for example
  `alcomd3-1.1.6-MD3.1-setup.exe`.

## Compatibility Notes

The Windows installer is intentionally compatible with existing ALCOM installs.

- Installing ALCOMD3 on Windows overwrites the existing ALCOM installation
  instead of installing side by side.
- The installed main executable is still named `ALCOM.exe` for compatibility
  with the existing install path and protocol associations.
- User-facing application branding is ALCOMD3.

## Downloads

Prebuilt releases are intended to be published from this downstream repository:

<https://github.com/CQMHV/ALCOMD3>

If you want the official upstream ALCOM version, use the upstream project
instead:

<https://github.com/vrc-get/vrc-get>

## Build

### Requirements

- Rust stable toolchain
- Node.js and npm
- Windows build tools when building the Windows MSVC target
- Inno Setup is downloaded/cached by the bundling task when needed

### Windows Release Installer

```powershell
cargo xtask build-alcom --release --target x86_64-pc-windows-msvc
cargo xtask bundle-alcom --release --target x86_64-pc-windows-msvc --bundles setup-exe,setup-exe-zip
```

Expected outputs:

- `target/x86_64-pc-windows-msvc/release/bundle/setup/alcomd3-{version}-setup.exe`
- `target/x86_64-pc-windows-msvc/release/bundle/setup/alcomd3-{version}-setup.exe.zip`

Known non-blocking warnings:

- `xtask/src/bundle_alcom/linux.rs` may warn about an unused `mode` variable.
- Vite may warn that `vrc-get://localhost/global-info.js` cannot be bundled
  without `type="module"`.

## Repository Layout

- `vrc-get-gui/`: ALCOMD3 desktop GUI.
- `vrc-get/`: upstream command-line client code.
- `vrc-get-vpm/`: VPM-related library code.
- `xtask/`: build, bundle, and release helper tasks.
- `ALCOMD3_NOTES.md`: downstream maintenance notes for syncing from upstream.

## Syncing From Upstream

This repository intentionally diverges from upstream ALCOM in branding,
installer behavior, icon assets, UI changes, repository management features, and
GitHub workflow setup.

Before syncing from upstream, read:

[ALCOMD3_NOTES.md](./ALCOMD3_NOTES.md)

That file records downstream changes that should usually be preserved during
merge conflict resolution.

## GitHub Workflows

Upstream GitHub workflows were removed intentionally. ALCOMD3 release automation
should be rebuilt separately for this repository.

The repository currently keeps:

- `.github/actions/sign-windows/action.yml`
- `.github/ISSUE_TEMPLATE/*`

## Licenses

ALCOMD3 is based on ALCOM / vrc-get. The main project code is licensed under the
MIT License. See [LICENSE](./LICENSE).

The application includes an in-app Licenses page for dependency and third-party
resource notices. Important bundled third-party assets include:

- ALCOMD3 icon, derived from the original ALCOM icon and recolored to `#6cb6ff`
  under CC BY 4.0.
- Anton font under the SIL Open Font License.
- Noto Sans font under the SIL Open Font License.

See [vrc-get-gui/THIRD-PARTY.md](./vrc-get-gui/THIRD-PARTY.md) for additional
third-party asset notes.

## Contributing

This is a downstream branch maintained for ALCOMD3-specific changes. Issues and
pull requests should be about this fork unless they are clearly upstream bugs.

For general upstream contribution guidance, see:

- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [vrc-get-gui/CONTRIBUTING.md](./vrc-get-gui/CONTRIBUTING.md)

---

# 日本語

言語: [English](#alcomd3) | 日本語 | [繁體中文](#繁體中文) | [简体中文](#简体中文)

ALCOMD3 は [ALCOM / vrc-get](https://github.com/vrc-get/vrc-get) をベースに
した非公式の下流ブランチです。ALCOM の VRChat プロジェクト、VPM リポジトリ、
パッケージ、テンプレート管理機能を維持しつつ、Material Design 3 風の UI と
下流独自の使い勝手改善を追加しています。

このプロジェクトは VRChat、VCC、または上流 ALCOM の公式製品ではありません。

## ALCOMD3 とは

ALCOM は VRChat Creator Companion（VCC）のクロスプラットフォームな
オープンソース代替ツールです。ALCOMD3 はその成果をベースに、より現代的な
デスクトップ UI とリポジトリ管理の改善に重点を置いています。

主な下流差分:

- Material Design 3 風の UI。
- アプリのテーマカラーをカスタマイズ可能。
- アプリ名、ウィンドウタイトル、インストーラー名、ショートカット、アイコンを
  ALCOMD3 に変更。
- VPM リポジトリの並び替え / 優先度調整。
- リポジトリに含まれるパッケージ一覧の表示。
- Windows インストーラーは `alcomd3-1.1.6-MD3.1-setup.exe` のような
  バージョン付き `alcomd3` 名で配布。

## 互換性について

Windows インストーラーは既存の ALCOM インストールとの互換性を意図しています。

- Windows に ALCOMD3 をインストールすると、既存の ALCOM インストールを
  上書きします。並行インストールはされません。
- 既存のインストールパスとプロトコル関連付けとの互換性のため、インストール
  されるメイン実行ファイル名は `ALCOM.exe` のままです。
- ユーザーに表示されるアプリのブランドは ALCOMD3 です。

## ダウンロード

ビルド済みリリースは、この下流リポジトリから公開する想定です。

<https://github.com/CQMHV/ALCOMD3>

上流の公式 ALCOM を利用したい場合は、上流プロジェクトを利用してください。

<https://github.com/vrc-get/vrc-get>

## ビルド

### 必要なもの

- Rust stable toolchain
- Node.js と npm
- Windows MSVC ターゲットをビルドする場合は Windows build tools
- Inno Setup は必要に応じて bundling task がダウンロード / キャッシュします

### Windows リリースインストーラー

```powershell
cargo xtask build-alcom --release --target x86_64-pc-windows-msvc
cargo xtask bundle-alcom --release --target x86_64-pc-windows-msvc --bundles setup-exe,setup-exe-zip
```

想定される出力:

- `target/x86_64-pc-windows-msvc/release/bundle/setup/alcomd3-{version}-setup.exe`
- `target/x86_64-pc-windows-msvc/release/bundle/setup/alcomd3-{version}-setup.exe.zip`

既知の非ブロッキング警告:

- `xtask/src/bundle_alcom/linux.rs` で未使用の `mode` 変数警告が出る場合があります。
- Vite が `vrc-get://localhost/global-info.js` について `type="module"` なしでは
  bundle できないと警告する場合があります。

## リポジトリ構成

- `vrc-get-gui/`: ALCOMD3 デスクトップ GUI。
- `vrc-get/`: 上流のコマンドラインクライアントコード。
- `vrc-get-vpm/`: VPM 関連ライブラリコード。
- `xtask/`: ビルド、バンドル、リリース補助タスク。
- `ALCOMD3_NOTES.md`: 上流同期時の下流メンテナンスノート。

## 上流との同期

このリポジトリは、ブランド、インストーラー動作、アイコンアセット、UI 変更、
リポジトリ管理機能、GitHub workflow 設定で上流 ALCOM と意図的に差分があります。

上流から同期する前に、以下を読んでください。

[ALCOMD3_NOTES.md](./ALCOMD3_NOTES.md)

このファイルには、マージ競合解決時に通常保持すべき下流変更が記録されています。

## GitHub Workflows

上流の GitHub workflows は意図的に削除されています。ALCOMD3 のリリース自動化は
このリポジトリ向けに別途再構築する想定です。

現在保持しているもの:

- `.github/actions/sign-windows/action.yml`
- `.github/ISSUE_TEMPLATE/*`

## ライセンス

ALCOMD3 は ALCOM / vrc-get をベースにしています。主要なプロジェクトコードは
MIT License です。[LICENSE](./LICENSE) を参照してください。

アプリ内には依存関係と第三者リソースの通知を表示する Licenses ページがあります。
重要な同梱第三者アセット:

- ALCOMD3 アイコン。元の ALCOM アイコンから派生し、`#6cb6ff` に改色。
  CC BY 4.0。
- Anton font。SIL Open Font License。
- Noto Sans font。SIL Open Font License。

第三者アセットの追加情報は
[vrc-get-gui/THIRD-PARTY.md](./vrc-get-gui/THIRD-PARTY.md) を参照してください。

## コントリビューション

このリポジトリは ALCOMD3 固有の変更を維持する下流ブランチです。Issue と pull
request は、明確な上流バグでない限り、この fork に関する内容にしてください。

一般的な上流コントリビューション方針:

- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [vrc-get-gui/CONTRIBUTING.md](./vrc-get-gui/CONTRIBUTING.md)

---

# 繁體中文

語言: [English](#alcomd3) | [日本語](#日本語) | 繁體中文 | [简体中文](#简体中文)

ALCOMD3 是基於 [ALCOM / vrc-get](https://github.com/vrc-get/vrc-get) 的
非官方下游分支。它保留 ALCOM 的 VRChat 專案、VPM 儲存庫、套件與範本管理功能，
並加入 Material Design 3 風格介面與下游易用性改進。

本專案不是 VRChat、VCC 或上游 ALCOM 的官方產品。

## 什麼是 ALCOMD3？

ALCOM 是 VRChat Creator Companion（VCC）的跨平台開源替代工具。ALCOMD3 基於
ALCOM，著重於更現代的桌面 UI 與更好的儲存庫管理體驗。

主要下游差異：

- Material Design 3 風格介面。
- 可自訂應用程式主題色。
- 應用程式名稱、視窗標題、安裝程式名稱、捷徑與圖示改為 ALCOMD3。
- VPM 儲存庫排序 / 優先度調整。
- 可查看儲存庫所包含的套件列表。
- Windows 安裝程式使用帶版本號的 `alcomd3` 命名，例如
  `alcomd3-1.1.6-MD3.1-setup.exe`。

## 相容性說明

Windows 安裝程式有意保持與既有 ALCOM 安裝的相容性。

- 在 Windows 安裝 ALCOMD3 會覆蓋既有的 ALCOM 安裝，而不是並排安裝。
- 為了相容既有安裝路徑與協定關聯，安裝後的主執行檔名稱仍為 `ALCOM.exe`。
- 使用者可見的應用程式品牌是 ALCOMD3。

## 下載

預先建置的版本預計由此下游儲存庫發布：

<https://github.com/CQMHV/ALCOMD3>

如果你想使用上游官方 ALCOM，請使用上游專案：

<https://github.com/vrc-get/vrc-get>

## 建置

### 需求

- Rust stable toolchain
- Node.js 與 npm
- 建置 Windows MSVC target 時需要 Windows build tools
- Inno Setup 會在需要時由 bundling task 下載 / 快取

### Windows 發行版安裝程式

```powershell
cargo xtask build-alcom --release --target x86_64-pc-windows-msvc
cargo xtask bundle-alcom --release --target x86_64-pc-windows-msvc --bundles setup-exe,setup-exe-zip
```

預期輸出：

- `target/x86_64-pc-windows-msvc/release/bundle/setup/alcomd3-{version}-setup.exe`
- `target/x86_64-pc-windows-msvc/release/bundle/setup/alcomd3-{version}-setup.exe.zip`

已知非阻塞警告：

- `xtask/src/bundle_alcom/linux.rs` 可能出現未使用 `mode` 變數警告。
- Vite 可能提示 `vrc-get://localhost/global-info.js` 缺少 `type="module"` 因而無法
  bundle。

## 儲存庫結構

- `vrc-get-gui/`：ALCOMD3 桌面 GUI。
- `vrc-get/`：上游命令列用戶端程式碼。
- `vrc-get-vpm/`：VPM 相關函式庫程式碼。
- `xtask/`：建置、打包與發行輔助任務。
- `ALCOMD3_NOTES.md`：從上游同步時使用的下游維護筆記。

## 與上游同步

此儲存庫在品牌、安裝程式行為、圖示資產、UI 變更、儲存庫管理功能與 GitHub
workflow 設定上，都有意與上游 ALCOM 保持差異。

從上游同步前，請閱讀：

[ALCOMD3_NOTES.md](./ALCOMD3_NOTES.md)

該檔案記錄了合併衝突時通常應保留的下游變更。

## GitHub Workflows

上游 GitHub workflows 已有意移除。ALCOMD3 的發行自動化應針對本儲存庫另行重建。

目前保留：

- `.github/actions/sign-windows/action.yml`
- `.github/ISSUE_TEMPLATE/*`

## 授權

ALCOMD3 基於 ALCOM / vrc-get。主要專案程式碼使用 MIT License。請參閱
[LICENSE](./LICENSE)。

應用程式內含 Licenses 頁面，用於顯示依賴項與第三方資源聲明。重要的同梱第三方資源：

- ALCOMD3 圖示，衍生自原 ALCOM 圖示並改色為 `#6cb6ff`，使用 CC BY 4.0。
- Anton font，使用 SIL Open Font License。
- Noto Sans font，使用 SIL Open Font License。

更多第三方資源說明請參閱
[vrc-get-gui/THIRD-PARTY.md](./vrc-get-gui/THIRD-PARTY.md)。

## 貢獻

這是維護 ALCOMD3 特定變更的下游分支。除非是明確的上游 bug，Issue 與 pull request
應聚焦於此 fork。

一般上游貢獻指南：

- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [vrc-get-gui/CONTRIBUTING.md](./vrc-get-gui/CONTRIBUTING.md)

---

# 简体中文

语言: [English](#alcomd3) | [日本語](#日本語) | [繁體中文](#繁體中文) | 简体中文

ALCOMD3 是基于 [ALCOM / vrc-get](https://github.com/vrc-get/vrc-get) 的
非官方下游分支。它保留 ALCOM 的 VRChat 项目、VPM 仓库、包和模板管理功能，
并加入 Material Design 3 风格界面和下游易用性改进。

本项目不是 VRChat、VCC 或上游 ALCOM 的官方产品。

## 什么是 ALCOMD3？

ALCOM 是 VRChat Creator Companion（VCC）的跨平台开源替代工具。ALCOMD3 基于
ALCOM，重点改进更现代的桌面 UI 和仓库管理体验。

主要下游差异：

- Material Design 3 风格界面。
- 可自定义应用主题色。
- 应用名称、窗口标题、安装器名称、快捷方式和图标改为 ALCOMD3。
- VPM 仓库排序 / 优先级调整。
- 可查看仓库所包含的包列表。
- Windows 安装器使用带版本号的 `alcomd3` 命名，例如
  `alcomd3-1.1.6-MD3.1-setup.exe`。

## 兼容性说明

Windows 安装器有意保持与既有 ALCOM 安装的兼容性。

- 在 Windows 安装 ALCOMD3 会覆盖既有的 ALCOM 安装，而不是并排安装。
- 为了兼容既有安装路径和协议关联，安装后的主程序文件名仍为 `ALCOM.exe`。
- 用户可见的应用品牌是 ALCOMD3。

## 下载

预构建版本预计从此下游仓库发布：

<https://github.com/CQMHV/ALCOMD3>

如果你想使用上游官方 ALCOM，请使用上游项目：

<https://github.com/vrc-get/vrc-get>

## 构建

### 需求

- Rust stable toolchain
- Node.js 和 npm
- 构建 Windows MSVC target 时需要 Windows build tools
- Inno Setup 会在需要时由 bundling task 下载 / 缓存

### Windows 发行版安装器

```powershell
cargo xtask build-alcom --release --target x86_64-pc-windows-msvc
cargo xtask bundle-alcom --release --target x86_64-pc-windows-msvc --bundles setup-exe,setup-exe-zip
```

预期输出：

- `target/x86_64-pc-windows-msvc/release/bundle/setup/alcomd3-{version}-setup.exe`
- `target/x86_64-pc-windows-msvc/release/bundle/setup/alcomd3-{version}-setup.exe.zip`

已知非阻塞警告：

- `xtask/src/bundle_alcom/linux.rs` 可能出现未使用 `mode` 变量警告。
- Vite 可能提示 `vrc-get://localhost/global-info.js` 缺少 `type="module"` 因而无法
  bundle。

## 仓库结构

- `vrc-get-gui/`：ALCOMD3 桌面 GUI。
- `vrc-get/`：上游命令行客户端代码。
- `vrc-get-vpm/`：VPM 相关库代码。
- `xtask/`：构建、打包和发行辅助任务。
- `ALCOMD3_NOTES.md`：从上游同步时使用的下游维护笔记。

## 与上游同步

此仓库在品牌、安装器行为、图标资源、UI 变更、仓库管理功能和 GitHub workflow
设置上，都有意与上游 ALCOM 保持差异。

从上游同步前，请阅读：

[ALCOMD3_NOTES.md](./ALCOMD3_NOTES.md)

该文件记录了合并冲突时通常应保留的下游变更。

## GitHub Workflows

上游 GitHub workflows 已有意移除。ALCOMD3 的发行自动化应针对本仓库另行重建。

目前保留：

- `.github/actions/sign-windows/action.yml`
- `.github/ISSUE_TEMPLATE/*`

## 许可证

ALCOMD3 基于 ALCOM / vrc-get。主要项目代码使用 MIT License。请参阅
[LICENSE](./LICENSE)。

应用内含 Licenses 页面，用于显示依赖项和第三方资源声明。重要的随附第三方资源：

- ALCOMD3 图标，衍生自原 ALCOM 图标并改色为 `#6cb6ff`，使用 CC BY 4.0。
- Anton font，使用 SIL Open Font License。
- Noto Sans font，使用 SIL Open Font License。

更多第三方资源说明请参阅
[vrc-get-gui/THIRD-PARTY.md](./vrc-get-gui/THIRD-PARTY.md)。

## 贡献

这是维护 ALCOMD3 特定变更的下游分支。除非是明确的上游 bug，Issue 和 pull request
应聚焦于此 fork。

一般上游贡献指南：

- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [vrc-get-gui/CONTRIBUTING.md](./vrc-get-gui/CONTRIBUTING.md)

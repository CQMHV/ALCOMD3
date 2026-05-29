# ALCOMD3 v1.1.6-MD3.2

## English

ALCOMD3 v1.1.6-MD3.2 is an update based on v1.1.6-MD3.1, focused on package operation feedback, update checking behavior, and UI polish.

### Changes since v1.1.6-MD3.1

- Added a package operation progress window for package install, remove, and reinstall operations.
- Added per-package operation status display, including in-progress, success, and failure states.
- Added operation summaries showing how many packages succeeded or failed.
- Added retry support for failed package operations.
- Added terminate support for long-running package operations.
- Closing the main window during package operations now requests termination instead of immediately closing the app.
- Improved termination responsiveness during package download and extraction.
- Preserves already successful package states when an operation is terminated or partially fails.
- Improved package operation failure handling so failed packages do not unnecessarily stop unrelated package operations.
- Restored the update check feature and changed the update source to the ALCOMD3 update endpoint.
- Automatic update check failures are silent.
- Manual update checks now show dialogs for update check failure and no-update results.
- Updated update-check failure logging so the real server or network error remains in logs without creating duplicate user-facing notifications.
- Refined Material Design 3 UI details, including toast background color, update check dialogs, button emphasis, progress styling, and related localization.
- Updated application version to `1.1.6-MD3.2`.
- Updated Windows installer file version to `1.1.6.2`.

### Installation Notes

The Windows version replaces the original ALCOM installation instead of installing side by side.  
The main executable remains `ALCOM.exe` for compatibility with the existing install path and protocol associations.

## 日本語

ALCOMD3 v1.1.6-MD3.2 は、v1.1.6-MD3.1 をベースにした更新です。主にパッケージ操作中のフィードバック、更新確認の挙動、UI の調整を改善しました。

### v1.1.6-MD3.1 からの変更点

- パッケージのインストール、削除、再インストール時に進行状況ウィンドウを表示するようにしました。
- 各パッケージごとに進行中、成功、失敗の状態を表示するようにしました。
- 成功したパッケージ数と失敗したパッケージ数を表示する概要を追加しました。
- 失敗したパッケージ操作を再試行できるようにしました。
- 時間のかかるパッケージ操作を中止できるようにしました。
- パッケージ操作中にメインウィンドウを閉じた場合、即座に終了せず中止を要求するようにしました。
- パッケージのダウンロードおよび展開中の中止応答を改善しました。
- 操作の中止や一部失敗時に、すでに成功したパッケージの状態を保持するようにしました。
- 一部のパッケージ操作が失敗しても、無関係なパッケージ操作を必要以上に停止しないようにしました。
- 更新確認機能を復元し、更新元を ALCOMD3 用の更新エンドポイントに変更しました。
- 自動更新確認の失敗は通知しないようにしました。
- 手動更新確認では、失敗時と更新なしの場合にダイアログを表示するようにしました。
- 更新確認失敗時のログ処理を調整し、実際のサーバー応答やネットワークエラーはログに残しつつ、重複した通知を出さないようにしました。
- トースト背景色、更新確認ダイアログ、ボタンの強調表示、進行状況表示、関連する多言語対応など、Material Design 3 UI の細部を調整しました。
- アプリケーションバージョンを `1.1.6-MD3.2` に更新しました。
- Windows インストーラーのファイルバージョンを `1.1.6.2` に更新しました。

### インストールについて

Windows 版は、元の ALCOM と並行してインストールされるのではなく、既存の ALCOM インストールを置き換えます。  
既存のインストール先やプロトコル関連付けとの互換性のため、メイン実行ファイル名は `ALCOM.exe` のままです。

## 中文

ALCOMD3 v1.1.6-MD3.2 是基于 v1.1.6-MD3.1 的更新，主要改进软件包操作反馈、检查更新逻辑以及界面细节。

### 相比 v1.1.6-MD3.1 的变化

- 为软件包安装、卸载、重装操作新增进度窗口。
- 新增每个软件包的操作状态显示，包括进行中、成功和失败。
- 新增操作结果统计，显示成功和失败的软件包数量。
- 新增失败软件包重试功能。
- 新增长时间软件包操作的终止功能。
- 在软件包操作进行中关闭主窗口时，现在会请求终止操作，而不是直接关闭应用。
- 改进软件下载和解压过程中的终止响应速度。
- 当操作被终止或部分失败时，会保留已经成功的软件包状态。
- 改进软件包操作失败处理，单个软件包失败不会不必要地中断其他无关软件包操作。
- 恢复检查更新功能，并将更新源改为 ALCOMD3 更新端点。
- 自动检查更新失败时保持静默。
- 手动检查更新时，检查失败和无更新都会显示弹出窗口。
- 调整检查更新失败的日志逻辑，真实的服务器响应或网络错误仍会记录到日志，但不会产生重复的用户通知。
- 继续完善 Material Design 3 界面细节，包括右下角提示背景色、检查更新弹窗、按钮强调样式、进度显示和相关多语言文本。
- 应用程序版本更新为 `1.1.6-MD3.2`。
- Windows 安装器文件版本更新为 `1.1.6.2`。

### 安装说明

Windows 版本会覆盖原 ALCOM 安装项，而不是并排安装。  
主程序文件名仍保留为 `ALCOM.exe`，用于兼容原有安装路径和协议关联。

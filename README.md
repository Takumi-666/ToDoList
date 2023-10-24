# Go-list（Go の Todo リストのバックエンド）

### アプリケーションを起動し動作確認する手順

サーバーの起動

1.DockerDesktop アプリを開く。

2.VScode で、プロジェクトのルートディレクトリで以下のコードを実行する

```
docker compose up -d --build
```

3.Docker Desptop アプリから server コンテナ内に入る。

4.server の termial から以下のコードを打つ。

```
go run main.go
```

API の動作確認手順

以下の動画で説明しています。

[https://youtu.be/3h4XpFsn7L0](https://youtu.be/3h4XpFsn7L0)

### 作業手順

１.まず Go で Hello 　 World を出力する

２.ネットにあるサイトを参考に Go で Todor リストの API の処理を作る

３.作った ToDo リストの API の処理を要件に合わせて変更する。

### 詰まった所

・go run main.go がうまくいかない

・# runtime/cgo 　 cc1.exe: sorry, unimplemented: 64-bit mode not compiled in 　 go 　このエラーが出た

・パッケージ参照（ざっくり言うと別ファイルで定義した関数や構造体を使うときに import 文で定義して持ってくること）

・コードで大文字と小文字を間違えて狙った通りの処理ができなかった。（間違っている部分を特定するためにエラーハンドリングを結構した。Console Log の便利さがわかった。）

/
https://qiita.com/fuwakun/items/d2ea19bf43eda3df0094

### 作成する上で気づいたところ

・コードを修正する際に事前に修正前のファイルをコピーなり Github に push するなりして残しておくと楽。

・データベースを利用する理由はサーバーを落とした後もデータを保存するため。

・README や動作確認の動画を取る時間をちゃんと確保たほうがいい。開発だけじゃなくてそれを見せるための準備の時間も大事。

・ググるより ChatGPT の方が問題が早く解決する笑

### 工夫点

・ファイル構成をデータベースの処理部分と API の処理部分と main の実行ファイルの 3 つに分け開発をしやすい環境にした。

・Docker を利用して開発環境の構築を簡単にできるようにした。

・Postman というソフトを利用して API の動作確認を楽にした。

### 技術の選定理由　

・期限か 2 週間と短いので記述量が少なく実装までが早い Go を選んだ。

・Go を触ってみたかったから。

・Go は標準ライブラリが豊富でテストの実行が楽だと思った・（テストファイルは時間がなくで作れなかった。。。）

### 技術の選定理由などの考察

・Todor リストは作成するのに比較的難易度が低くまたネット上に資料がたくさんあるから初心者でもつまずきにくいから。

・そこで求められる API は GET,PUT,POST,DELETE などほかのアプリケーションでもよく使われる API の基本となる機能でバックエンド初心者にとってはとても勉強になるから。自分はとても勉強になって楽しかった！！

### 参考資料　

東京工業大学デジタル創作同好会 Go で ToDo リストを作ろう ! (Day-1)～(Day-4)

[Go で ToDo リストを作ろう ! Day-1](https://trap.jp/post/1515)

[Go で ToDo リストを作ろう ! Day-2](https://trap.jp/post/1302/)

[Go で ToDo リストを作ろう ! Day-3](https://trap.jp/post/1517/)

[Go で ToDo リストを作ろう ! Day-4](https://trap.jp/post/1518/)

Zenn 【Go】echo を使って API サーバーを 3 分で構築してみる

[【Go】echo を使って API サーバーを 3 分で構築してみる](https://zenn.dev/def_yuisato/articles/echo-get-started)

ChatGPT

コードをそのまま貼り付けて「このコードを〇〇の要件に合うように修正して」という命令を書いた

CI/CD 環境
Prettier 　コード修正
ESLint 　　コード改正（エラーがあるか調べる用）

husky & lint-staged

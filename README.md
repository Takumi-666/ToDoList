# Go-list（GoのTodoリストのバックエンド）

### アプリケーションを起動し動作確認する手順

サーバーの起動


1.DockerDesktopアプリを開く。

2.VScodeで、プロジェクトのルートディレクトリで以下のコードを実行する
```
docker compose up -d --build
```
3.Docker Desptopアプリからserverコンテナ内に入る。

4.serverのtermialから以下のコードを打つ。
```
go run main.go
```
APIの動作確認手順

以下の動画で説明しています。

[https://youtu.be/3h4XpFsn7L0](https://youtu.be/3h4XpFsn7L0)


### 作業手順

１.まずGoでHello　Worldを出力する

２.ネットにあるサイトを参考にGoでTodorリストのAPIの処理を作る               

３.作ったToDoリストのAPIの処理を要件に合わせて変更する。

### 詰まった所

・go run main.goがうまくいかない

・# runtime/cgo　cc1.exe: sorry, unimplemented: 64-bit mode not compiled in　go　このエラーが出た

・パッケージ参照（ざっくり言うと別ファイルで定義した関数や構造体を使うときにimport文で定義して持ってくること）

・コードで大文字と小文字を間違えて狙った通りの処理ができなかった。（間違っている部分を特定するためにエラーハンドリングを結構した。Console Logの便利さがわかった。）

/
https://qiita.com/fuwakun/items/d2ea19bf43eda3df0094

### 作成する上で気づいたところ

・コードを修正する際に事前に修正前のファイルをコピーなりGithubにpushするなりして残しておくと楽。

・データベースを利用する理由はサーバーを落とした後もデータを保存するため。

・READMEや動作確認の動画を取る時間をちゃんと確保たほうがいい。開発だけじゃなくてそれを見せるための準備の時間も大事。

・ググるよりChatGPTの方が問題が早く解決する笑

### 工夫点

・ファイル構成をデータベースの処理部分とAPIの処理部分とmainの実行ファイルの3つに分け開発をしやすい環境にした。

・Dockerを利用して開発環境の構築を簡単にできるようにした。

・Postmanというソフトを利用してAPIの動作確認を楽にした。

### 技術の選定理由　

・期限か2週間と短いので記述量が少なく実装までが早いGoを選んだ。

・Goを触ってみたかったから。

・Goは標準ライブラリが豊富でテストの実行が楽だと思った・（テストファイルは時間がなくで作れなかった。。。）

### 技術の選定理由などの考察 

・Todorリストは作成するのに比較的難易度が低くまたネット上に資料がたくさんあるから初心者でもつまずきにくいから。

・そこで求められるAPIはGET,PUT,POST,DELETEなどほかのアプリケーションでもよく使われるAPIの基本となる機能でバックエンド初心者にとってはとても勉強になるから。自分はとても勉強になって楽しかった！！


### 参考資料　

東京工業大学デジタル創作同好会 GoでToDoリストを作ろう ! (Day-1)～(Day-4)

[GoでToDoリストを作ろう ! Day-1](https://trap.jp/post/1515) 

[GoでToDoリストを作ろう ! Day-2](https://trap.jp/post/1302/)

[GoでToDoリストを作ろう ! Day-3](https://trap.jp/post/1517/)

[GoでToDoリストを作ろう ! Day-4](https://trap.jp/post/1518/)


Zenn 【Go】echoを使ってAPIサーバーを3分で構築してみる

[【Go】echoを使ってAPIサーバーを3分で構築してみる](https://zenn.dev/def_yuisato/articles/echo-get-started)

ChatGPT

コードをそのまま貼り付けて「このコードを〇〇の要件に合うように修正して」という命令を書いた








# 目標リスト（ToDoリスト）
GoとReactの練習用に簡単な目標リストアプリを作りました。



## 主な機能
主な機能.   
・タスクの追加.   
・タスクの完了と未完了の切り替え.   
・タスクの削除.   
・タスクのリスト表示

## 使用技術

-Go 1.20.   
-Node.js 20.7.0.   
-Docker 20.10.22.   
-React　17.0.2.   
-mysql 8.0.   

CI/CD 環境.   
Prettier 　3.0.3.   
ESLint 　　8.52.0.   

husky 8.0.3.   
lint-staged 15.0.2

## アプリケーションを起動する手順

### バックエンドのサーバーの起動.   
1.DockerDesktop アプリを開く。  

2.VScode で、プロジェクトのルートディレクトリで以下のコードを実行する。.   

```
docker compose up -d --build
```

3.Docker Desptop アプリから server コンテナ内に入る。    
4.server の termial から以下のコードを打つ。

```
go run main.go
```

### フロントの画面表示
１.forntenfディレクトリ下で以下のコードを実行する

```
npx start
```

### デモ動画


https://github.com/Takumi-666/ToDoList/assets/108921895/31245e0a-5ae9-4dbf-8c72-dfdc68b428f0




### スクリーンショット

![スクリーンショット](/screenshots/screenshot1.png)
![スクリーンショット](/screenshots/screenshot2.png)

### 参考資料　

東京工業大学デジタル創作同好会 Go で ToDo リストを作ろう ! (Day-1)～(Day-4)

[Go で ToDo リストを作ろう ! Day-1](https://trap.jp/post/1515).   
[Go で ToDo リストを作ろう ! Day-2](https://trap.jp/post/1302/).   
[Go で ToDo リストを作ろう ! Day-3](https://trap.jp/post/1517/).   
[Go で ToDo リストを作ろう ! Day-4](https://trap.jp/post/1518/).   

Zenn 【Go】echo を使って API サーバーを 3 分で構築してみる

[【Go】echo を使って API サーバーを 3 分で構築してみる](https://zenn.dev/def_yuisato/articles/echo-get-started)

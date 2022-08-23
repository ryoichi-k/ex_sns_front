# 【Design-doc】　エンジニア社内コミュニケーションツール開発プロジェクト


## アプリの目的

・「客先常駐エンジニアの孤独と帰属意識の低下を防ぎ、エンジニアやデザイナーがイキイキと働けるようにする」

## プロジェクトの背景

・現職では単独での常駐がほとんどであり、それによるエンジニアの孤独感が問題となっている。自身でも単独常駐時では、帰属意識も低下してしまい、仕事のモチベーションが技術力の向上以外で特にないという状態の時もあった。この体験から社内でアウトプットや共有の場をもうけ、常に社内SNSで繋がっていることで、自分は一人じゃないという感覚を持てるコミュニケーションツールの開発に挑戦することにした。このプロダクトでエンジニアがイキイキと働けて、離職率の低下と自社の評判の向上も期待できる。

## 技術仕様

・社内のエンジニアの反応を見つつの開発とするため、アジャイルを採用。

・API⇨Node.js、フレームワーク⇨Express

・フロント⇨React

・UI⇨material ui

・DB⇨mongoDB



## 使用するパッケージ、ライブラリなど
・axios

・mongoose

・nodemon

・dotenv

・helmet

・multer（ファイルアップロード用）

## アーキテクチャ

## テスト法案
・API開発はPostmanで単体テストを実施

## 運用方法
・新入社員には研修時に当アプリの使い方の指導を研修担当より行う。

・管理者権限は、総務、人事にも付与。

・週報からのリンクを設置して導線を設ける。

・障害発生時には、プログラミンググループ　〇〇部　hogehoge　内戦：▲▲▲番まで

## 参考文献



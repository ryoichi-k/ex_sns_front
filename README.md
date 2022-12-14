# エンジニア孤独解消ツール開発プロジェクト


## アプリの目的

・「客先常駐エンジニアの孤独と帰属意識の低下を防ぎ、エンジニアやデザイナーがイキイキと働けるようにする」

## プロジェクトの背景

・現職では単独での常駐がほとんどであり、それによるエンジニアの孤独感が問題となっている。自身も、単独常駐時では帰属意識も低下してしまい、仕事のモチベーションが技術力の向上以外で特にないという状態の時もあった。この体験から社内でアウトプットや共有の場をもうけ、常に社内SNSで繋がっていることで、「自分は一人じゃない」という感覚を持てる、コミュニケーションツールの開発に挑戦することにした。このプロダクトでエンジニアがイキイキと働けて、離職率の低下と自社の評判の向上も期待できる。さらにエンジニア同士がより仲良くなり、活発な意見交換とアウトプットをする風土の醸成ができると考える。

## 開発のモチベーション
・ものづくりを行う職業の方が、もっと仕事を楽しむことができないかと常に考えていた。エンジニアとしての成長や、良いプロダクトを生み出すにはエンジニアがイキイキと働けることが前提だと考える。（私は前職では人事を担当していたため、職場環境の改善については他の人より意識している。）

・表現活動を行う人、クリエイターや技術者をシステムで支援したいという思いが大きなモチベーションである。これは以前、応援しているアーティストが事務所を抜けた際に、PRやグッズ販売の手段を失ってしまい困っておられたが、自分達のチャンネルや活動内容をまとめられる「POTOFU」というサービスを使って活動を再開できたというところからこの思いは来ています。これを受けて自分もクリエイターをシステムで支援したいと思うようになりました。


## 技術仕様

・社内のエンジニアの反応を見つつの開発とするため、アジャイルを採用。

・ユーザーの反応を見て機能を随時追加していく予定。

・react-router-domでSPAのアプリとする。

・API⇨Node.js、フレームワーク⇨Express ver.4.18.1

・フロント⇨React ver.18

・UI⇨material ui ver.5

・DB⇨mongoDB


## 技術の選定理由

mongoDBの選定理由

・アジャイルを採用しているので、スキーマを変更しやすいのは大きなメリットだと考えたため。

・SNSアプリにおいて読み書きの速度の速さはメリットだと考えたため。

・リレーショナルデータベースは業務経験があった。しかし、NoSQLに関しては積極的に触れてはこなかったのでエンジニアとして、キャッチアップに挑戦したいという思いが強かったため。

Node.jsの選定理由

・APIファーストのサービス構築手法に挑戦したかった。

・技術の時勢的に、モノリシックなシステムよりもフロントエンドとバックエンドの切り離しはこの先進んで行くと思ったから。

・mongooseでmongoDBとの相性もいいと考えたから。

Reactの選定理由

・SPAに挑戦したかったため。

・Vue.jsの実務経験はあったが、最も使用されているReactを、エンジニアとして見過ごすわけにはいかなかったため。

・将来的にGraphQLにも繋げられそうで将来性と発展性を感じたため。

・Reduxの考えを理解したかったため。



## 使用するパッケージ、ライブラリなど
・axios

・mongoose（mongodbとの接続）

・nodemon

・dotenv（環境変数を扱えるようにする→Express用）

・helmet

・multer（ファイルアップロード用）

## 構成


![drowio drawio1](https://user-images.githubusercontent.com/53164570/186108099-3a290a6f-170f-4ef7-bddd-987b15d2667a.png)



## 工夫した点

・ログイン状態をcontextで管理するようにした。これにより、どのコンポーネントにおいても少ない記述でログインユーザー情報が取得できるようになった。propsよりも簡素になった。

・生でReduxを書くことによって考え方がより理解できるように工夫した。

・画像のファイルパスは頻繁に使うので環境変数として設定した。

・ユーザーのクリックのしやすさを考えて、なるべくlabelタグを用いるようにした。

・品質の向上のため、APIは必ずPostmanでテストをするように心がけた。

## テスト方案
・API開発はPostmanで単体テストを実施

・回帰テストはコンポーネントが一つ完成した時に実施するのがいいかも。（issueで管理？）

## 運用方法案
・新入社員には研修時に当アプリの使い方の指導を研修担当より行う。

・管理者権限は、総務、人事にも付与。

・週報からのリンクを設置して導線を設ける。

・修正依頼や改善要求、提案は本リポジトリのissueか社内メールで受け付ける。

・障害発生時には、プログラミンググループ　〇〇部　hogehoge　内線：▲▲▲番まで

## 理想とすることはなにで、何がいまは不足しているのか

◆理想とすること

・高負荷でも、遠距離でも素早く通信ができる。

・いいね機能の他にも、リツイートや社長からのメッセージ、総務からのお知らせなどを掲載できるようにしたい。ピン留め機能もつけて社員が常に本アプリを開いて情報をリアルタイムで受け取れるようにしたい。

・AWSでデプロイし、CloudFrontで配信するようにしてコンテンツの高速化を図る。

・Fargateをエンジンにし、マイクロサービス化を推進。これによりサーバーの管理コストを最小限にしたい。

・CI/CDでテストを自動化

・Kubernetesでコンテナを管理。

◆何がいまは不足しているのか

・AWSへのデプロイに伴うアーキテクチャの設計が不足。

・Fargate採用に伴うコンテナやBlue/Greenデプロイメントの知識不足。

・ピン留め機能やお知らせ機能などは未実装。


### ◆不足に対してどうアプローチしているのか

・未実装の機能についてはユーザーの反応を見つつ随時実装する。（週報・全体会議などで呼びかけ？）

・アーキテクチャの設計はAWSコンテナ設計・構築本格入門という書籍でハンズオンも含めて学習している。

・DockerファイルやDockerの基礎は動画などで学習し、Dockerファイルから書けるように取り組んでいる。

・現職の社内で個人でアプリを開発されている方に連絡をとって相談に乗ってもらう。


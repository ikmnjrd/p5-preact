# p5-preact
p5をpreact-cliから作成したテンプレートに乗せてみた。ビルド（SSR）はp5のモジュールがwindowオブジェクトを参照しているためできなかった。なのでビルド時のオプションで`--no-prerender`を指定している。悲しい。

## demo

![gif](https://gyazo.com/1a13c1174e7ab824c48680de1cd24293)

## 主なディレクトリ
`src/components/p5wrapper` ラッパー

`src/components/sketches` コンポーネントのことを忘れ、p5らしく記述した関数置き場

`src/routes/sketchbook` view



# document
という名の製作メモ。

## 実装について
最初は[web-ext/src/cmd at master · mozilla/web-ext](https://github.com/mozilla/web-ext/tree/master/src/cmd)や[mozilla/sign-addon: Sign a Firefox add-on with Mozilla's web service](https://github.com/mozilla/sign-addon)を直接叩こうと思ったが、どちらもMozilla公式documentのない非公開APIのようで、何時何時に仕様が変わるかわからない。もし仕様変更があった際に本モジュールを書き直すのがとても面倒なので、大雑把にCLI実行をラップするだけの実装にした。

# node-web-ext
* [honeo/node-web-ext](https://github.com/honeo/node-web-ext)  
* [node-web-ext](https://www.npmjs.com/package/node-web-ext)

## なにこれ
[mozilla/web-ext](https://github.com/mozilla/web-ext)をNode.js APIから扱う。

## 使い方
```sh
$ npm i -S node-web-ext
```
```js
const NodeWebExt = require('node-web-ext');

// syntax
const promise = NodeWebExt('command', {
	arg: true,
	fooBar: 'value'
});

// example: $ web-ext sign
const promise = NodeWebExt('sign', {
	sourceDir: './src',
	artifactsDir: './dist',
	id: '{xxxxx-xxxxx-xxxxx-xxxxx-xxxxx}',
	apiKey: 'user:00000:00000',
	apiSecret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx'
}).then( (text)=>{
	console.log(text);
}).catch( (error)=>{
	console.error('failed')
});
```

## 関連
* [Getting started with web-ext - Mozilla | MDN](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext)
* [web-ext command reference - Mozilla | MDN](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/web-ext_command_reference)

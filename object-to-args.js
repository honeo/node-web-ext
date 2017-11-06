/*
	オブジェクトをCLI用の引数に変換する
		dargsFork

	Example
		arg: {foo: true, bar: '123' hogeFuga: 'piyo'}
		result: "-foo bar=\"123\" --hoge-fuga\"piyo\""
*/
const dargsFork = require('dargs-fork');
const {not} = require('@honeo/check');

// obj => string
function objectToArgs(obj){

	// Validation1, 引数はオブジェクトのみ
	if( not.obj(obj) ){
		throw new TypeError(`Invalid argument: ${obj}`);
	}

	// Validation2
	for(let [key, value] of Object.entries(obj)){

		// keyは文字列のみ
		if( not.str(key) ){
			throw new TypeError(`Invalid argument key: ${key}`);
		}

		// valueはbooleanか文字列か数値のみ
		if( not.bool(value) || not.str(value) || not.num(value) ){
		}else{
			throw new TypeError(`Invalid argument value: ${value}`);
		}

	}

	return dargsFork(obj).join(' ');
}

module.exports = objectToArgs;

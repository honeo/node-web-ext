/*
	Test
*/
const {name, version} = require('../package.json');
console.log(`${name} v${version}: test`);

// Modules
const Test = require('@honeo/test');
const NodeWebExt = require('../');
const objectToArgs = require('../object-to-args.js');

// Main
Test([function(){
	console.log('objectToArgs');
	return '-a --no-b --hoge --fuga-piyo=foobar'===objectToArgs({
		a: true,
		b: false,
		hoge: true,
		fugaPiyo: 'foobar'
	});
}, function(){
	console.log('lint');

	return NodeWebExt('lint', {
		s: './extension-src'
	}).then( (arg)=>{
		console.log('then', arg);
		return true;
	});
}, function(){
	console.log('build');

	return NodeWebExt('build', {
		a: './dist',
		s: './extension-src',
	}).then( (arg)=>{
		console.log('then', arg);
		return true;
	});
}, function(){
	console.log('sign');
	const secret = require('./gitignore/secret.json');

	return NodeWebExt('sign', {
		a: './dist',
		s: './extension-src',
		id: secret.id,
		apiKey: secret['api-key'],
		apiSecret: secret['api-secret']
	}).then( (arg)=>{
		console.log('then', arg);
		return true;
	});
}]);

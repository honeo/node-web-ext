// Modules
const {is, not} = require('@honeo/check');
const objectToArgs = require('./object-to-args.js');
const execPromise = require('./exec-promise.js');

// 本モジュール返り値
function NodeWebExt(command, option={}){
	const args = objectToArgs(option);
	return execPromise(`web-ext ${command} ${args}`);
}

module.exports = NodeWebExt;

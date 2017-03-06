console.log('test-extension: background.js');

// ページ表示数
let count = 0;

// バッヂ背景を黒に
chrome.browserAction.setBadgeBackgroundColor({
	color: [0,0,0,100]
});

/*
	全ページで動くContentScriptから呼び出し
		カウントを一個進めて、表記を簡略化してバッヂに反映する。
*/
chrome.runtime.onMessage.addListener( (value, tab, callback)=>{
	count++;
	chrome.browserAction.setBadgeText({
		text: toSI(count)
	});
});

/*
	拡張バーアイコンをクリックしたとき
		バッヂのページ表示数カウントをリセットしてバッヂに反映する……が
		default_popupで.htmlを開くように設定してあるから、排他仕様のため機能しない
*/
chrome.browserAction.onClicked.addListener( (tab)=>{
	count = 0;
	chrome.browserAction.setBadgeText({
		text: '0'
	});
});

/*
	数値の桁まとめ
*/
function toSI(num, isByte){
	var baseNum = isByte ? 1024: 1000,
		placeArray = [
			[baseNum, 'K'],
			[Math.pow(baseNum,2), 'M'],
			[Math.pow(baseNum,3), 'G'],
			[Math.pow(baseNum,4), 'T'],
			[Math.pow(baseNum,5), 'P'],
			[Math.pow(baseNum,6), 'E'],
			[Math.pow(baseNum,7), 'Z'],
			[Math.pow(baseNum,8), 'Y'],
		].reverse();
	if( num<baseNum ){
		return num+'';
	}
 	var useArray = placeArray.find(function(v,i,a){
		return v[0] <= num;
	});
	return (num / useArray[0]).toFixed(0) + (isByte?useArray[1]+'B':useArray[1]);
}

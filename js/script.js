
(function(){
	var obj = {
		battleID : "",
	    name1 : "",
	    name2 : "",
	    img1 : "",
	    img2 : "",
	    comment: ""
	};
	var input1 = document.getElementById('imageInput1');
	var preview1 = document.getElementById('preview1');
	var input2 = document.getElementById('imageInput2');
	var preview2 = document.getElementById('preview2');
		
	

	input1.addEventListener('change', function(e) {

		var file = e.target.files[0];
		console.log(file);
		var fr = new FileReader();
		fr.onload = function() {
			preview1.setAttribute('style', 'background-image:url(' +fr.result+ ');');
			// console.log(fr.result);
			obj.img1 = fr.result;
		}
		fr.readAsDataURL(file);
	},false);

	input2.addEventListener('change', function(e) {
		var file = e.target.files[0];
		var fr = new FileReader();
		fr.onload = function() {
			preview2.setAttribute('style', 'background-image:url(' +fr.result+ ');');
			// console.log(fr.result);
			obj.img2 = fr.result;
		}
		fr.readAsDataURL(file);
	},false);


	// input1.addEventListener('change', function(e) {
	// 	setPreview(e, "img1", preview1);
	// },false);

	// function setPreview (event, img, preview) {
	// 	var file = event.target.files[0];
	// 	var fr = new FileReader();
	// 	fr.onload = function() {
	// 		preview.setAttribute('style', 'background-image:url(' +fr.result+ ');');
	// 		console.log(fr.result);
	// 		obj[img] = fr.result;
	// 	}
	// };

	var builtbtn = document.getElementsByClassName("builtbtn");
	builtbtn[0].addEventListener('click',function(){

		var comment = document.getElementById("commentbox").value;
		// console.log(comment);
		obj.comment = comment;

		var name1 = document.getElementById("name1").value;
		var name2 = document.getElementById("name2").value;
		obj.name1 = name1;
		obj.name2 = name2;

		// ローカルストレージオブジェクトを取得する
		var local_storage = window.localStorage;
	
		// 出力テスト
		//console.log(local_storage);
		// ウェブストレージに対応している
	
		// オブジェクトから JSON 文字列に変換
		//var str = JSON.stringify(obj);
		
		//JSON 文字列を配列を作る
		var battleList = JSON.parse(localStorage.getItem("sponge_key"));

		if (!battleList) {
			battleList = [];
		}

		obj.battleID = battleList.length;	
		console.log(obj.battleID);

		battleList.unshift(obj);
		
		console.log(battleList);
		
		// オブジェクトから JSON 文字列に変換
		var json = JSON.stringify(battleList);
		
		// JSON 文字列を保存
		localStorage.setItem("sponge_key", json);
	})
})();
// 	fr.readAsDataURL(file);
// }, false);

// var saveLocalStorage = function (key, value) {
// 	localStorage.setItem(key, JSON.stringify(value));
// }
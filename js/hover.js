(function() {
	document.addEventListener("DOMContentLoaded", function(e) {
	
		/* 戻るボタン */
		document.getElementById('a_back').addEventListener("touchstart", function(e) {
			var element = document.getElementById('h_back');
			element.className = "back_img_on";
		})
		document.getElementById('a_back').addEventListener("touchend", function(e) {
			var element = document.getElementById('h_back');
			element.className = "back_img";
			location.href = "../battle_build/index.html"
		})
		
		/* 対戦作成ボタン */
		document.getElementById('a_build').addEventListener("touchstart", function(e) {
			var element = document.getElementById('h_build');
			element.className = "build_img_on";
		})
		document.getElementById('a_build').addEventListener("touchend", function(e) {
			var element = document.getElementById('h_build');
			element.className = "build_img";
			location.href = "../battle_build/index.html"
		})
		
		
		/* ハゲドウボタン */
		document.getElementsByClassName('hagedou').addEventListener("touchstart", function(e) {
			var element = document.getElementsByClassName('hagedou');
			console.log(element);
			element.className = "hagedou_on";			
		})
/*
		document.getElementById('a_back').addEventListener("touchend", function(e) {
			var element = document.getElementById('h_back');
			console.log(element);
			element.className = "back_img";
			location.href = "../vote/index.html"
		})
*/
		
	})
})();
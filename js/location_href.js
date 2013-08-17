(function() {
	document.addEventListener("DOMContentLoaded", function(e) {
		
		/* 作成ボタン */
		
		var builtbtnEl = document.getElementById('builtbtn');
		builtbtnEl.addEventListener('touchstart',function(){
			builtbtnEl.className = "builtbtn_img_on";
		})
		builtbtnEl.addEventListener('touchend',function(){
			builtbtnEl.className = "builtbtn_img";
			location.href = "../battle_list/index.html"
		})
	})
	
})();
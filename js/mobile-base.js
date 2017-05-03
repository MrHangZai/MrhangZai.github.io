(function(){
	function w() {
	  var r = document.documentElement;
	  var a = r.getBoundingClientRect().width;
	  a > 750 && (a = 750), rem = a / 7.5, r.style.fontSize = rem + "px"
	}
	var t;
	w(), window.addEventListener("resize", function() {
	  t && clearTimeout(t), t = setTimeout(w, 300)
	}, false)
})();
function goBack(){
	if(history.length==1&&document.referrer){
		location.href=document.referrer;
	}else{
		history.go(-1);
	}
}
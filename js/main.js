
/*筛选框*/
(function(){
	var navBox = $(".js-knowledge-nav");
	var navSynthesis = $(".js_indexed_nav li");
	var subnavCont = $('.js-subnav-cont');
	var subnavContLi = $('.js-subnav-cont .sub-nav-cont');
	var subMod = $('.js-sub-mod');
	var pubLab;
	navSynthesis.on("click", function() {
	    var lab = $(this).attr("lab");
	    var _index = $(this).index();
	    var hasFixed = navBox.hasClass('fixed');
	    navSynthesis.removeClass('active');
	    $(this).addClass('active');
	    subnavContLi.hide();
	    subnavContLi.eq(_index).show();
	    subnavCont.show();
	    if (hasFixed && pubLab == lab) {
	    	$(this).removeClass('active');
	        navBox.removeClass('fixed');
	        subnavContLi.hide();
	        subnavCont.hide();
	    } else {
	        navBox.addClass('fixed');
	        pubLab = lab;
	    }
	});

	subMod.on('click',function(){
		navSynthesis.removeClass('active');
		subnavContLi.hide();
		navBox.removeClass('fixed');
		subnavCont.hide();
	});
})();

/*分享*/
(function(){

	var sharePopup;
	$('.js-share-btn').on('click',function(){
		sharePopup = new showPopup({
		    customClassName: "c-share-popup-modal"
		});
	});

	$(".c-share-copytip-cancel-btn").on("click", function() {
	    sharePopup.closePopup();
	});
	$(".c-share-copytip-link").on("click", function(F) {
	    return false
	});

	window._bd_share_config={
		"common":{
			"bdSnsKey":{},
			"bdText":"",
			"bdMini":"2",
			"bdMiniList":false,
			"bdPic":"",
			"bdStyle":"0",
			"bdSize":"16"
		},
		"share":{},
		"image":{
			"viewList":["sqq","tsina","tqq","renren","weixin"],
			"viewText":"分享到：",
			"viewSize":"24"
		},
		"selectShare":{
			"bdContainerClass":null,
			"bdSelectMiniList":["sqq","tsina","tqq","renren","weixin"]
		}
	};
	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

})();

/*测试题*/
(function(){
	var radiusNode = $('.js-test-radius > a');
	var djsJd = $('#js-djs-jd');
	var djsText = $('#js-djs-text');
	var timeNum;
	var downTimer;
	radiusNode.on('click',function(){
		radiusNode.removeClass('cur');
		$(this).addClass('cur');
	});
	countDown();
	function countDown(){
		if(!window.testTime){
			return false;
		}

		var	dateTime = 60*window.testTime;
		

		goCountDown(dateTime);
	}

	function goCountDown(dateTime){
		timeNum = dateTime;
		var minute = parseInt(timeNum/60);
		var second = timeNum%60;
		var textHtml = "";
		var loaderWid = 100;
		if(djsText.length>0){
			if(timeNum > 0){
				if(minute <= 0){
					textHtml = "剩" + second + "秒";
				} else {
					textHtml = "剩" + minute + "分" + second + "秒";
				}
			} else {
				textHtml = "时间到！";
			}
			djsText.html(textHtml);
		}
		if(djsJd.length>0){
			loaderWid = timeNum/(60*window.testTime);
			djsJd.css({'width':loaderWid*100+'%'});
		}

		if(!downTimer){
			clearTimeout(downTimer);
		}
		if(timeNum < 0){
			return;
		}
		
		downTimer = setTimeout(function(){
			timeNum = timeNum-1;
			goCountDown(timeNum);
		},1000);
	}
	
})();


/*标签页面*/
(function(){
	var labelMenu = $('.js-label-menu li');
	var labelCont = $('.js-label-cont .label-content-nr-box');
	var delLabelNode = $('.del-label');
	labelMenu.on('click',function(){
		var _index = $(this).index();
		labelMenu.removeClass('cur');
		labelCont.removeClass('cur');
		$(this).addClass('cur');
		labelCont.eq(_index).addClass('cur');
		delLabelNode.css({'display':'none'});
	});

	var editLabel = $('.js-edit-label');
	editLabel.on('click',function(){
		var delLabel = $(this).parents('.label-content-nr-box').find('.del-label');

		var delHasShow = delLabel.eq(0).css('display');
		if(delHasShow == 'none'){
			delLabel.css({'display':'block'});
		} else {
			delLabel.css({'display':'none'});
		}
	});
	delLabelNode.on('click',function(){
		$(this).parents('a').remove();
	});
})()
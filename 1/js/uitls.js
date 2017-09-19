var UT={    
 Query:function(e){return document.querySelector(e);},
 QueryAll:function(e){return document.querySelectorAll(e);},
 Bind:function(e,fn){this.Query(e).addEventListener("click",fn,false);},
 Binds:function(e,fn){var aE=this.QueryAll(e);for(var i=0;i<aE.length;i++){aE[i].index=i;aE[i].addEventListener("click",fn,false);}},
 show:function(e){var aE=this.QueryAll(e);for(var i=0;i<aE.length;i++){aE[i].style.display = "block";}},
 hide:function(e){var aE=this.QueryAll(e);for(var i=0;i<aE.length;i++){aE[i].style.display = "none";}},
 GetUrl:function(s){var r=new RegExp("(^|&)"+s+"=([^&]*)(&|$)","i");var a=window.location.search.substr(1).match(r);if(a!=null){return a[2];}else{return null;}},
 isMobile:function(v){return (/^1(3\d|(4[5|7|9])|(5[0-3|5-9])|(7[0|1|3|5-8])|(8\d))-?\d{4}-?\d{4}$/.test(v));},
 setStyle:function(e,json){for(var key in json){this.Query(e).style[key] = json[key];}},
 fade:function(obj,time,bl,fn){// id名, 时间，(1 是 fadeIn ,0 是 fadeOut) , 回调函数
 	if(bl){
          UT.setStyle(obj,{"opacity":0, "display":"block"});
          var timer = setTimeout(function(){
             UT.setStyle(obj,{"opacity":1,"transition":"all "+time+"s", "-webkit-transition":"all "+time+"s"});
	         clearTimeout(timer);
          }, 0);
          var  dis = "block";
	    }else{
	      UT.setStyle(obj,{"opacity":0, "transition":"all "+time+"s", "-webkit-transition":"all "+time+"s"});
	   	  var  dis = "none";
	    }

        function tab(){
	     	fn && fn();
	     	UT.Query(obj).style.display = dis;
           UT.Query(obj).removeEventListener("transitionend",tab,false);
	    }
        UT.Query(obj).addEventListener("transitionend",tab,false);

 }
 
};

window.addEventListener("load",function(){document.body.style.minHeight=document.body.clientHeight+"px";window.ontouchmove=function(e){e.preventDefault();};},false);
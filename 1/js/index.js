var main={};
main.init = function(){
  var load = new MF_Loading({
    LDpage:false,
    LDtween:false,
    srcNames: 'srcs',
    LDsuccess:function(){
       main.LoadPage();
    }
  });
  load.add({type:"img",src:"img/flower_b.png"});
  load.add({type:"img",src:"img/flower_t.png"});
  load.add({type:"img",src:"img/mask1.png"});
  load.add({type:"img",src:"img/mask2.png"});
  load.start();
};
main.LoadPage = function(){
  var loading = new MF_Loading({
    LDpage:true,
    LDtween:false,
    srcNames: 'srcs',
    LDup:function(v){
       UT.Query("#load_txt").innerHTML = v+"%";
       if(v <= 62){
         UT.Query(".flower_b").style.height = v/62 * 169 + "px";
       }else{
         UT.Query(".flower_t").style.height = (v-62)/38 * 104 + "px";
       }
    },
    LDsuccess:function(){
      main.events();
      UT.fade(".page_0",1,0);
      UT.fade(".page_1",1,1);
      UT.fade(".page_7",1,1);
    }
  });

     //添加图片播放帧
    var list1=loading.addImgSheet({
      imgPrefix:"img/3/77156f9c8c7a496d_",
      imgType:"jpg",
      start:2,
      length:84,
      step:2
    });

    //单添加张图
    var imgs1=loading.add({type:"img",src:"img/1/sheets.png"});
    var imgs2=loading.add({type:"img",src:"img/2/sheets.png"});
    var imgs3=loading.add({type:"img",src:"img/sheets4.png"});

    main.sheets3=loading.add({type:"img",src:"img/4/sheets1.png"});
    main.sheets4=loading.add({type:"img",src:"img/4/sheets2.png"});
    main.sheets5=loading.add({type:"img",src:"img/4/sheets3.png"});
    main.sheets6=loading.add({type:"img",src:"img/4/sheets4.png"});
   
    loading.addEventListener("complete",function(){  // 同 LDsuccess

      //  拼接图片
      var animateImg1=new MF_animateSprite({
        parents:UT.Query("#animate1"),
        type:"canvas",
        width:400,
        height:154,
        imgList:imgs1,
        row:7,
        column:7,
        step:1,
        times:80,
        loop:false
      });
      
      animateImg1.play();

      var animateImg2=new MF_animateSprite({
        parents:UT.Query("#animate2"),
        type:"canvas",
        width:200,
        height:133,
        imgList:imgs2,
        row:6,
        column:6,
        step:1,
        times:80,
        loop:true
      });

      

      var animateImg3=new MF_animateSprite({
        parents:UT.Query("#animate3"),
        type:"canvas",
        width:200,
        height:133,
        imgList:imgs2,
        row:6,
        column:6,
        step:1,
        times:80,
        loop:true
      });

      // 1 图片帧
      var animateImg4=new MF_animateSheet({
        parents:UT.Query("#animate4"),
        type:"canvas",
        imgList:list1,
        step:1,
        times:80,
        loop:true
      });
      
      main.animateImg5=new MF_animateSprite({
        parents:UT.Query("#animate5"),
        type:"canvas",
        width:264,
        height:100,
        imgList:imgs3,
        row:8,
        column:6,
        step:1,
        times:80,
        loop:true
      });
      
      animateImg1.addEventListener("complete",function(){ 

         var timer1 = setTimeout(function(){
            UT.fade(".page_1",1,0);
            UT.fade(".page_shj",1,1);
            clearTimeout(timer1);
         },1500);
        
        //画线
      var oMask_inner = UT.Query(".mask_inner");
      function tab1(){
        animateImg3.play();
        var timer5 = setTimeout(function(){
            UT.fade(".page_shj",1,0);
            UT.fade(".page_2",1,1);
            animateImg2.play();
            clearTimeout(timer5);
         } , 1000);

         oMask_inner.removeEventListener("webkitAnimationEnd",tab1,false);
         oMask_inner.removeEventListener("animationend",tab1,false);
      }
      oMask_inner.addEventListener("webkitAnimationEnd",tab1,false);
      oMask_inner.addEventListener("animationend",tab1,false);
      
      var timer2 = setTimeout(function(){
            UT.fade(".page_2",1,0);
            UT.fade(".page_3",1,1);
            animateImg4.play();
            clearTimeout(timer2);
      },14000);

      },false);
      
      //卷图
      var oYuan = UT.Query(".yuan1");
      function tab(){
        var aI = UT.QueryAll("#wrap i");
        var bp = 30;
        var Y = 8;
        for (var i = 0; i < 25; i++) {
            bp  = bp - 30;
            Y  = Y + 2;
            aI[i].setAttribute("style","background-position: "+bp+"px 0px;-webkit-transform: translate3d(0px,  0, 0px)  rotateY(-"+Y+"deg);transform: translate3d(0px,  0, 0px)  rotateY(-"+Y+"deg);");
        }
         UT.fade(".page_3",1,0);
         UT.fade(".page_4",1,1,function(){
           for (var i = 0; i < aI.length; i++) {
             aI[i].classList.add("cur");
           }
         });
         oYuan.removeEventListener("webkitAnimationEnd",tab,false);
         oYuan.removeEventListener("animationend",tab,false);

        var timer1 = setTimeout(function(){
            UT.fade(".page_4",1,0);
            UT.fade(".page_5",1,1);
            main.snow();
            clearTimeout(timer1);
         } , 5000);

      }
      oYuan.addEventListener("webkitAnimationEnd",tab,false);
      oYuan.addEventListener("animationend",tab,false);


    },false);//loading complete

  loading.start();
};

main.events = function(){
  var  oDiv = UT.Query(".page_5");
  var startX = 0 ,startY = 0 ,moveEndX = 0 ,moveEndY = 0 ,disX = 0 ,disY = 0 ,oldX = 0,oldY = 0;
  function start(e){
     e.preventDefault();
     startX = e.changedTouches[0].clientX;
     startY = e.changedTouches[0].clientY;
     oldX = parseInt(getComputedStyle(this,null).left);
     oldY = parseInt(getComputedStyle(this,null).top);
  }
  function move(e){
     e.preventDefault();
     moveEndX = e.changedTouches[0].clientX;
     moveEndY = e.changedTouches[0].clientY;
     disX = moveEndX - startX;
     disY = moveEndY - startY;
     if (Math.abs(disY) > Math.abs(disX) && disY < 0){main.OFF = true;}
  }
  oDiv.addEventListener("touchstart",start,false);
  oDiv.addEventListener("touchmove",move,false);
  oDiv.addEventListener("touchend",function(){
     if(main.OFF){
        UT.fade(".page_5",1,0);
        UT.fade(".page_6",1,1);
        main.animateImg5.play();
        main.mask();
        clearInterval(main.timer);
     }
  },false);
}; // events end

//花瓣
main.snow = function(){
    var SCREEN_WIDTH = window.innerWidth;
    var SCREEN_HEIGHT = window.innerHeight;
    var container;
    var particle;
    var camera;
    var scene;
    var renderer;
    var mouseX = 0;
    var mouseY = 0;
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
    var particles = []; 
    var particleImage = new Image();
    particleImage.src = 'img/3.png'; 

    container = document.createElement('div');
    UT.Query(".page_5Box").appendChild(container);
    camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000);
    camera.position.z = 1000;
    scene = new THREE.Scene();
    scene.add(camera);
    renderer = new THREE.CanvasRenderer();
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    var material = new THREE.ParticleBasicMaterial( { map: new THREE.Texture(particleImage) } );
    for (var i = 0; i < 40; i++) { 
      particle = new Particle3D( material);
      particle.position.x = Math.random() * 2000 - 1000;
      particle.position.y = Math.random() * 2000 - 1000;
      particle.position.z = Math.random() * 2000 - 1000;
      particle.scale.x = particle.scale.y =  1;
      scene.add( particle );
      particles.push(particle); 
    }
    container.appendChild( renderer.domElement );
    main.timer =  setInterval( loop, 1000 / 60 );

    function loop() {
    for(var i = 0; i<particles.length; i++){
        var particle = particles[i]; 
        particle.updatePhysics(); 
        with(particle.position){
          if(y<-1000) y+=2000; 
          if(x>1000) x-=2000; 
          else if(x<-1000) x+=2000; 
          if(z>1000) z-=2000; 
          else if(z<-1000) z+=2000; 
        }       
      }
      camera.position.x += ( mouseX - camera.position.x ) * 0.05;
      camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
      camera.lookAt(scene.position); 
      renderer.render( scene, camera );
    }

};// snow end

//烟花
main.yanhua = function(){
    function rnd(n,m){return parseInt(n+Math.random()*(m-n)); }
    function setStyle(obj,json){for(var key in json){  obj.style[key] = json[key]; }}
    function TopLeft(){var l = rnd(-50,700);var t = rnd(-50,100);return {left:l + "px",top:t + "px"};}

   //随机 烟花
    var fwE3 = UT.Query("#animates3"),fwE4 = UT.Query("#animates4"),fwE5 = UT.Query("#animates5"),fwE6 = UT.Query("#animates6");

    var animateImgs3 = new MF_animateSprite({
      parents:fwE3,
      type:"canvas",
      width:205,
      height:217,
      imgList:main.sheets3,
      row:6,
      column:5,
      step:1,
      times:110,
      loop:false
    });

    
    var animateImgs4 = new MF_animateSprite({
      parents:fwE4,
      type:"canvas",
      width:151,
      height:144,
      imgList:main.sheets4,
      row:6,
      column:5,
      step:1,
      times:100,
      loop:false
    });


    var animateImgs5 = new MF_animateSprite({
      parents:fwE5,
      type:"canvas",
      width:202,
      height:209,
      imgList:main.sheets5,
      row:2,
      column:19,
      step:1,
      times:130,
      loop:false
    });

    var animateImgs6 = new MF_animateSprite({
      parents:fwE6,
      type:"canvas",
      width:167,
      height:166,
      imgList:main.sheets6,
      row:2,
      column:16,
      step:1,
      times:120,
      loop:false
    });
        
    animateImgs3.addEventListener("complete",function(){
           UT.hide("#animates3");
    });
    animateImgs4.addEventListener("complete",function(){
           UT.hide("#animates4");
    }); 
    animateImgs5.addEventListener("complete",function(){
           UT.hide("#animates5");
    }); 
    animateImgs6.addEventListener("complete",function(){
           UT.hide("#animates6");
    });  

    var timer1 = setInterval(function(){
      UT.show("#animates3");
      setStyle(fwE3,TopLeft());
      animateImgs3.setStart(0);
      animateImgs3.play();
    },2600);

    var timer2 = setInterval(function(){
      UT.show("#animates4");
      setStyle(fwE4,TopLeft());
      animateImgs4.setStart(0);
      animateImgs4.play();
    },5000);

    var timer3 = setInterval(function(){
      UT.show("#animates5");
      setStyle(fwE5,TopLeft());
      animateImgs5.setStart(0);
      animateImgs5.play();
    },9880);

    var timer4 = setInterval(function(){
      UT.show("#animates6");
      setStyle(fwE6,TopLeft());
      animateImgs6.setStart(0);
      animateImgs6.play();
    },7000);

};


main.mask = function(){
  var imgList = new creatImgList(fn,["img/img6.jpg","img/img7.jpg"],"maskList",callback);
      imgList.init();

  function fn(){
    UT.fade("#animate5",0.1,0);
    main.animateImg5.stop();
  }

  function callback(){
    main.yanhua();
    var timer1 = setTimeout(function(){
        UT.fade(".page_6",1,0);
        UT.fade(".page_7",1,1);
        clearTimeout(timer1);
    },2000);
  }
  //遮罩
  function creatImgList(fn,imgArr,countNode,callback){  //刚触发时函数，图片地址，盒子，回调函数
          var _w = document.documentElement.clientWidth;  //屏幕宽
      var _h = document.documentElement.clientHeight; //屏幕高
      var _s=this;
      this.fn=fn;
      this.callback=callback;
      this.imgArr = imgArr, 
      this.index = 0,
      this.isLast = false,
      this.parentNode = countNode,
      this.an = function(obj){
        var self = this;
        this.timer = setInterval(function(){
          self.index++;
          var low =  Math.floor(self.index/4);
          var raw = self.index%4;
          if(self.index>19){
            clearInterval(self.timer);
            if(typeof(_s.callback)==="function"){
              _s.callback();
            }
            self.index = 0;
            return;
          } 
          obj.style.webkitMask = (-raw*_w)+"px "+(-low*_h)+"px";
        },150);
      },
      this.initItem = function(i){
        var self = this;
        var _div = document.createElement("div");
          _div.style.background = "url("+this.imgArr[i]+") center bottom no-repeat";
          //_div.style.backgroundSize = ""+_w+"px auto";  
          _div.style.display = "none";
          _div.style.opacity = "0";
          if(i<2){
            _div.style.display = "block";
          }
          if(i<1){
            _div.style.opacity = "1";
          }
          _div.addEventListener("touchmove",function(){
                      if(typeof(_s.fn)==="function"){
              _s.fn();
            }
            if(!self.isLast){
              _div.style.opacity = "1";
              _div.className = "mask";
              self.an(_div);
            }
            if(this.nextSibling){
              this.nextSibling.style.display = "block";
            }else{
              self.isLast = true;
            }
          });
          document.getElementById(this.parentNode).appendChild(_div);
      },
      this.init = function(){
        if(this.imgArr){
          for(var i=0; i<this.imgArr.length; i++){
            this.initItem(i);
          }
          
        }
      }
    }
};



main.init();













 
  

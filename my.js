
var video1 = document.getElementById("video1");
var video2 = document.getElementById("video2");
var video3 = document.getElementById("video3");
var video4 = document.getElementById("video4");
var video5 = document.getElementById("video5");
var video6 = document.getElementById("video6");
var video7 = document.getElementById("video7");
var video8 = document.getElementById("video8");
var video9 = document.getElementById("video9");
var video10 = document.getElementById("video10");
var video11 = document.getElementById("video11");
var video12 = document.getElementById("video12");
var video13 = document.getElementById("video13");
var video3_back = document.getElementById("video3_back");
var video5_back = document.getElementById("video5_back");
var video7_back = document.getElementById("video7_back");
var video9_back = document.getElementById("video9_back");
var vids = document.getElementsByTagName('video');
var divload = document.getElementById("load");
for (var i = 1; i < vids.length; i++) {
vids[i].pause();
}

addEventListener("keydown", moveRect);
//video3.addEventListener("ended", function(){video1.play()});

function moveRect(e){   
     
    switch(e.keyCode){

      case 27:
                window.close();
                break;

      case 37:  // если нажата клавиша влево
                Controller.KeyBackSlide();
                break;
      case 34:
            Controller.KeyNextSlide();
            break;
      case 39:  // если нажата клавиша вправо 

            Controller.KeyNextSlide();
            break;
  }
}
var Controller = {
  playSlide: function(posittion,oldpos) {
      
    //  console.log(vids[posittion].getAttribute('class'));
    //  console.log(vids[posittion].getAttribute('id'));
     // console.log(vids[posittion].getAttribute('loop'));
      if(vids[posittion].getAttribute('class') == 'active' && posittion <=12){
        if(vids[posittion].getAttribute('loop')){
          vids[posittion].removeAttribute('loop');
          divload.setAttribute('class', '');  
          vids[posittion].addEventListener('ended', function(){Controller.glueSlide(posittion)}, false);  
        }else{
        var psnext=posittion+1;
        vids[psnext].play();
        vids[psnext].setAttribute('class', 'active');  
        vids[posittion].setAttribute('class', 'hidden');    
        vids[psnext].addEventListener('ended', function(){Controller.autoPlaySlide(psnext)}, false);
        return;  
        }
      }else{   
        vids[posittion].play();
        vids[posittion].setAttribute('class', 'active');  
        vids[oldpos].setAttribute('class', 'hidden');
        vids[posittion].addEventListener('ended', function(){Controller.autoPlaySlide(psnext,oldpos)}, false);  
      }
},
 glueSlide: function(posittion){
        var psnext=posittion+1;
        vids[posittion].removeEventListener('ended', function(){Controller.glueSlide(posittion)}, false);
        divload.setAttribute('class', 'hidden');  
        vids[psnext].play();
        vids[psnext].setAttribute('class', 'active');  
        vids[posittion].setAttribute('class', 'hidden');    
       // Controller.autoPlaySlide(psnext);
        vids[psnext].addEventListener('ended', function(){Controller.autoPlaySlide(psnext)}, false); 

},
  autoPlaySlide: function(posittion,oldpos) {
  var psnext=posittion+1;
  if(oldpos){
  vids[oldpos].removeEventListener('ended', Controller.autoPlaySlide(psnext,oldpos), false);  
  }else{
  vids[posittion].removeEventListener('ended', function(){Controller.autoPlaySlide(psnext)}, false);  
  }  
  vids[psnext].play();
  vids[psnext].setAttribute('class', 'active');
  vids[posittion].setAttribute('class', 'hidden');
  divload.setAttribute('class', 'hidden'); 

  },
  KeyNextSlide: function() {
    for (var i = 0; i < vids.length; i++) {                
               if(vids[i].getAttribute('class') == 'active'){
                      var z=0;
                      switch(i){
                                  case 13:
                                  i=0;
                                  break ;
                                  case 14:
                                  i=2;
                                  break;
                                  case 15:
                                  i=4;
                                  break;
                                  case 16:
                                  i=8;
                                  break;
                                                                   
                                }
                               

                            Controller.playSlide(i);                      
                                               
                       break;
                }
              }

  },

  KeyBackSlide: function() {
        for (var i = 0; i < vids.length; i++) {                
               if(vids[i].getAttribute('class') == 'active'){
                      var z=i;
                      switch(i){
                                  case 2:
                                  i=13;
                                  break ;
                                  case 4:
                                  i=14;
                                  break ;
                                  case 6:
                                  i=15;
                                  break ;
                                  case 8:
                                  i=16;
                                  break
                                  case 13:
                                  i=0;
                                  break ;
                                  case 14:
                                  i=0;
                                  break;
                                  case 15:
                                  i=2;
                                  break;
                                  case 16:
                                  i=6;
                                  break;
                                                                   
                                }
                               

                            Controller.playSlide(i,z);                      
                                               
                    break;   
                }
              }

  }
};

                       


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
                var callslidebackfull = backslidefull();
                break;
                /*for (var i = 1; i < vids.length; i++) {
                       if(vids[i].getAttribute('class') == 'active'){
                                
                                vids[i].removeAttribute('loop');
                                divload.setAttribute('class', '');
                                if(i>=14){
                                  backSlide();
                              }else{
                                vids[i].addEventListener('ended', backSlide,false);
                              }
                                      function backSlide() {
                                                if (i > 12){
                                                     if (i == 3 || i == 14){
                                                              var vid_back =vids[3].getAttribute('id');
                                                              var back = document.getElementById(vid_back)
                                                              vids[i].removeAttribute('loop');
                                                      }else{
                                                              var vid_back =vids[i-2].getAttribute('id');
                                                              var back = document.getElementById(vid_back);
                                                      }
                                                }else{
                                                    var vid_back =vids[i].getAttribute('id')+'_back';
                                                    var back = document.getElementById(vid_back);
                                                }                                             
                                                                                  
                                                back.play();
                                                back.setAttribute('class', 'active');  
                                                vids[i].setAttribute('class', 'hidden');
                                                vids[i-1].load();
                                                vids[i-1].pause();
                                                divload.setAttribute('class', 'hidden');
                                                vids[i].removeEventListener('ended', backSlide,false);
                                      }
                                      break;
                        }
                }
                break;*/
        case 39:  // если нажата клавиша вправо  

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
                                z=i+1

                      
                          var qqq = 'myFunction'+z +'()';
                          //obj=eval(qqq);
                          console.log(qqq);
                          eval(qqq);                        
                        break;
                }
        }   
         
           // break;  
}
}

window.onload=function()
{ /*
  setTimeout(function() { vids[0].play()}, 3000);
  vids[0].play();
  vids[0].setAttribute('class', 'active');
  //vids[0].setAttribute('onclick', 'moveRect()');*/
  
}


function backSlide(i) {
  if (i > 12){
               if (i == 3 || i==14 ){
                          var vid_back =vids[3].getAttribute('id'+'_back');
                          var back = document.getElementById(vid_back)
                          vids[3].removeAttribute('loop');              
              }else{
                          var vid_back =vids[i].getAttribute('id');
                          var back = document.getElementById(vid_back);
              }
                                                      
 }else{
  var vid_back =vids[i].getAttribute('id')+'_back';
  var back = document.getElementById(vid_back);
  }                                                                                

  back.play();
  back.setAttribute('class', 'active');  
  vids[i].setAttribute('class', 'hidden');
  vids[i-1].load();
  vids[i-1].pause();
  divload.setAttribute('class', 'hidden');
  vids[i].removeEventListener('ended',function(){backSlide(i)},false);
}
function backslidefull(){
  for (var i = 1; i < vids.length; i++) {
                       if(vids[i].getAttribute('class') == 'active'){
                                
                               // vids[i].removeAttribute('loop');
                                divload.setAttribute('class', '');                              
                                vids[i].removeAttribute('loop');
                                vids[i].addEventListener('ended',function(){backSlide(i)},false);
                                return;
                              }
  }
}
                                     /*function backSlide1(i) {
                                                if (i > 12){
                                                     if (i == 3 || i ==14){
                                                              var vid_back =vids[3].getAttribute('id');
                                                              var back = document.getElementById(vid_back)
                                                              vids[i].removeAttribute('loop');
                                                      }else{
                                                              var vid_back =vids[i-2].getAttribute('id');
                                                              var back = document.getElementById(vid_back);
                                                      }
                                                }else{
                                                    var vid_back =vids[i].getAttribute('id')+'_back';
                                                    var back = document.getElementById(vid_back);
                                                }                                             
                                                                                  
                                                back.play();
                                                back.setAttribute('class', 'active');  
                                                vids[i].setAttribute('class', 'hidden');
                                                vids[i-1].load();
                                                vids[i-1].pause();
                                                divload.setAttribute('class', 'hidden');
                                                vids[i].removeEventListener('ended', backSlide,false);
                                      }
                                      
                        }*/
                
              

function myFunction1() {   
  if(video1.getAttribute('class') == 'active'){
  video2.play();
  video2.setAttribute('class', 'active');  
  video1.setAttribute('class', 'hidden');  
  video2.addEventListener('ended', myFunction2, false);  
}else{   
  video2.play();
  video2.setAttribute('class', 'active');  
  video3_back.setAttribute('class', 'hidden');
  video2.addEventListener('ended', myFunction2, false);  
}
  
  
}

function myFunction2() {
  //video2.removeEventListener('ended', myFunction2, false); 
  video3.play();
  video3.setAttribute('class', 'active');
  video2.setAttribute('class', 'hidden');

}
function myFunction3() { 
  if(video3.getAttribute('class') == 'active'){
      divload.setAttribute('class', '');
      video3.removeAttribute('loop');  
      video3.addEventListener('ended', myFunction3_1, false) ;
    }else{
       divload.setAttribute('class', '');
       video3.play();
       video3.setAttribute('class', 'active');
       video5_back.setAttribute('class', 'hidden');
       video3.addEventListener('ended', myFunction3_1, false); 

    }

  

}
function myFunction3_1() {   
  video3.removeEventListener('ended', myFunction3_1, false); 
  divload.setAttribute('class', 'hidden');
  video4.play();
  video4.setAttribute('class', 'active');
  video3.setAttribute('class', 'hidden');
  video4.addEventListener('ended', myFunction4, false);
  

}

function myFunction4() {   
      video4.removeEventListener('ended', myFunction4, false); 
      video5.play();
      video5.setAttribute('class', 'active');
      video4.setAttribute('class', 'hidden');
    }

function myFunction5() {
  if(video5.getAttribute('class') == 'active'){
      divload.setAttribute('class', '');   
      video5.removeAttribute('loop');  
      video5.addEventListener('ended', myFunction5_1, false) ;
}else{
       divload.setAttribute('class', '');
       video5.play();
       video5.setAttribute('class', 'active');
       video7_back.setAttribute('class', 'hidden');
       video5.addEventListener('ended', myFunction5_1, false); 

}
}
function myFunction5_1() {   
  
  divload.setAttribute('class', 'hidden');
  video6.play();
  video6.setAttribute('class', 'active');
  video5.setAttribute('class', 'hidden');
  video6.addEventListener('ended', myFunction6, false);

}

function myFunction6() {   
   
  video7.play();
  video7.setAttribute('class', 'active');
  video6.setAttribute('class', 'hidden');  

}

function myFunction7() {
  if(video7.getAttribute('class') == 'active'){
        divload.setAttribute('class', '');   
        video7.removeAttribute('loop');  
        video7.addEventListener('ended', myFunction7_1, false) ;
  }else{
       divload.setAttribute('class', '');
       video7.play();
       video7.setAttribute('class', 'active');
       video9_back.setAttribute('class', 'hidden');
       video7.addEventListener('ended', myFunction7_1, false); 
}
}

function myFunction7_1() {   
  video7.removeEventListener('ended', myFunction7_1, false); 
  divload.setAttribute('class', 'hidden'); 
  video8.play();
  video8.setAttribute('class', 'active');
  video7.setAttribute('class', 'hidden');
  video8.addEventListener('ended', myFunction8, false);  

}

function myFunction8() {   
   
  video9.play();
  video9.setAttribute('class', 'active');
  video8.setAttribute('class', 'hidden');  
}

function myFunction9() { 
   if(video9.getAttribute('class') == 'active'){
          divload.setAttribute('class', '');  
          video9.removeAttribute('loop');  
          video9.addEventListener('ended', myFunction9_1, false) ;
   }else{
       divload.setAttribute('class', '');
       video9.play();
       video9.setAttribute('class', 'active');
       video9_back.setAttribute('class', 'hidden');
       video9.addEventListener('ended', myFunction9_1, false); 
}
}
  
function myFunction9_1() {   
  video9.removeEventListener('ended', myFunction9_1, false); 
  divload.setAttribute('class', 'hidden'); 
  video10.play();
  video10.setAttribute('class', 'active');
  video9.setAttribute('class', 'hidden');
  video10.addEventListener('ended', myFunction10, false);  
  

}

function myFunction10() {   
   
  video11.play();
  video11.setAttribute('class', 'active');
  video10.setAttribute('class', 'hidden');  

}

function myFunction11() {   
  divload.setAttribute('class', '');
  video11.removeAttribute('loop');
  video11.addEventListener('ended', myFunction11_1, false) ;
}
function myFunction11_1() {   
  video11.removeEventListener('ended', myFunction11_1, false); 
  divload.setAttribute('class', 'hidden'); 
  video12.play();
  video12.setAttribute('class', 'active');
  video11.setAttribute('class', 'hidden');  
  video12.addEventListener('ended', myFunction12, false);

}

function myFunction12() {   
   
  video13.play();
  video13.setAttribute('class', 'active');
  video12.setAttribute('class', 'hidden');  
  

}
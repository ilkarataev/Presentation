function myFunction() {   
  video2.play();
  video2.setAttribute('class', '');  
  video1.setAttribute('class', 'hidden');
  video2.addEventListener('ended', myFunction1, false);  
  
  
}

function myFunction1() {
        
  video3.play();
  video3.setAttribute('class', 'active');
  video2.setAttribute('class', 'hidden');

}
function myFunction2() { 
  video3.removeAttribute("loop","");  
  video3.addEventListener('ended', myFunction2_1, false) ;
  

}
function myFunction2_1() {   
  video4.play();
  video4.setAttribute('class', '');
  video3.setAttribute('class', 'hidden');
  video4.addEventListener('ended', myFunction3, false);
  

}

function myFunction3() {   
   
  video5.play();
  video5.setAttribute('class', '');
  video4.setAttribute('class', 'hidden');

}

function myFunction4() {   
  video5.removeAttribute("loop","");  
  video5.addEventListener('ended', myFunction4_1, false) ;
}
function myFunction4_1() {   
   
  video6.play();
  video6.setAttribute('class', '');
  video5.setAttribute('class', 'hidden');
  video6.addEventListener('ended', myFunction5, false);

}

function myFunction5() {   
   
  video7.play();
  video7.setAttribute('class', '');
  video6.setAttribute('class', 'hidden');  

}

function myFunction6() {   
  video7.removeAttribute("loop","");  
  video7.addEventListener('ended', myFunction6_1, false) ;
}

function myFunction6_1() {   
   
  video8.play();
  video8.setAttribute('class', '');
  video7.setAttribute('class', 'hidden');
  video8.addEventListener('ended', myFunction7, false);  

}

function myFunction7() {   
   
  video9.play();
  video9.setAttribute('class', '');
  video8.setAttribute('class', 'hidden');  
}

function myFunction8() {   
  video9.removeAttribute("loop","");  
  video9.addEventListener('ended', myFunction8_1, false) ;
}

function myFunction8_1() {   
   
  video10.play();
  video10.setAttribute('class', '');
  video9.setAttribute('class', 'hidden');
  video10.addEventListener('ended', myFunction9, false);  
  

}

function myFunction9() {   
   
  video11.play();
  video11.setAttribute('class', '');
  video10.setAttribute('class', 'hidden');  

}

function myFunction10() {   
  video11.removeAttribute("loop","");  
  video11.addEventListener('ended', myFunction10_1, false) ;
}
function myFunction10_1() {   
   
  video12.play();
  video12.setAttribute('class', '');
  video11.setAttribute('class', 'hidden');  
  video12.addEventListener('ended', myFunction11, false);

}

function myFunction11() {   
   
  video13.play();
  video13.setAttribute('class', '');
  video12.setAttribute('class', 'hidden');  
  

}
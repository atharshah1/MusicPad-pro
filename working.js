const pad1= document.getElementById("p1");
const pad2= document.getElementById("p2");
const pad3= document.getElementById("p3");
const pad4= document.getElementById("p4");
const pad5= document.getElementById("p5");
const pad6= document.getElementById("p6");
var p1=document.getElementById("pad1");
var p2=document.getElementById("pad2");
var p3=document.getElementById("pad3");
var p4=document.getElementById("pad4");
var p5=document.getElementById("pad5");
var p6=document.getElementById("pad6");
function m1(){
    p1.classList.toggle("wave");
    pad2.pause();
    pad3.pause();
    pad4.pause();
    pad5.pause();
    pad6.pause();
    if(p1.classList.contains("wave")){
         pad1.play();
    }
    else{
        pad1.pause();
    }
    console.log("playing");
    if(pad1.play){
        p2.classList.remove("wave");
        p3.classList.remove("wave");
        p4.classList.remove("wave");
        p5.classList.remove("wave");
        p6.classList.remove("wave");
    }
    pad1.onended = function(){
        p1.classList.remove("wave");
    }
}
function m2(){
    p2.classList.toggle("wave");
    pad1.pause();
    pad3.pause();
    pad4.pause();
    pad5.pause();
    pad6.pause();
    if(p2.classList.contains("wave")){
        pad2.play();
   }
   else{
       pad2.pause();
   }
    console.log("playing");
    if(pad2.play){
        p1.classList.remove("wave");
        p3.classList.remove("wave");
        p4.classList.remove("wave");
        p5.classList.remove("wave");
        p6.classList.remove("wave");
    }

        pad2.onended= function(){
        p2.classList.remove("wave");
    }
}
function m3(){
    p3.classList.toggle("wave");
    pad1.pause();
    pad2.pause();
    pad4.pause();
    pad5.pause();
    pad6.pause();
    if(p3.classList.contains("wave")){
        pad3.play();
   }
   else{
       pad3.pause();
   }
    console.log("playing");
    if(pad3.play){
        p2.classList.remove("wave");
        p1.classList.remove("wave");
        p4.classList.remove("wave");
        p5.classList.remove("wave");
        p6.classList.remove("wave");
    }

        pad3.onended= function(){
        p3.classList.remove("wave");
    }
}
function m4(){
    p4.classList.toggle("wave");
    pad1.pause();
    pad3.pause();
    pad2.pause();
    pad5.pause();
    pad6.pause();
    if(p4.classList.contains("wave")){
        pad4.play();
   }
   else{
       pad4.pause();
   }
    console.log("playing");
    if(pad4.play){
        p2.classList.remove("wave");
        p3.classList.remove("wave");
        p1.classList.remove("wave");
        p5.classList.remove("wave");
        p6.classList.remove("wave");
    }

        pad4.onended= function(){
        p4.classList.remove("wave");
    }
}
function m5(){
    p5.classList.toggle("wave");
    pad1.pause();
    pad3.pause();
    pad4.pause();
    pad2.pause();
    pad6.pause();
    if(p5.classList.contains("wave")){
        pad5.play();
   }
   else{
       pad5.pause();
   }
    console.log("playing");
    if(pad5.play){
        p2.classList.remove("wave");
        p3.classList.remove("wave");
        p4.classList.remove("wave");
        p1.classList.remove("wave");
        p6.classList.remove("wave");
    }
   pad5.onended= function(){
        p5.classList.remove("wave");
    }
}
function m6(){
    p6.classList.toggle("wave");
    pad1.pause();
    pad3.pause();
    pad4.pause();
    pad5.pause();
    pad2.pause();
    if(p6.classList.contains("wave")){
        pad6.play();
   }
   else{
       pad6.pause();
   }
    console.log("playing");
    if(pad6.play){
        p2.classList.remove("wave");
        p3.classList.remove("wave");
        p4.classList.remove("wave");
        p5.classList.remove("wave");
        p1.classList.remove("wave");
    }
        pad6.onended= function(){
        p6.classList.remove("wave");
    }
}
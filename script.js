var element=document.querySelector(".a");


element.addEventListener("mousedown",start);


function start(){
    addEventListener("mousemove",move);

}

function move(e){
     
    element.style.left=e.pageX-80+"px";
    element.style.top=e.pageY-130+"px";
 
}

element.addEventListener("mouseup",function(){
    removeEventListener("mousemove",move);
})

var element2=document.querySelector(".b");


element2.addEventListener("mousedown",start1);


function start1(){
    addEventListener("mousemove",move1);

}

function move1(e){
     
    element2.style.left=e.pageX-50+"px";
    element2.style.top=e.pageY-320+"px";
 
}

element2.addEventListener("mouseup",function(){
    removeEventListener("mousemove",move1);
})



var element3=document.querySelector(".c");


element3.addEventListener("mousedown",start3);


function start3(){
    addEventListener("mousemove",move3);

}

function move3(e){
     
    element3.style.left=e.pageX-80+"px";
    element3.style.top=e.pageY-500+"px";
 
}

element3.addEventListener("mouseup",function(){
    removeEventListener("mousemove",move3);
})




var element4=document.querySelector(".d");


element4.addEventListener("mousedown",start4);


function start4(){
    addEventListener("mousemove",move4);

}

function move4(e){
     
    element4.style.left=e.pageX-50+"px";
    element4.style.top=e.pageY-630+"px";
 
}

element4.addEventListener("mouseup",function(){
    removeEventListener("mousemove",move4);
})




var element5=document.querySelector(".e");


element5.addEventListener("mousedown",start5);


function start5(){
    addEventListener("mousemove",move5);

}

function move5(e){
     
    element5.style.left=e.pageX-80+"px";
    element5.style.top=e.pageY-750+"px";
 
}

element5.addEventListener("mouseup",function(){
    removeEventListener("mousemove",move5);
})



var element6=document.querySelector(".f");


element6.addEventListener("mousedown",start6);


function start6(){
    addEventListener("mousemove",move6);

}

function move6(e){
     
    element6.style.left=e.pageX-50+"px";
    element6.style.top=e.pageY-870+"px";
 
}

element6.addEventListener("mouseup",function(){
    removeEventListener("mousemove",move6);
})


var element7=document.querySelector(".g");


element7.addEventListener("mousedown",start7);


function start7(){
    addEventListener("mousemove",move7);

}

function move7(e){
     
    element7.style.left=e.pageX-50+"px";
    element7.style.top=e.pageY-1050+"px";
 
}

element7.addEventListener("mouseup",function(){
    removeEventListener("mousemove",move7);
})
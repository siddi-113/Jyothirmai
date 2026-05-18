let defalut_width=100;
defalut_height=100;
let image_bird=document.getElementById("image_bird")
function click_onn(){
    defalut_width=defalut_width+30
    image_bird.style.width=defalut_width+"px";
defalut_height=defalut_height+30
image_bird.style.height=defalut_height+"px";
let click_onn=document.getElementById("click_onn");
if(defalut_width>=300 && defalut_height>=300){
defalut_width=300; defalut_height=300;
click_onn.innerHTML= "You exceed the limit";
click_onn.style.backgroundColor="red";
}
}
function click_off(){
    defalut_width=defalut_width-10
    image_bird.style.width=defalut_width+"px";
    defalut_height=defalut_height-10
image_bird.style.height=defalut_height+"px";
let click_off=document.getElementById("click_off");
if(defalut_width<=100 && defalut_height<=100){
    defalut_width=100; defalut_height=100;
click_off.innerHTML= "You can't decrease width";
click_off.style.backgroundColor="orange";
}
}

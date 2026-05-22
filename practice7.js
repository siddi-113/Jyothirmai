let count=0;
function a (){
    count=count+10;
    console.log(count);
if(count===80){
    clearInterval(b);
}
}
let b=setInterval(a,1000);

function d(){
    console.log("hello");
}
    let time=setTimeout(d,6000);
    clearTimeout(time);
    console.log("hii ");

let jyo=document.getElementById("one_on");
function data(){ 
    let name=document.getElementById("two").innerHTML="hello good afternoon";
    console.log(name);
}
    jyo.onclick=data;
    
    let nam=document.getElementById("one_of");
    function data1(){
        let name1=document.getElementById("six").innerHTML="hello";
        console.log(name1);
    }
    nam.addEventListener("click",data1);
    nam.addEventListener("keyup",data1);
    jyo.addEventListener("keydown",data);

    let jyothi=document.getElementById("two_on");
    function name(event){
        if(event.key==="Enter"){
            console.log("hello console");
        }
    }
    jyothi.addEventListener("keydown",name);




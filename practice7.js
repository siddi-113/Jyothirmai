let count=0;
function a (){
    count=count+5;
    console.log(count);
if(count===100){
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


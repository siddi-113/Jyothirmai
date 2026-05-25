console.log("hello");

let jyo1=document.getElementById("two_of");
  let name1=document.getElementById("two");
function data(){ 
    name1.innerHTML=jyo1.value;
    console.log(jyo1.value);
    
}
jyo1.addEventListener("change",data);
jyo1.addEventListener("blur",data);
jyo1.addEventListener("input",data);
jyo1.addEventListener("focus",data);


    let btn=document.getElementById("one_one");
    function mouse(){
        btn.style.color="red";
        btn.style.backgroundColor="yellow";
    }
    btn.addEventListener("mouseover",mouse);

let button=document.getElementById("two_one");
    function mouse1(){
        button.style.color="white";
        button.style.backgroundColor="red";
    }
    btn.addEventListener("mouseout",mouse1);

let date1=new Date();
console.log(date1);
let date=new Date();
    console.log(date.getFullYear());
let date2=new Date();
    console.log(date2.getMonth()+1);
    let date3=new Date();
    console.log(date3.toLocaleTimeString());
let date4=new Date();
    console.log(date3.toLocaleDateString());
    let date5=new Date();
    console.log(date5.getDate());
let date6=new Date();
    console.log(date6.getHours());
    let date7=new Date();
    console.log(date7.getMinutes());
    let date8=new Date();
    console.log(date8.getSeconds());
    let date9=new Date();
    console.log(date9.getMilliseconds());


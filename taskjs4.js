console.log("hello");
let names=document.getElementById("six_on");
function data(){
    names.style.backgroundColor="yellow";
    names.style.color="white";
}
names.addEventListener("mouseover",data);
let names13=document.getElementById("seven_on");
function raji(){
    names13.style.backgroundColor="skyblue";
    names13.style.color="white";
}
names13.addEventListener("mouseout",raji);
let nam=document.getElementById("jyo_one");
nam.addEventListener("click",data1);
function data1(){
    document.body.classList.toggle("dark1");
}
let datas=document.getElementById("five_on");
let para=document.getElementById("box");
datas.addEventListener('change',select)
function select(){
    let jyo=datas.value;
    para.innerHTML= "Selected course:"+ jyo;
    para.style.fontSize="20px";
}
let heads=document.getElementById("head_one");
heads.addEventListener("dblclick",mouni);
function mouni(){
    heads.style.color="red";
    heads.style.backgroundColor="lightskyblue";
}
let date1=document.getElementById("four_on");
 let passwords=document.getElementById("bag");
 let msg=document.getElementById("message");
 function mouni1(){
let length=date1.value.length;
msg.innerHTML="characters :"+length;
if(length<=3){
  passwords.innerHTML="weak password";
}
else if(length<=5){
passwords.innerHTML="medium password";
}
else{
    passwords.innerHTML="strong password";
}
 }
four_on.addEventListener("input",mouni1);
let time=document.getElementById("nine_one");
let date4=new Date();
time.innerHTML=date4.toLocaleTimeString();

let nam1=document.getElementById("one_on");
let nam2=document.getElementById("one_one");
function first(){
    let vv=nam1.value;
    if(vv.length===0){
         nam2.innerHTML="required";
}
else{
    nam2.innerHTML=" ";
}
}
nam1.addEventListener("blur",first);
let mail=document.getElementById("three_on");
let mail1=document.getElementById("three_one");
function last(){
    if(mail.value.includes("@gmail.com")){ 
        mail1.innerHTML=" ";
    }
    else{
        mail1.innerHTML="Invalid Email";
    }
}
mail.addEventListener("input",last);

let button1=document.getElementById("dot_1");
let nam7=document.getElementById("one_on");
let lastname=document.getElementById("two_on");
let mail5=document.getElementById("three_on");
let date7=document.getElementById("four_on");
let datas7=document.getElementById("five_on");
button1.addEventListener("submit", buttons);
function buttons(event){
event.preventDefault();
if(nam7.value!=""&& lastname.value!=""&& mail5.value!=""&& date7.value!="" && datas7.value!=""){

alert("Thank you for registering");
}
else{
    alert("please fill all details")
}
}
let button11=document.getElementById("dot_1");
let nam71=document.getElementById("one_on");
let lastname1=document.getElementById("two_on");
let mail51=document.getElementById("three_on");
let date71=document.getElementById("four_on");
let datas71=document.getElementById("five_on");
button11.addEventListener("reset", buttons2);
function buttons2(){
if(nam71.value!=""&& lastname1.value!=""&& mail51.value!=""&& date71.value!="" && datas71.value!=""){

alert("All data cleared");
}
else{
    alert("empty")
}
}
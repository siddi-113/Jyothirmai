console.log("Hello");
// array destrcuturing
let fruits=["Apple", "Mango","Gapes"];
let [a,b,c]=fruits;
console.log(a);
console.log(b);
console.log(c);
//object destructing
let user={
name:"Jyothi",
age:20,
city:"Glp"
};
let{name,age,city}=user;
console.log(age);
console.log(name);
console.log(city);

let j=5;
while(j<=10){
    console.log(j);
    j++;
}
let i=1;
do{
    console.log(i);
    i++;
}
while(i<=5);
//rest operator
function data(...numbers){
    console.log(numbers);
}
data(1,2,3,4,5,6,7);
const arr=[10,20,30,40,50];
const[d,...back]=arr;
console.log(back);



// switch case
let day=5;
switch(day){
 case 1:
 console.log("Monday");
 break;
 case 2:
console.log("Tuesday");
break;
 case 3:
 console.log("wednesday");
 default:
    console.log("Invalid day");
}

let arr1=[];
let arr2=[...arr1,2,3,4,];
console.log(arr2);

//hoisting
//console.log(x);
  //let x=10

  //console.log(y);
 // var y=20

 //console.log(z);
 //const z=30;


let paras=document.querySelector(".dot");
console.log(paras);
let para=document.querySelectorAll(".dot");
para.forEach((item)=>{
console.log(item);
});
let para1=document.getElementsByTagName("h4");
console.log(para1[2]);
let para2=document.getElementsByClassName("dot1");
console.log(para2.length);

function save(){
    let data=document.getElementById("name").value;
    localStorage.setItem("village" ,data);
document.getElementById("result").innerHTML="saved";
localStorage.removeItem("Jyothi",data);
} 
let bag=document.getElementById("box");
let bag1=document.getElementById("btn");
function msg(){
    console.log("div clicked");
}
function msg1(event){
//event.stopPropagation();
console.log("button clicked");
}
bag.addEventListener("click",msg,true);
bag1.addEventListener("click",msg1);


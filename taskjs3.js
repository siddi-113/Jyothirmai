console.log("hello");
let count;
let jyo;
let isrunning=false
let update_count;
let a=document.createElement("p");
function submit_one(){
let first=parseInt(document.getElementById("one_on").value);
let last=parseInt(document.getElementById("two_of").value);
let b=document.getElementById("header_one");
 if(first > last){
count=first;

}
else {
    count=last;
}
  
function data(){
  if(isrunning===true){
        count=update_count;
        isrunning=false;
  }
          
    count--
 a.textContent=count;
    b.appendChild(a);
    console.log(a);
     if(count===0){
         a.textContent="time exeed";
         a.style.color="orange";
        clearInterval(jyo);
        isrunning=false;
    }  
}


jyo=setInterval(data,1000);
}
function submit_two(){
    update_count=count;
    isrunning=true;
    clearInterval(jyo);
    update_count=count;
    isrunning=true;
a.textContent="you stopped this";
a.style.color="red";

}


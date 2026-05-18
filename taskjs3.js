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
  
     if(isrunning=true){
        
   
        count=update_count;
        
         console.log("Hello count"+count )
          console.log("Hello update_count"+update_count )
          
    } 
function data(){
  
    count--
    console.log(count);
   
  
     
 a.textContent=count;
    b.appendChild(a);
     
     if(count===0){
         a.textContent="time exeed";
         a.style.color="orange";
        clearInterval(jyo);
    }
     
    update_count=count
   
}

jyo=setInterval(data,1000);
 isrunning=true;
}
console.log("running"+isrunning)
function submit_two(){
    clearInterval(jyo);
    isrunning=false;
a.textContent=count+ "you stopped this";
a.style.color="red";

}



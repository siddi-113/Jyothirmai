console.log("hello");
let count;
let jyo;
let isrunning=false
let updated_count;
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
        
   
        count=updated_count;
           isrunning=false; 
         console.log("Hello count"+count )
          console.log("Hello update_count"+update_count )
      
    } 
    count--
    console.log(count);
  
 a.textContent=count;
    b.appendChild(a);
     
     if(count===0){
         a.textContent="time exeed";
         a.style.color="orange";
        //   updated_count=count;
        clearInterval(jyo);
         isrunning=false;
    }
     

   
}

jyo=setInterval(data,1000);

}

function submit_two(){
    clearInterval(jyo);
     updated_count=count;
    isrunning=true;
a.textContent=count+ "you stopped this";
a.style.color="red";

}


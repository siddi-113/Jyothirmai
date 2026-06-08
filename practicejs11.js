
const m={
    method:"GET",
    headers:{"Content-Type":"application/json"}
}
fetch("https://jsonplaceholder.typicode.com/posts/6",m)
.then(res=>res.json())
.then(data=> {console.log(data)});

 let count=10
 function a (){
    count=count+5;
    console.log(count);
}
let b=setInterval(a,2000);

console.log("Hello good afternoon");

const ab=[1,2,3,4,5,6,7,8,9,10];
const [e,f,...remaining]=ab;
const sum=remaining.reduce((jyo,item)=>{
    return jyo+item;
},0);
console.log(sum);




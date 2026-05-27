console.log("Hello");
let user={
    name:"Jyo"
}
function data(city){
    console.log(this.name + " " +city)
}
data.call(user,"ptp")

let user1={
    name:"Jyothi"
}
function data1(city,city1){
    console.log(this.name + " " +city + " " + city1)
}
data1.apply(user1,["ptp","glp"])

let user2={
    name:"Jyothirmai"
}
function data2(country){
    console.log(this.name + " " +country)
}
let result=data2.bind(user2,"India");
result();


const m={
    method:"GET",
    headers:{"Content-Type":"application/json"}
}
fetch("https://jsonplaceholder.typicode.com/posts/",m)
.then(res=>res.json())
.then(data=> {console.log(data)});

const user12={title:"JS",country:"india"}
const m1={
    method:"POST",
    headers:{"Content-Type":"application/json"},
 body:JSON.stringify(user12)
}
fetch("https://jsonplaceholder.typicode.com/posts/",m1)
.then(res=>res.json())
.then(data=> {console.log(JSON.stringify(data))});

 const user13={title:"JS",country:"india"}
const m2={
    method:"PATCH",
    headers:{"Content-Type":"application/json"},
 body:JSON.stringify(user13)
}
fetch("https://jsonplaceholder.typicode.com/posts/8",m2)
.then(res=>res.json())
.then(data=> {console.log(JSON.stringify(data))});
   
const user14={title:"JS",country:"india"}
const m3={
    method:"DELETE",
    headers:{"Content-Type":"application/json"},
 body:JSON.stringify(user14)
}
fetch("https://jsonplaceholder.typicode.com/posts/5",m3)
.then(res=>res.json())
.then(data=> {console.log(JSON.stringify(data))});
   
const input=document.getElementById("input")
function submit_on(){
console.log("hello")
const user={mes:input.value}
const methods={
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(user)
}
fetch("http://localhost:3000/login",methods)
.then(res=>res.json()
.then(data=>console.log(data)))}

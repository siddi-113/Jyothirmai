console.log("Hello");
function submit_on(){
    let a=document.getElementById("one");
    let p=document.getElementById("one_on");    
fetch("https://jsonplaceholder.typicode.com/posts/6")
.then(res=>res.json())
.then(data=>{p.textContent=data.title
    console.log(data)});
}



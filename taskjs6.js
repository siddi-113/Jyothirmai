fetch("https://apis.ccbp.in/countries-data/")
.then(res=>res.json())
.then(data=>  { 
let a=document.getElementById("box");
data.map(list=>{
let img=document.createElement("img");
img.src=list.flag
let para=document.createElement("p");
para.textContent=list.name
a.appendChild(img);
a.appendChild(para);
})
console.log((data))});
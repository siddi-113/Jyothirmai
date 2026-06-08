function search_on(){
let input=document.getElementById("one_on").value;
let box=document.getElementById("box");
box.textContent="";
fetch("https://apis.ccbp.in/countries-data/")
.then(res=>res.json())
.then(data=>  { 
data.map(list=>{
    if(list.name.includes(input)){
let img=document.createElement("img");
img.src=list.flag
let para=document.createElement("p");
para.textContent=list.name
box.appendChild(img);
box.appendChild(para);
    }
})
console.log((data))});
   
}
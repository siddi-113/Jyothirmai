let countries = [];
let box = document.getElementById("box");
fetch("https://apis.ccbp.in/countries-data/")
.then(res=>res.json())
.then(data=>  {  
countries = data;
Countries(countries);
 });  
function Countries(data) {
box.textContent = "";
data.forEach(country => {
let div = document.createElement("div");
let img = document.createElement("img");
 img.src = country.flag;
let para = document.createElement("p");
para.textContent = country.name;
para.style.color="white";
para.style.fontSize="20px";
div.appendChild(img);
div.appendChild(para);
box.appendChild(div);
 });
}
function search_on() {
let input = document.getElementById("one_on").value.toLowerCase();
let filtered = countries.filter(country =>
country.name.toLowerCase().includes(input)
);
Countries(filtered);
}

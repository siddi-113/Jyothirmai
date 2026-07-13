console.log("Hello")
const fs=require("fs");
fs.writeFileSync("demo.txt","Hello");
fs.appendFileSync("demo.txt","World",);
fs.appendFileSync("demo.txt", "\nGood Evening",);
const data=fs.readFileSync("demo.txt","utf8");
console.log(data);
//fs.unlinkSync("demo.txt");



//error handling try,catch
try{
    console.log(data);
}
catch (error){
console.log("message");
}
//validator
import validator from"validator";
console.log(validator.isEmail("Jyo@gmail.com"));
console.log(validator.isEmail("Jyo"));
console.log(validator.isEmpty("jyothi"));
console.log(validator.isDate("2026-03-26"));
//path
import path from "path";
 console.log(path.basename("C:/notes/demo.txt"));

 //axios
import axios from "axios";
const repo=await axios.get(
'https://jsonplaceholder.typicode.com/users/2'
);
console.log(repo.data);
let a=null;
console.log(typeof a);
console.log(Boolean(""))
console.log({}+[]);
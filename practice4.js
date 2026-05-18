function greet(name= "jyo"){
    console.log("welcome"   +name);
 }
 greet();
 greet(  "jyothi")

 let mouni=function(name="guest",subgreet){
    console.log(name);
    //

 }
 function subgreet(){
    console.log("good")}
 mouni("hema", subgreet())
  mouni("Anu", subgreet())

 function add(a,b){
    return(a+b);
}
let result=add(2,8);
console.log(result);

const hema = function(){
    return"hi good afternoon";
 };
 console.log(hema());

function sri(name){
   console.log("Hello" + name);
}
sri("Jyothirmai");

(function(){
   console.log("this runs!");
})();

let numbers=[10,20,30,40,50];
console.log(numbers.find(n=>n>40));

let array=[1,2,4,6,7,];
console.log(array.includes(6));

let data=["jyothi","satya","mouni"];
console.log(data.indexOf("satya"));

let names=["apple","mango","orange","rose","lilly","cherries"];
console.log(names.slice(1,4));

let nums=[8,9,7,6,4];
let dd=nums.splice(3,4,7);
console.log(nums)


let a=[1,2,3];
let b=[4,5,6];
console.log(a.concat(b));

let jyothi=[2,10,20,3,40,50,90,4];
console.log(jyothi.sort((a,b)=>a-b))
console.log(jyothi.sort((a,b)=>b-a))


let array_data=["raji","sai","anu","tej"];
console.log(array_data.reverse());

let raji=["4","8","10"];
console.log(raji.join("-"));





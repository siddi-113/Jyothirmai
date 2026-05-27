let numbers=[30,40,20,60,70];
let result =numbers.map((item)=>{
    return item *2;
});
console.log(result);

 let data=[40,20,30,10,50,60,80,90];
 console.log(data.filter(list=>(list>=40)));
 let names =["jyothi","raji","mouni","satya","hema"];
 names.forEach((item,index) =>{
console.log(index,item);
 });   
 let array_data=[10,20,30,40,50,60,70,80,90];
 for (let i=2;i<array_data.length;i++){
    console.log(array_data[i])}
    
const arr=[10,20,30,40,50,70];
const sum=arr.reduce((jyo,item)=>{
    return jyo+item;
},0);
console.log(sum);

let data1=[1,2,3,4,5];
let data2=[...data1,8,9,10];
console.log(data2);
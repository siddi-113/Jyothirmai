console.log("Hello");
let a =20;
let b=30;
console.log(a+b);

let c=40;
let d=100;
let e=90;
let max=Math.max(c,d,e);
console.log(max);

let c1=40;
let d1=100;
let e1=90;
let max1=Math.min(c1,d1,e1);
console.log(max1);

let data="Web  Development";
console.log(data.length);

let nam=[1,2,3,4,5,6,,7,8,9];
let nam1=nam.reduce((abc,item)=>{

    if(item%3===0){
        abc.push(item);
    }
    return abc;
    },[]);
    console.log(nam1);

let nams=[1,2,3,4,,5,6,,7,8,9,];
let nams1=nams.reduce((acc,item)=>{
   item % 2===0?acc.push(item):"";
   return acc;
},[]);
console.log(nams1)
//factorial
let n=6;
let fact=1;
for(let i=1;i<=n;i++){
    fact*=i;
}
console.log(fact);
//fibonacci series
let ab=1;
let ba=2;
console.log(ab);
console.log(ba);
for(let i=1;i<=9;i++){
    let ca=ab+ba;
    console.log(ca);
    ab=ba;
    ba=ca;
}
//revrse string
let str="java";
console.log(str.split("").reverse().join(""));

//flat
let arr=[1,[2,3],[4,5]];
console.log(arr.flat()); 

const obj={
    name:"Jyothi",
    age:"20"
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const datas={
    name1:"Jyothirmai",
    age1:"20"
}
datas.name1="Jyothi"
console.log(datas);
delete datas.age1;
console.log(datas);
//bracket notation 
const paras={
    names:"hello"
}
console.log(paras["names"]);
//console warn and error
console.warn("jyo");
console.error("Hello");
//promises
const p=new Promise((resolve,reject)=>{
    resolve("Success")
});
p.then((data) => console.log(data));
//promise resolve
Promise.resolve(100)
.then((data)=>console.log(data));
//promise reject
Promise.reject("Error")
.catch((error)=>console.log(error));
//promise finally
const p8=Promise.resolve("Good morning")
p8.then((result)=>{
    console.log(result)
})
.finally(()=>{
    console.log("Finally");
});
//catch
const p9=Promise.reject("error");
p9.catch((data)=>{
    console.log(data);
});

//promise all
const p1=Promise.resolve("A");
const p2=Promise.resolve("B");
const p3=Promise.resolve("C");
Promise.all([p1,p2,p3])
.then((result)=>console.log(result));

//promise allsettled
const p4=Promise.resolve("Success");
const p5=Promise.reject("Error");
Promise.allSettled([p4,p5])
.then((results)=>console.log(results));

//promise any
const s1=Promise.reject("failed");
const s2=Promise.resolve("Success");
const s3=Promise.resolve("Successful")
Promise.any([s1,s2,s3])
.then((result)=>console.log(result));

//promise chaining
Promise.resolve(10)
.then(num=>num*3)
.then(num=>num*2)
.then(num=>num*4)
.then(num=>console.log(num));

//promise race
const pr1=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("promise1");
    },2000)
});
const pr2=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("promise2");
    },1000)
});
Promise.race([pr1,pr2])
.then((result)=>{
    console.log(result);
});

//async
async function name() {
 return "Hii Jyothirmai" ;  
}
name().then((data)=>{
    console.log(data);
});

//await
async function show() {
    const data=await Promise.resolve("JavaScript");
    console.log(data);
}
show();
 
const sql = require("mssql");
const cors=require('cors')
const config = {
server: 'DESKTOP-9J6OSAF',
database: 'master',
user:'Jyothirmai',
password:'Jyothi@123',
options:{
trustServerCertificate:true,
encrypt:false
}
};
const express=require('express')
const app=express()
app.use(cors())
app.use(express.json())
async function data(){
await sql.connect(config)
app.post('/login',async(req,res)=>{
const datas=await req.body.mes
console.log(datas)
await sql.query(`insert into user1(City)values('${datas}')`)
res.send({message:"success"});
})
app.get("/login",async(req,res)=>{
const result=await sql.query("select * from user1")
console.log(result.recordset)
res.send(result.recordset)
})

}
app.listen(3000,()=>{
console.log("Hello")})
data()
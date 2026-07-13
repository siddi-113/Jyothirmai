
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
async function data(){
await sql.connect(config)
const result=await sql.query("select *from user1")
app.get("/sss",async(req,res)=>{
res.send(result.recordset)
})
console.log(result.recordset)
}
app.listen(3000,()=>{
console.log("Hello i am 3000 port and connected")})
data()
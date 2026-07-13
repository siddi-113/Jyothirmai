const sql=require('mssql');
const b={
    server:'DESKTOP-9J6OSAF',
    database:'master',
    user:'Jyothirmai',
    password:'Jyothi@123',
    options:{
        trustServerCertificate:true
    }
};
async function getdata(){
    try{
        await sql.connect(b);
        const result =await sql.query('SELECT*from register_forms1' );
        console.log(result.recordset);
    }
    catch(err){
        console.log(err);
    }
}
getdata();
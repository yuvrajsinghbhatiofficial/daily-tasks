const config = require("../config/config")

const pool = require('pg').Pool;
console.log('pool',pool);
const conection = new pool({
    user: config.USER,
    host: config.HOST,
    database: config.DB,
    password: config.PASS,
});

conection.connect((err)=>{
    if(err){
        console.log('Connection Failed');
    }
});
// console.log(conection.query("SELECT * FROM public.user").then(res=>console.log(res)));
// module.exports = conection;
// const conection = new pool();
// const res = async() =>{    
//     await conection.query('SELECT NOW()')
//     await conection.end()
//     console.log(res)
// }
 module.exports = conection;

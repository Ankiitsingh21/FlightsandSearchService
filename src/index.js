const express =require('express');
//require('dotenv').config()
const bodyparser=require('body-parser');

const {PORT} = require('./config/serverconfig');
const Apiroutes = require('./routes/index');

const setupandStartServer=async()=>{
   // create the express object
   const app = express();

   app.use(bodyparser.json());
   app.use(bodyparser.urlencoded({extended: true}));

   app.use('/api',Apiroutes);
   
   app.listen(PORT,async ()=>{
        console.log(`server started at ${PORT}`);
   });

}

setupandStartServer();
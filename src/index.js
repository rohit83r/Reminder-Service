const express=require('express');
const bodyParser = require('body-parser');

const {PORT} =require('./config/serverConfig')

const {sendBasicEmail} =require('./services/email-service');

const setUpStartServer =()=>{
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT ,()=>{
        console.log(`Server Started at:${PORT}`);

        sendBasicEmail(
            'server@admin.com',
            'daxe61808@gmail.com',
            'This is a testing email',
            'Hey hope u are doing well'
        )
       
    })

}

setUpStartServer();
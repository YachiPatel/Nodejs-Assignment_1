const express = require('express');
const app = express();
const path = require('path');
const conn = require('./db/conn');

const static_path = path.join(__dirname,"/public");
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: false }));

app.get('/employees',(req,res)=>{
    conn.query("select * from empTB",function(err,data){
        res.send(data);
    });
});

app.post('/employees',(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    conn.query(`insert into empTB(name,email,phone) values('${name}','${email}',${phone})`,(err,data)=>{
        if(data){
             res.redirect('/employees');
        }
    })
});

app.listen(3000,()=>{
    console.log('Server run on 3000 port');
});
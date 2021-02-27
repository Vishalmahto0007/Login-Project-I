const express = require('express');
const cors = require('cors');
const router = express.Router();
const app = express();
const mysql= require('mysql');

require('dotenv').config();

app.listen(3000,() => console.log("server start at"));
app.use(express.json());


var con= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "member",
});

app.post('/loggedin',(req,res)=>{

    const email= req.body.email
    const password= req.body.password
    con.query("INSERT INTO personal (emailID, password_, name, city) VALUES (?,?,?,?)",[email, password_, name, city],(err, result)=>{
        console.log(err);
    })
})

// con.connect(function(err){
//     if(err) throw err;

//     console.log('connected');
//     con.query("select * from personal",function(err,result){
//         if(err) throw err;
//         console.warn("all result are here", result)
//     })
// });

// router.get('/',function(req, res, next){
//     var query='select * from personal';
//     con.query(query, function(err, rows, fields){
//         res.render('personal',)
//     })
// })

// app.get('/',(req,res) => {
//     res.send("Hi from vishal");
// });

// app.use(cors());
// var users =[
//     {
//         email:'abc@gmail.com', password:'password'
//     }
// ]

// router.get('/',function(req,res){
//     res.send("Welcome to backend server");

// });

// router.post('/login',function(req,res){
//      let result =users.find(user => user.email == req.body.email);

//      if(result){
//          if(result.password == req.body.password){
//              res.status(200).send({
//                  message:"Succesful login!"
//              })
//          }else{
//              res.status(200).send({
//                  message:"Password incorrect!"
//              })
//          }
//      }else{
//          res.status(200).send({
//              message:"User not found incorrect!"
//          })
//      }

// })


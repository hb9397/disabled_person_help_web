const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const mysql = require('mysql');
const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data)

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
  });
  connection.connect();
app.get('/api/Library', (req,res)=>{
    connection.query('SELECT * FROM Library', function(err,rows,fields){
        res.header("Access-Control-Allow-Origin", "*");
        res.send(rows)
    })
})
app.get('/api/electricChair', (req,res)=>{
    connection.query('SELECT * FROM Electric_WC_CS',function(err,rows,fields){
        res.header("Access-Control-Allow-Origin", "*");
        res.send(rows)
    })
})
app.get('/api/electricChair/:data', (req,res)=>{
    console.log(req.params.data)
    connection.query('SELECT * FROM Electric_WC_CS WHERE 시설명=?',req.params.data, function(err,rows,fields){
        res.header("Access-Control-Allow-Origin", "*");
        res.send(rows)
    })
})
app.get('/api/SWF', (req,res)=>{
    connection.query('SELECT * FROM SWF',function(err,rows,fields){
        res.header("Access-Control-Allow-Origin", "*");
        res.send(rows)
    })
})
app.get('/api/Tourism', (req,res)=>{
    connection.query('SELECT * FROM Tourism',function(err,rows,fields){
        res.header("Access-Control-Allow-Origin", "*");
        res.send(rows)
    })
})
// app.get('/api', (req,res)=>{
//     connection.query('SELECT * FROM Library', function(err,rows,fields){
//         res.header("Access-Control-Allow-Origin", "*");
//         res.send(rows)
//     })
// })
app.listen(port, ()=> console.log("서버 작동"))

const express = require('express');
const bodyParser = require('body-parser');  
const http = require("http");


const app = express();

var mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var con = mysql.createConnection({
  host: "sql607.main-hosting.eu",
  user: "u429207731_rutvik_todo",
  password: "X9b+=Et#",
  database: "u429207731_todo"
});


  app.get("",(req,res,next)=>{
    // const users = [
    //     {
    //         name: 'rutvik',
    //         mail: 'rutvik@rutvik.com'
    //     },
    //     {
    //         name: 'arth',
    //         mail: 'arth@arth.com'
    //     }
    // ];
    con.connect(function(err) {
      if (err)
      {
        console.log(err);
      } 
      console.log("Connected!");
      sql = 'select * from tutorials'
      con.query(sql, function (err, result) {
        if (err)
        {
          console.log(err);
        }
        console.log("Result: " + result);
        res.status(200).json({
          msg : 'test data',
          tutorials: result
        });
      });
    });
  });
  app.post('/addUsers',(req, res) => {
    console.log(req.body);
    res.status(200).json({
      msg : 'test data',
      sent: req.body
    });    // if(req.body.user_name && req.body.email && req.body.password && req.body.tasks){
    //   let data = {user_name: req.body.user_name, email: req.body.email,tasks: req.body.tasks,password: req.body.password};
    // }
    
    // let sqlQuery = "INSERT INTO users SET ?";
    
    // con.query(sqlQuery, data,(err, results) => {
    //   if(err) throw err;
    //   res.send(apiResponse(results));
    // });
  });

  app.post('/users', function (req, res) {
    console.log(req.body);
    res.status(200).send(req.body);
});

module.exports = app;

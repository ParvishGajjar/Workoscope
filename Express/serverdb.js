var express = require('express');
var _ = require('lodash');
const mysql = require('mysql');
var app = express();
app.use(express.json())

const connection = mysql.createConnection({ 
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'workone'
});

connection.connect(function(err) {         
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

app.get('/api/users', function (req, res) {
   connection.query('SELECT * FROM UserData;', (err,rows) => {    // () anonymous function passing arguement err and rows 
      if(err) 
      {
         throw err;
      }
      console.log('Data received from Db');
      res.end(JSON.stringify(rows));
  
   });
})

//Get User's data by passing parameter which would have substring from his name
app.get('/api/users/:name', function (req, res) {
   const nameparam=req.params.name;
   connection.query("SELECT * FROM UserData where username LIKE '%"+nameparam+"%';", (err,rows) => {    // () anonymous function passing arguement err and rows 
      if(err) 
      {
         throw err;
      }
      console.log('Data received from Db');
      res.end(JSON.stringify(rows));
   });
})
app.post('/api/add',function(req,res){
	connection.query(`INSERT into UserData (username,email) values ('${req.body.name}','${req.body.email}');`, (err,result) => {    // () anonymous function passing arguement err and rows 
      if(err) 
      {
         throw err;
      }
      console.log('Data Added to Db');
      res.end("Data Inserted");
  
   });
})

app.listen(3000,(err)=>{
	if(err)
	{
		console.log(err);
	}
	console.log("Running!")
});
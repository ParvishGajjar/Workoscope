var express = require('express');
var app = express();
var fs = require("fs");
app.use(express.json())

app.get('/api/users', function (req, res) {
   fs.readFile( __dirname + "/" + "info.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.post('/api/add',function(req,res){
	fs.readFile( __dirname + "/" + "info.json", 'utf8', function (err, data) {
      if(req.body.name && req.body.email){
      	data=JSON.parse(data);
      	data.push({"name":req.body.name,"email":req.body.email});
      	data=JSON.stringify(data);
      	fs.writeFile(__dirname+"/"+"info.json",data,'utf8',function(err,data){
      		if(err){
      			console.log(err);
      		}
      		else{
      			console.log("Data Written")
      		}
      		
      	})
      	console.log(data)
	}
   });
	res.send('Data Posted')
})

app.listen(3000,(err)=>{
	if(err)
	{
		console.log(err);
	}
	console.log("Running!")
});
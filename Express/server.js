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
	console.log(req.body.name+"\n"+req.body.email)
	res.send('Data Posted')
})

app.listen(3000,(err)=>{
	if(err)
	{
		console.log(err);
	}
	console.log("Running!")
});
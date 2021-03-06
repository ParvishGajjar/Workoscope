var express = require('express');
var _ = require('lodash');
var app = express();
var fs = require("fs");
app.use(express.json())

app.get('/api/users', function (req, res) {
   fs.readFile( __dirname + "/" + "info.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

//Get User's data by passing parameter which would have substring from his name
app.get('/api/users/:name', function (req, res) {
   fs.readFile( __dirname + "/" + "info.json", 'utf8', function (err, data) {
      const nameparam=req.params.name;
      var newdata=JSON.parse(data);
      // var dataoutput=[]
      // dataoutput.push(_.find(newdata, function(items){
      //    if(items.name === nameparam){
      //       return items;
      //    }
      // }))
      for(let items in newdata){
         if(newdata[items].name.includes(nameparam)){
            dataoutput.push(newdata[items])
         }
      }
      res.end(JSON.stringify(dataoutput));
      // var dataoutput=newdata.map((items)=>{
      //    if(items.name === nameparam)
      //    {
      //       return {'name': nameparam,'email': items.email}
      //    }
      //    else{
      //       return null;
      //    }
      // })
      // res.end(JSON.stringify(_.find(newdata, _.matchesProperty('name', nameparam))));
      // res.end(JSON.stringify(newdata[_.indexOf(newdata.map(function(obj) { return obj.name; }),nameparam)]))
      // res.end(JSON.stringify(_.reduce(newdata,function(x,y){return (x.name === nameparam)?x:y;})));
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
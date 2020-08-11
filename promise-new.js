var fs = require("fs");
const request = require('request');

const url = {
    url: 'http://www.omdbapi.com/?i=tt3896198&apikey=f5b1d9f9'
};

function prom(filename){
	return new Promise(function(resolve,reject) {
		fs.readFile(filename, function (err, data) {
   			if(err)
   			{ 
   				reject(err);
   			}
   			resolve(data);
		});
	})
}

function prom2(req,url){
	return new Promise(function(resolve,reject){
		request.get(url,function (err, res, body) {
    		if(err) 
    		{
        		reject(err);
    		}
    		resolve(body);
		});
 	})
}

Promise.all([prom2(request,url),prom('input.txt'),prom('input2.txt')])
.then(function(data){
	console.log(data.toString())
})
.catch(function(data){
	console.log(data)
})
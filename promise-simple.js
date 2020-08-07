var promise = new Promise(function(resolve, reject) { 
const x = "Hello"; 
const y = "Hello"
if(x !== y) { 
	resolve("Not Same"); 
} else { 
	reject("They are same, rejected"); 
} 
}); 

promise. 
	then(function (msg) { 
		console.log(msg); 
	},function (rejmsg){
		console.log(rejmsg);
	}). 
	catch(function () { 
		console.log('Some error has occured'); 
	}); 

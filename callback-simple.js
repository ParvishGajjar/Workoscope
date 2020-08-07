function greeting(name){
	console.log("Hello "+name);
}
function goodbye(name){
	console.log("GoodBye "+name);
}

function Enterfunc(callback){
	var name="Parvish";
	callback(name);
}

Enterfunc(greeting)

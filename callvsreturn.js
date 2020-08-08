// Using Callback Function
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

// Using return Function

function greetingon(name){
	console.log("Hello "+name);
}
function goodbyeon(name){
	console.log("GoodBye "+name);
}

function Enterfuncon(a){
	var name="Parvish";
	return a(name);
}

Enterfuncon(goodbyeon)

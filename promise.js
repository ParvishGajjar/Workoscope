//promise example #1
var promise = new Promise(function(resolve, reject) { 
	const x = "Hello"; 
	const y = "Hello";
	if(x !== y) { 
		resolve("Not Same"); 
	} 
	else { 
		reject("They are same, rejected"); 
	} 
}); 

promise. 
	then(function (msg) { 
		console.log(msg); 
	}). 
	catch(function (msg) { 
		console.log(msg); 
	}); 

// promise example #2
const weather = true
const date    = new Promise(function(resolve, reject) {
  if (weather) 
  {
    const dateDetails = {
      name:     'Cubana Restaurant',
      location: '55th Street',
      table:    5
    };
    resolve(dateDetails)
  } 
  else 
  {
    reject(new Error('Bad weather, so no Date'))
  }
});
const orderUber = function(dateDetails) {
  return new Promise(function(resolve, reject) {
    const message = `Get me an Uber ASAP to ${dateDetails.location}, we are going on a date!`;

    resolve(message)
  });
}

date
 .then(orderUber)
 .then(function (data) {
 	console.log(data);
 })
 .catch(function(err){
 	console.log(err);
 })

//promise example #3
let p =  new Promise(function(resolve,reject){
	let  a=1+1; //any code you like
	if(a === 2){
		resolve('Success');
	}
	else{
		reject('Failed');
	}
});

p.then((msg) => {
	console.log(msg)
}).catch((msg) => {
	console.log(msg);
})

//promise example #4
const getData2 = UserId =>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(Math.random()<0.1)  //Math.random() will provide a number b/w 0 to 1.
			{
				reject("Get Data Failed")
			}
			const Data = {
				id: UserId,
				name: "Parvish",
				surname: "Gajjar"
			};
			resolve(Data);
		},1000)
	});
};

getData2(5)
.then(users => {
	console.log("My Data: ",users);
}).catch(err=>{
	console.error(err);
})
// Using Promise.all
Promise.all([getData2(10),getData2(16)])
.then(users => {
	console.log("My Data: ",users);
}).catch(err=>{
	console.error(err);
})

//Promise example 5
something=false
everything=false
function np(){
	return new Promise((resolve,reject)=>{
		if(something){
			resolve("Something is true")
		}
		else if(everything)
		{
			resolve("Everything is true")
		}
		else
		{
			reject("Nothing is true")
		}
	})
}
np().then((msg)=>{
	console.log(msg);
}).catch((msg)=>{
	console.log(msg);
})

// promise example #6

const dataone = new Promise((resolve,reject) =>{
	setTimeout(()=>{
		resolve("Data One");
	},1000);
})
const datatwo = new Promise((resolve,reject)=>{
	resolve("Data Two");
})
const datathree = new Promise((resolve,reject)=>{
	resolve("Data Three")
})


Promise.race([dataone,datatwo,datathree])
.then((msg)=>{
	console.log(msg);
})

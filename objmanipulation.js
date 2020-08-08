//Constructor function
function Person(name,surname){
	this.name = name;
	this.surname = surname;
}
var obj = new Person('Parvish','Gajjar'); //created object by using new keyword and passed in the parameters
console.log(typeof(obj)); //type of variable
console.log(obj.name);
console.log(obj["surname"])


//Getting key & value from an object
const AObject = {
	A : 10,
	B : 'Harsh',
	C : 22.5
}
console.log(Object.keys(AObject));
console.log(Object.values(AObject));


//Object to array enteries conversion
const BObject = {
	A : 10,
	B : 'Harsh',
	C : 22.5
}
console.log(Object.entries(BObject))


//Using Spread to manipulate object
var Info = {
  name : "Parvish",
  age : 21,
  marks : 85
}
var SpreadObj = {
  ...Info,
  subject : "Maths",
  DOB : "01/01/0101",
  subjectTwo : "Science"
}
console.log(SpreadObj) //Inherit properties of one object to another.


// Using assign function in object to combine two objects.
var CObj = {
	A:10,
	B:20
}
var DObj = {
	C:30,
	D:40
}
console.log(Object.assign(CObj,DObj)) 


//To freeze a object as although if you use const to create object it won't mean that it is immutable(remain unchanged), 
//for which freezing a object would do the work.

const EObj = {
	A: 10,
	B: 20
}
EObj.A=30
console.log(EObj);
Object.freeze(EObj)
EObj.B=30
console.log(EObj)


//Sealing a object, You can change value of object but not add any other property to it
const LObj={
	A: "Apple",
	B: "Banana"
}
Object.seal(LObj);
LObj["C"]="Carrot"
console.log(LObj);


//ToLocaleString
var date = new Date();
var str = date.toLocaleString();
console.log(str)


//JSON Stringify and JSON Parse
//JSON.stringify() takes a JavaScript object and then transforms it into a JSON string.
//JSON.parse() takes a JSON string and then transforms it into a JavaScript object.
var s = JSON.stringify(date);
console.log(s);
console.log(JSON.parse(s));

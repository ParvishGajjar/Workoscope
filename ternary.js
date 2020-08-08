//Ternary Operators
var a=10,b=20;
//Ternary Operator Basics
var c=(a>b)?'True':'False' //syntax: (condition)?True(if found true returs this):False(if found false returns this)
console.log(c)

//Nested Ternary Operator
var d=(a<b)?((a==5)?"A is 5":"A is other than 5"):"B"
console.log(d) 

//Ternary Operator with functions
function aisgreat(){
	return "A is greater than B";
}
function bisgreat(){
	return "B is greater than A";
}

var e=(a>b)?aisgreat():bisgreat();
console.log(e);

//converting above two function into one

function oneisenough(a,b)
{
	return (a>b)?"A is greater than B":"B is greater than A";
}
console.log(oneisenough(a,b));

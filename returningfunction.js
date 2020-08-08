//Returning Function
function retOne()
{
	return retTwo();
}
function retTwo()
{
	return "Hello, I am Parvish!";
}
console.log(retOne());

//Returning Anonymous Function
function One(){
	return () => {
		return "Hello World";
	};
};
var c=One();
console.log(c());


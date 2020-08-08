var _=require('lodash');
//console.log(typeof(_));
//console.log(_);

//Combines two objects
var foo = {
        a: "a property"
    };
var bar = {
        b: 4,
        c: "an other property"
    }

console.log(_.assign(foo, bar));

//first and last word
words = ['sky', 'wood', 'forest', 'falcon',
         'pear', 'ocean', 'universe'];
//first and last dosen't work directly on object you need to pass array of objects
wordobj = [{
	name: "Parvish",
	sname: "Gajjar"
}];
console.log(_.first(words));
console.log(_.last(words));
console.log(_.first(wordobj));
console.log(typeof(_.first(wordobj)));

//find function
var user = [
	{
		name:"PG",
		age:21,
		gender:"Male"
	},
	{
		name:"NG",
		age:21,
		gender:"Female"
	}
];
console.log(_.find(user,{age:21}))
var AgeUser = _.find(user, function(us) {
   return us.age >= 21;
});
console.log(AgeUser);

//Chunks

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(_.chunk(nums, 2));

//slice

var str=["This","is","a","String"]
console.log(_.slice(str,0,2))

//random func

console.log(_.random(15));
console.log(_.random(10,15));

//Sample functionality
console.log(_.sample(words));

//Shuffle functionality
console.log(_.shuffle(words));

//times
console.log(_.times(4, () => {
	return "hello";
}));

//delay
function message()
{
   console.log("Some message");
}
_.delay(message, 150);
console.log("Some other message");

//range
const vals = _.range(10);
console.log(vals);

const vals2 = _.range(5, 15);
console.log(vals2);

const vals3 = _.range(0, 15, 5);
console.log(vals3);
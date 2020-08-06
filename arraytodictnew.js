var arr=[{name: 'parvish',maths: 50, science: 63, social: 81},{name: 'nishi',maths: 70, science: 63, social:76}];

var newarr=arr.map(Func);
console.log(newarr)
function Func(item){
		var dict={}
		var n=item.name;
		var v=item.maths+item.science+item.social;
		dict[n]=v
		return dict
}

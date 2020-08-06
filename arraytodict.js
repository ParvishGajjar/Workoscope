var a=[["Parvish",90,70,80],["Nishi",80,90,90],["Asit",70,80,85]]
var dict={}
function atod(a,dict){
	for(i in a){
		var total=0
		for(j=1;j<a[i].length;j++)
		{
			total=total+a[i][j];
		}
		dict[a[i][0]]=total;
	}
	console.log(dict);
}
atod(a,dict)

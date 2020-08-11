// Basic Memoization example

const prevValues = {}
function square(n)
{
	if(prevValues[n] != null)
	{
		return prevValues[n];
	}
	let result=0;
	for(i=0;i<n;i++)
	{
		for(j=0;j<n;j++)
		{
			result+=1;
		}
	}
	prevValues[n]=result;
	return result;
}
console.log(square(50000))
console.log(square(50000))
console.log(square(50000))
console.log(square(10000))
console.log(square(10000))
console.log(square(10000))
console.log(square(10000))
console.log(prevValues);

// Memoization example 2

function fibonacci(n,memo){
	memo = memo || {};
	if(memo[n])
	{
		return memo[n];
	}
	if(n<=1)
	{
		return 1;
	}
	return memo[n] = fibonacci(n-1,memo) + fibonacci(n-2,memo);
}

console.log(fibonacci(10))
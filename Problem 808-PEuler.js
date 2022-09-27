const isPrime = (n) => {
	for(let i = 3; i <= n/2; i+=2){
	   if(n % i === 0){
		  return false;
	   }
	};
	return true;
 };

let arr6 = []
let sum = 0
var a = 1
while(arr6.length < 51){

	
	if(isPrime(a)){
		c = a*a
		b = Math.sqrt(Number(String(c).split("").reverse().join("")))
		if(b!=a && Number.isInteger(b)){
			if(isPrime(b)){
				console.log(a, "   ,    array length:", arr6.length)
				arr6.push(c)
				sum += c
			}
		}
		
	}
	a+=2
	
}
console.log(sum)

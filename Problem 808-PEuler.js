const isPrime = (n) =>{
    let i = 2;
    // This will loop from 2 to int(sqrt(x))
    while (i*i <= n) {
        // Check if i divides x without leaving a remainder
        if (n % i == 0) {
            // This means that n has a factor in between 2 and sqrt(n)
            // So it is not a prime number
            return 0;
        }
        i += 1;
    }
    // If we did not find any factor in the above loop,
    // then n is a prime number
    return 1;
}

let arr6 = []
let sum = 0
var a = 1
while(arr6.length < 50){

	
	if(isPrime(a)){
		c = a*a
		b = Math.sqrt(Number(String(c).split("").reverse().join("")))
		if(b!=a && Number.isInteger(b)){
			if(isPrime(b)){
				arr6.push(c)
				sum += c
				console.log(a, "   ,    array length:", arr6.length) // just to see that it is infact running
			}
		}
		
	}
	a+=2 // skip all even numbers. we don't need them
	
}
console.log(sum)

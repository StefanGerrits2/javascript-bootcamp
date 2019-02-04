/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var i;
var nummer = "1";
for (i = 0; i < 99; i++) {
    nummer ++; 
	
	
	if (nummer % 3 === 0 && nummer % 5 === 0) { /* 3 en 5*/
    console.log("FizzBuzz");
	}
	
	else if (nummer % 3 === 0) {
	
    console.log("Fizz");   /* 3 */ 
    }
    
	else if (nummer % 5 === 0) {
    console.log("Buzz");   /* 5 */ 
    }
    
	else {
	console.log(nummer);
	}
}


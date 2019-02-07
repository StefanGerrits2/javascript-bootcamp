/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var laagste;

function min(first, second) {
	
	var laagste = Math.min(first, second);
	return laagste;
}

console.log(min(0, 10));
console.log(min(0, -10));


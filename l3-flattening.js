/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

let arrays = [[1, 2, 3], [4, 5], [6]];

var arraysGeplakt = arrays.reduce((total, amount) => total.concat(amount));
 
console.log(arraysGeplakt);

// → 1, 2, 3, 4, 5, 6





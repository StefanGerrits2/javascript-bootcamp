/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var getallen = [];


function range(start, end) {
  
  for (; start <= end; start++) {
      getallen.push(start);
  }
  
  return getallen.reduce(function(start, end) {
	  return start + end;
  });
  
}

console.log(range(1, 10));

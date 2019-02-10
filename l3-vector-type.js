/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

class Vec {
	constructor(x, y) {
	 this.x = x;
	 this.y = y;  
  }
	
plus(vec) {
  var x = this.x + vec.x;
  var y = this.y + vec.y;
  return new Vec(x, y);
  }
	
minus(vec) {
  var x = this.x - vec.x;
  var y = this.y - vec.y;
  return new Vec(x, y);
  }
	
get length() {
  return Math.sqrt(this.x + this.y);
  }
 
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
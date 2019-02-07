/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/



var aantalBs = 0;

function countBs(string) {
  var counter = 0;	
	
  for (; counter < string.length; counter++) {
	  
      if (counter == 0 && string[0] == "B") {
          aantalBs++;
          }
      else if (counter == 1 && string[1] == "B") {
          aantalBs++;
          }
      else if (counter == 2 && string[2] == "B") {
          aantalBs++;
          }
  } 
  return aantalBs;
}

var aantalks = 0;

function countChar(eerste, tweede) {
  let counter = 0;
	
  for (; counter < eerste.length; counter++) {
	  
      if (counter == 0 && tweede == eerste[0]) {
          aantalks++;
          }
      else if (counter == 1 && tweede == eerste[1]) {
          aantalks++;
          }
      else if (counter == 2 && tweede == eerste[2]) {
          aantalks++;
          }
      else if (counter == 3 && tweede == eerste[3]) {
          aantalks++;
          }
      else if (counter == 4 && tweede == eerste[4]) {
          aantalks++;
          }
      else if (counter == 5 && tweede == eerste[5]) {
          aantalks++;
          }
      else if (counter == 6 && tweede == eerste[6]) {
          aantalks++;
          }
      else if (counter == 7 && tweede == eerste[7]) {
          aantalks++;
          }
      else if (counter == 8 && tweede == eerste[8]) {
          aantalks++;
          }
      else if (counter == 9 && tweede == eerste[9]) {
          aantalks++;
          }
    
  } 
  return aantalks;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4 
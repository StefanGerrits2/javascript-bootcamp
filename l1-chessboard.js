/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


var string = "";
var getal = 8;
var char = 1;
var line = 1;

for (; line <= getal ; line++) { /*dit zet de lijnen onder elkaar*/
	
	
	for (; char <= getal ; char++) { /*dit maakt de lijn zelf*/
		
		
		if ((char + line) % 2 == 0){ /*even getal*/
			
			string = string + " "; /*er wordt een spatie geplaatst*/
		} 
		else { /*oneven getal*/
			
			string = string + "#"; /*er wordt een hashtag geplaatst*/
		}
	}
	string = string + "\n"; /*zorgt voor een nieuwe line*/
	char = 1; /*resets het aantal char op de eerste line*/
}

console.log(string);



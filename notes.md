Goede bronnen: mdn

# Hoofdstuk 1 Values, Types, and Operators

## Chapter 3

## Chapter 4

## Chapter 5

## Chapter 6

## Chapter 8

## Chapter 9

## Chapter 10

## Chapter 11


# Hoofdstuk 2 Program Structure

## Chapter 3

## Chapter 4

## Chapter 5

## Chapter 6

## Chapter 8

## Chapter 9

## Chapter 10

## Chapter 11


# Hoofdstuk 3 Functions


## Defining a function

Functions kunnen parameters bevatten, bijvoorbeeld function parameter(x) {} <- dit is de body. in dit geval is x de parameter. Deze kun je dan aanroepen met parameter(5); Functions kunnen meerdere parameters bevatten, maar ook geen.

## Bindings and scopes

Je heb global en local bindings. 
Binding = een variable binden met data.

* global kun je overal gebruiken: var a = a;
* local alleen binnen een bepaalde plek function() { var a =a; }

Elke binding heeft een scope. Dit is de plek van het programma waar de binding zichtbaar is.

## Chapter 3

## Chapter 4

## Chapter 5

## Chapter 6

## Chapter 8

## Chapter 9

## Chapter 10

## Chapter 11


# Hoofdstuk 4 Data Structures: Objects and Arrays


## Further arrayology

* .push voegt een laatste element toe aan een string
* .pop haalt de laatste element weg van een string
* .shift haalt de eerste element van een string weg
* .unshift voegt een eerste element toe van een string

console.log([1, 2, 3, 2, 1].indexOf(2)); dit telt het aantal stappen waar 2 staat
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); dit telt het aantal stappen waar de laatste 2 staat
// → 3


console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]

slice pakt elementen binnen bepaalde indexen. de eerste index is inclusief, de laatste is exclusief
wanneer er geen tweede index wordt gegeven, zal pakt slice alle elementen na de gegeven index

met concat kan je twee arrays aan elkaar lijmen

function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

bij return wordt er a, b gereturned
daarna wordt er array.slice(3) dus d, e eraan vastgeplakt -> dit wordt dus a, b, d, e

als je concat een value meegeeft wat geen array is, dan zal het toegevoegd worden aan de array alsof het een 1 element array was

## Strings and their properties

a string’s indexOf can search for a string containing more than one character, whereas the corresponding array method looks only for a single element.

console.log("one two three".indexOf("ee"));
// → 11

The trim method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string.

console.log("  okay \n ".trim());
// → okay

The zeroPad function from the previous chapter also exists as a method. It is called padStart and takes the desired length and padding character as arguments.

console.log(String(6).padStart(3, "0"));
// → 006

met .split en .join kan je elementen uit een string uit elkaar halen. 

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

met .repeat kan je een string herhalen

console.log("LA".repeat(3));
// → LALALA


## Rest parameters

je kan Math.max gebruiken om het hoogste getal te vinden. het kan handig zijn om function(...numbers) te gebruiken zodat je een oneindig getal aan getallen mee kunt geven.

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9

You can use a similar three-dot notation to call a function with an array of arguments.

let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7

ook kan je getallen toevoegen in de console.log om het hoogste getal te krijgen: console.log(max(9, ...numbers, 2));

## The Math object

random getal 1t/m 9:

console.log(Math.floor(Math.random() * 10));
// → 2

There are also the functions 
* Math.ceil (for “ceiling”, which rounds up to a whole number)
* Math.round (to the nearest whole number)
* Math.abs, which takes the absolute value of a number, meaning it negates negative values but leaves positive ones as they are.

## Destructuring



# Hoofdstuk 5 Higher-Order Functions


## Abstracting repetition

let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]

hier wordt een function value op de plek zelf gecreeërd.


## Higher-order functions

function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true

hier zie je dat een functie een andere functie maakt en dus overschrijdt.


We can even write functions that provide new types of control flow.

function unless(test, then) {
  if (!test) then();
}

repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});
// → 0 is even
// → 2 is even

There is a built-in array method, forEach, that provides something like a for/of loop as a higher-order function.

["A", "B"].forEach(l => console.log(l));
// → A
// → B

## Filtering arrays

function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));
// → [{name: "Adlam", …}, …]

hier worden elementen uit een array gefiltert waarbij de test niet wordt doorgevoerd.

## Transforming with map

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", …]

## Summarizing with reduce

function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10

elk element uit de array wordt hier gepakt om deze vervolgens in element te zetten. current zal op 0 beginnen, maar wordt steeds groter omdat de elementen van de array er steeds bij opgeteld worden door combine. eerst staat er dus (0,1) hierna komt er (1,2) te staan, hierna (3,3) en als laatst (6,4) hier komt dus 10 uit.

als de array minimaal één element heeft, hoef je geen start argument te geven. Het pakt gewoon het eerste element en begint bij de tweede te reducen:

console.log([1, 2, 3, 4].reduce((a, b) => a + b));
// → 10

## Composability

let total = 0, count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count += 1;
  }
}
console.log(Math.round(total / count));
// → 1188

## Recognizing text

The countBy function expects a collection (anything that we can loop over with for/of) and a function that computes a group name for a given element. It returns an array of objects, each of which names a group and tells you the number of elements that were found in that group.

It uses another array method—findIndex. This method is somewhat like indexOf, but instead of looking for a specific value, it finds the first value for which the given function returns true. Like indexOf, it returns -1 when no such element is found.


































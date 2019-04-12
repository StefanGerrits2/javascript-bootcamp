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

```
console.log([1, 2, 3, 2, 1].indexOf(2)); dit telt het aantal stappen waar 2 staat
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); dit telt het aantal stappen waar de laatste 2 staat
// → 3


console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
```

slice pakt elementen binnen bepaalde indexen. de eerste index is inclusief, de laatste is exclusief
wanneer er geen tweede index wordt gegeven, zal pakt slice alle elementen na de gegeven index

met concat kan je twee arrays aan elkaar lijmen

```
function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]
```

bij return wordt er a, b gereturned
daarna wordt er array.slice(3) dus d, e eraan vastgeplakt -> dit wordt dus a, b, d, e

als je concat een value meegeeft wat geen array is, dan zal het toegevoegd worden aan de array alsof het een 1 element array was

## Strings and their properties

a string’s indexOf can search for a string containing more than one character, whereas the corresponding array method looks only for a single element.

```
console.log("one two three".indexOf("ee"));
// → 11
```

The trim method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string.

```
console.log("  okay \n ".trim());
// → okay
```

The zeroPad function from the previous chapter also exists as a method. It is called padStart and takes the desired length and padding character as arguments.

```
console.log(String(6).padStart(3, "0"));
// → 006
```

met .split en .join kan je elementen uit een string uit elkaar halen. 

```
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

met .repeat kan je een string herhalen

console.log("LA".repeat(3));
// → LALALA
```


## Rest parameters

je kan Math.max gebruiken om het hoogste getal te vinden. het kan handig zijn om function(...numbers) te gebruiken zodat je een oneindig getal aan getallen mee kunt geven.

```
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9
```

You can use a similar three-dot notation to call a function with an array of arguments.

```
let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7
```

ook kan je getallen toevoegen in de console.log om het hoogste getal te krijgen: 

```
console.log(max(9, ...numbers, 2));
```

## The Math object

random getal 1t/m 9:

```
console.log(Math.floor(Math.random() * 10));
// → 2
```

There are also the functions 
* Math.ceil (for “ceiling”, which rounds up to a whole number)
* Math.round (to the nearest whole number)
* Math.abs, which takes the absolute value of a number, meaning it negates negative values but leaves positive ones as they are.

## Destructuring



# Hoofdstuk 5 Higher-Order Functions


## Abstracting repetition

```
let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]
```

hier wordt een function value op de plek zelf gecreeërd.


## Higher-order functions

```
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
```

hier zie je dat een functie een andere functie maakt en dus overschrijdt.


We can even write functions that provide new types of control flow.

```
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
```

There is a built-in array method, forEach, that provides something like a for/of loop as a higher-order function.

```
["A", "B"].forEach(l => console.log(l));
// → A
// → B
```

## Filtering arrays

```
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
```

hier worden elementen uit een array gefiltert waarbij de test niet wordt doorgevoerd.

## Transforming with map

```
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
```

## Summarizing with reduce

```
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10
```

elk element uit de array wordt hier gepakt om deze vervolgens in element te zetten. current zal op 0 beginnen, maar wordt steeds groter omdat de elementen van de array er steeds bij opgeteld worden door combine. eerst staat er dus (0,1) hierna komt er (1,2) te staan, hierna (3,3) en als laatst (6,4) hier komt dus 10 uit.

als de array minimaal één element heeft, hoef je geen start argument te geven. Het pakt gewoon het eerste element en begint bij de tweede te reducen:

```
console.log([1, 2, 3, 4].reduce((a, b) => a + b));
// → 10
```

## Composability

```
let total = 0, count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count += 1;
  }
}
console.log(Math.round(total / count));
// → 1188
```

## Recognizing text

The countBy function expects a collection (anything that we can loop over with for/of) and a function that computes a group name for a given element. It returns an array of objects, each of which names a group and tells you the number of elements that were found in that group.

It uses another array method—findIndex. This method is somewhat like indexOf, but instead of looking for a specific value, it finds the first value for which the given function returns true. Like indexOf, it returns -1 when no such element is found.



# Hoofdstuk 6 The Secret Life of Objects

## Encapsulation

Object-oriented programming betekend dat je bepaalde onderdelen in kleinere onderdelen verdeeld zodat ieder stukje zijn eigen ding kan doen.
Zo kan bepaalde code lokaal worden opgeslagen zodat een ander persoon deze code niet per se hoeft te snappen. Alleen de code eromheen hoeft aangepast te worden.
De verschillende onderdelen van een programma interacteren met elkaar via interfaces. 

Properties that are part of the interface are called public. The others, which outside code should not be touching, are called private.

It is also common to put an underscore (_) character at the start of property names to indicate that those properties are private.


## Methods

Methods are nothing more than properties that hold function values. This is a simple method:

```
let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'
```

## Prototypes

```
console.log(Object.getPrototypeOf({}) ==
            Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null

Functions derive from Function.prototype, and arrays derive from Array.prototype.

console.log(Object.getPrototypeOf(Math.max) ==
            Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) ==
            Array.prototype);
// → true
```

Met object.create kan je een speciefiek prototype maken voor een bepaald object. Zie de volgende code.

```
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'
```

The “proto” rabbit acts as a container for the properties that are shared by all rabbits. An individual rabbit object, like the killer rabbit, contains properties that apply only to itself—in this case its type—and derives shared properties from its prototype.


## Classes

A class defines the shape of a type of object—what methods and properties it has. Such an object is called an instance of the class.

If you put the keyword new in front of a function call, the function is treated as a constructor. This means that an object with the right prototype is automatically created, bound to this in the function, and returned at the end of the function.


## Class notation

So JavaScript classes are constructor functions with a prototype property. That is how they work, and until 2015, that was how you had to write them. These days, we have a less awkward notation.

```
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
```

## Overriding derived properties

```
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small
```

## Maps

```
let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62
};

console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true
```

Hier map je ages aan een naam.^

As such, using plain objects as maps is dangerous. There are several possible ways to avoid this problem. First, it is possible to create objects with no prototype. If you pass null to Object.create, the resulting object will not derive from Object.prototype and can safely be used as a map.

```
console.log("toString" in Object.create(null));
// → false
```

Nu kan je map gebruiken omdat er geen prototype meer in zit.

Object property names must be strings. If you need a map whose keys can’t easily be converted to strings—such as objects—you cannot use an object as your map.
Hiervoor kan je een class gebruiken genaamd Map. Het stored een mapping waardoor je elke type key kan gebruiken.

De methodes .set en .get kan je gebruiken als je een Map class gebruikt. Zo kan je snel zoeken door een groot aantal values.


## Polymorphism

```
Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
};

console.log(String(blackRabbit));
// → a black rabbit
```

## Symbols

```
let sym = Symbol("name");
console.log(sym == Symbol("name"));
// → false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// → 55
```

Symbols kunnen maar één keer gebruikt worden. Als je deze nog een keer gebruikt zie je dat er false komt te staan.


# Hoofdstuk 8 Bugs and Errors

## Language

Als je iets verkeerd codeert kan er NaN uitkomen of een undefined value. 
De bron van deze problemen zijn soms moeilijk om te vinden.
Het proces om fouten te vinden, wordt debugging genoemd.


## Strict Mode

Je kan Javascript stricer maken door strict mode aan te zetten. Dit kan je doen door "use strict" bovenaan de file te zetten, of bovenaan een function body.

```
function canYouSpotTheProblem() {
  "use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}

canYouSpotTheProblem();
// → ReferenceError: counter is not defined
```

Normally, when you forget to put let in front of your binding, as with counter in the example, JavaScript quietly creates a global binding and uses that. In strict mode, an error is reported instead. 

Another change in strict mode is that the this binding holds the value undefined in functions that are not called as methods:

```
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand"); // oops
console.log(name);
// → Ferdinand


"use strict";
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand"); // forgot new
// → TypeError: Cannot set property 'name' of undefined
```

Strict mode does a few more things. It disallows giving a function multiple parameters with the same name and removes certain problematic language features entirely (such as the with statement, which is so wrong it is not further discussed in this book).

In short, putting "use strict" at the top of your program rarely hurts and might help you spot a problem.


## Types

Veel fouten kunnen ontstaan doordat je verward raakt welke soort values er in een functie gaan. Dit kan je ophelderen door een comment te plaatsen vóór de functie: 

```
// (VillageState, Array) → {direction: string, memory: Array}
function goalOrientedRobot(state, memory) {
  // ...
}
```

## Testing

Automated testing is the process of writing a program that tests another program.

Writing tests is a bit more work than testing manually, but once you’ve done it, you gain a kind of superpower: it takes you only a few seconds to verify that your program still behaves properly in all the situations you wrote tests for. When you break something, you’ll immediately notice, rather than randomly running into it at some later time.

Er wordt gebruik gemaakt van console.logs om zo iets te vertellen zoals FAILED.


## Debugging

Als je code iets geks oplevert en geen error geeft, ga dan vooral niet random je code veranderen tot het werkt. Denk eerst na en kom met een theorie waarom iets misschien niet werkt. Je kan console.logs toevoegen op regels code om meer informatie te krijgen wat er in het programma gebeurd. 


## Exceptions

```
function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

function look() {
  if (promptDirection("Which way?") == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}
```

Door try te gebruiken met catch kan je erachter komen of je code goed werkt. Als er in de try block iets vreemds gebeurd, dan wordt de catch blok uitgevoerd. Hier kan je dan een message intypen als er iets fout gaat.
Als alles goed verloopt zal het programma verder lopen onder de try/catch statement.


## Cleaning up after exceptions

A finally block says “no matter what happens, run this code after trying to run the code in the try block.”

```
function transfer(from, amount) {
  if (accounts[from] < amount) return;
  let progress = 0;
  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    if (progress == 1) {
      accounts[from] += amount;
    }
  }
}
```

## Selective catching


# Hoofdstuk 10 Modules

## Modules

A module is a piece of program that specifies which other pieces it relies on and which functionality it provides for other modules to use (its interface).
By restricting the ways in which modules interact with each other, the system becomes more like LEGO, where pieces interact through well-defined connectors, and less like mud, where everything mixes with everything.

The relations between modules are called dependencies.


## Packages

One of the advantages of building a program out of separate pieces, and being actually able to run those pieces on their own, is that you might be able to apply the same piece in different programs.

Packages zijn stukken code die je online kan importeren die vaak door anderen zijn geschreven
Modules zijn stukken code die lokaal op je computer zijn die je kan inladen die vaak door jezelf zijn geschreven

Packages bevatten vaak een documentatie wat het precies doet.
Een plek op je packages te zetten is NPM. Hier kan je packages opzetten, downloaden en updaten.

NPM:
* Een service waar je kan packages kan uploaden en downloaden, en een programma die je helpt je ze te installeren en te gebruiken.

Packages zijn erg handig. Hierdoor hoef je dezelfde code niet 100 keer te schrijven, maar kan je deze gewoon importeren.


## Improvised modules

Een module systeem kan gemaakt worden door Javascript functions local scopes te maken met objecten:

```
const weekDay = function() {
  const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
                 "Thursday", "Friday", "Saturday"];
  return {
    name(number) { return names[number]; },
    number(name) { return names.indexOf(name); }
  };
}();

console.log(weekDay.name(weekDay.number("Sunday")));
// → Sunday
```
Dit zorgt voor isolatie.


## Evaluating data as code

There are several ways to take data (a string of code) and run it as part of the current program.

The most obvious way is the special operator eval, which will execute a string in the current scope. This is usually a bad idea because it breaks some of the properties that scopes normally have, such as it being easily predictable which binding a given name refers to.

Helaas is de scope hierdoor niet gesloten

```
const x = 1;
function evalAndReturnX(code) {
  eval(code);
  return x;
}

console.log(evalAndReturnX("var x = 2"));
// → 2
console.log(x);
// → 1
```

Een betere manier om dit te doen is door de Function constructor te gebruiken. Dit neemt 2 agrumenten. Het wrapped de code in de function value zodat het een eigen scope krijgt.

This is precisely what we need for a module system. We can wrap the module’s code in a function and use that function’s scope as module scope.


## CommonJS

The most widely used approach to bolted-on JavaScript modules is called CommonJS modules. Node.js uses it and is the system used by most packages on NPM.

Door *require* te gebruiken wordt de module geladen en returnes the interface.

This example module provides a date-formatting function. It uses two packages from NPM—ordinal to convert numbers to strings like "1st" and "2nd", and date-names to get the English names for weekdays and months. It exports a single function, formatDate, which takes a Date object and a template string.

The template string may contain codes that direct the format, such as YYYY for the full year and Do for the ordinal day of the month. You could give it a string like "MMMM Do YYYY" to get output like “November 22nd 2017”.

```
const ordinal = require("ordinal");
const {days, months} = require("date-names");

exports.formatDate = function(date, format) {
  return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
    if (tag == "YYYY") return date.getFullYear();
    if (tag == "M") return date.getMonth();
    if (tag == "MMMM") return months[date.getMonth()];
    if (tag == "D") return date.getDate();
    if (tag == "Do") return ordinal(date.getDate());
    if (tag == "dddd") return days[date.getDay()];
  });
};
```

De interface *ordinal* is een single function.


## ECMAScript modules


# Hoofdstuk 13 Javascript And The Browser

## Networks and the internet 

Computer networks bestaan al sinds 1950. Als je maar 2 draden tussen twee of meerdere computers legt, kan je al veel doen.

De magie om meerdere computers over de planeet te connecten is begonnen in 1980, dit noemen wij het Internet.

Computers sturen bits naar elkaar, dit heet *bit-shooting*

Een *netwerk protocol* beschrijft een bepaalde stijl van communicatie over een network. Zoals:

* Mail versturen
* Mail ophalen
* Bestanden delen
* Computers beheren die geinfecteerd zijn door bepaalde software

### HTTP Hypertext Transfer Protocol

HTTP is een protocol om chunks met informatie op te halen. Zoals:

* Web pages
* Pictures

De kant die de request maakt begint met een line zoals dit:

```
GET /index.html HTTP/1.1
```

Het benoemd de resource en de versie van het protocol die wordt gebruikt.

Er zijn nog meer regels zodat de requester meer informatie kan geven, en andersom.

De meeste protocollen worden gemaakt boven andere protocollen.  *HTTP treats the network as a streamlike device into which you can put bits and have them arrive at the correct destination in the correct order. As we saw in Chapter 11, ensuring those things is already a rather difficult problem.*

### TCP Transmission Control Protocol

De TCP Protocol is een protocol die dit probleem oplost. Alle internet connected devices spreken het. Daarnaast is de meeste communicatie van het internet daarop gebouwd (TCP)

Een TCP connectie werkt zo: Een computer is aan het wachten, oftewel luisteren totdat een andere computer begint met praten. Om naar verschillende soorten communicatie te luisteren op dezelfde tijd, heeft iedere luisteraar een nummer, dit wordt een *port* genoemd. 

De meeste protocollen specificeren welke *port* standaard moet worden gebruikt. Als voorbeeld: wanneer we een email willen versturen via het SMTP protocol, dan wordt de machine waarnaar we het versturen verwacht om naar *port 25* te luisteren.

Een andere computer kan dan een connectie tot stand brengen met de target machine door de juiste *port* te gebruiken. Als de target machine is bereikt met het juiste *port*, dan is er succesvol een connectie gemaakt. De computer die de connectie maakt wordt de *client* genoemd.

Zo'n connectie kan je zien als een pijp waarbij aan beide kanten bits kunnen gaan. Van de ene kant naar de andere, en andersom. Wanneer de bits succesvol de overkant hebben bereikt, kunnen deze worden uitgelezen aan de andere kant.


## The Web

The *World Wide Web* is een set met protocollen en formats die ons toegang geven om web paginas in een browser te bezoeken. Het *Web* gedeelte staat voor het feit dat meerdere pages met elkaar in contact staan. 

Om bij het Web te horen, moet je een machine connecten naar het internet die naar *port 80* luistert met het HTTP protocol zodat de computers naar documenten kan vragen.

Elk document op het Web is genoemd naar een URL Uniform Resource Locator, dit ziet er zo uit:

``` 
http://eloquentjavascript.net/13_browser.html

```
* http:// = protocol
* eloquentjavascript.net = server
* /13_browser.html = path

Het eerste stuk vertelt on dat deze URL het HTTP protocol gebruikt. Het tweede indentificeert welke server wij het document van opvragen. Het laatste is de path string die ons leidt naar een specifiek onderdeel van dat document.

Machines die connecten met het Internet krijgen een IP adres. Dit is een nummer die wordt gebruikt zodat je berichten kan sturen naar die machine. Het ziet er uit als dit: 149.210.142.219 of 2001:4860:4860::8888. 

Omdat deze lange getallen moeilijk zijn om te typen, kan je een *domain name* registreren voor een specifiek adress of meerdere adressen. Je gebruikt dus een domein naam om naar het IP adres van de machine te gaan. 

Als je deze URL in je browsers adress bar tikt, zal de browser proberen om het document van die URL te laten zien.

1. Eerst moet je browser zoeken welk IP adres eloquentjavascript.net bevat
2. Daarna zal het connectie maken met de server via het HTTP protocol en zal het vragen naar de resource /13_browser.html
3. Als alles goed is gegaan zal de server het document terugsturen en op je scherm laten zien.

## HTML Hypertext Markup Language

HTML is een document format om web pages te maken. Een HTML document bevat tekst, maar ook *tags* die structuur geven aan de tekst, zoals links, paragrafen en headings.

Een kort HTML document voorbeeld:

```
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My home page</title>
  </head>
  <body>
    <h1>My home page</h1>
    <p>Hello, I am Marijn and this is my home page.</p>
    <p>I also wrote a book! Read it
      <a href="http://eloquentjavascript.net">here</a>.</p>
  </body>
</html>
```

De tags die tussen angle bracket staan: *<* en *>*, geven informatie over de structuur van het document

Het document begint met
```
<!doctype html>
```
Dit vertelt de browser dat het de pagina moetinladen als moderne HTML.

Een HTML document heeft een head en een body. De *head* bevat informatie over het document. De *body* bevat het document zelf. 

Sommige opening tags zoals < a > kan informatie bevatten zoals 
```
<a name="value">
```
Deze worden attributen genoemd. href staat voor hypertext reference.

Sommige tags sluiten niks, zoals:
```
<meta charset="utf-8">
```

Om angle brackets in een HTML document te gebruiken kan je het volgende doen:
* Een opening angle bracket wordt geschreven als &lt; (less than)
* Een sluiting angle bracket wordt geschreven als &gt; (greater than)

In HTML, een & teken gevolgd bij een naam of character code en een ; heet een *entity* en zal worden vervangen door het character dat het voorstelt.

Als bepaalde tags missen in een HTML document, kan de browser dit gemakkelijk herstellen. Als er bijvoorbeeld geen head of body staat bijvoorbeeld. De browser weet dat meta and title in de head horen en dat h1 betekent dat de body is gestart. 

## HTML and Javascript

Een script wordt gelezen in een HTML pagina wanneer er een script tag staat. Je kan beter aan het einde van de body een script als bestand linken.

Een script tag moet altijd weer gesloten worden. Zelfs als er geen code in de file zit. Als je deze vergeet te sluiten, zal de rest van de pagina als javascript worden gelezen.

Je kan ES modules laden in de browser door in je script een tag mee te geven met een
```
type="module"
```

attribuut. Modules kunnen afhankelijk zijn van andere modules door relatieve URLs als module names in import declaraties.

Sommige attributen kunnen ook een javascript programma bevatten. De button tag hieronder bevat een onclick attribuut. De value van het attribuut zal worden gestart wanneer er op de button wordt geklikt:

```
<button onclick="alert('Boom!');">DO NOT PRESS</button>
```

## In the sandbox

Een programma zijn envoirement isoleren noem je *sandboxing*. Het idee dat het programma gevaarloos in een sandbox speelt. Het programma kan er niet uit. 

Het lastige gedeelte van sandboxing is dat je het programma genoeg ruimte moet geven om zijn werk te laten doen, maar ook een limiet stellen dat het geen gevaarlijke dingen kan doen.

## Compatibility and browser wars

In de eerste stages van het Web was de Browser Mosaic aan het domineren. Na een paar jaar werd Netscape de grootste, die gerunned werd door Microsoft's Internet Explorer. 

De *browser wars* bestond uit 2 of 3 incompitable platforms. Deze zaten zelfs vol met bugs in 2003. Het was lastig voor mensen om web paginas te schrijven.

Mozilla Firefox challenged Internet Explorers positie in de late 2000s. Omdat Microsoft niet al te geintereseerd was, nam Firefox een groot deel van de markt in handen. Ook kwam Google met Google chrome en Apple met Safari. Er waren dus 4 grote browsers in plaats van 1.

Doordat deze nieuwkomers wel geinteresseerd waren, zaten er minder bugs in met betere standaarden.


# Hoofdstuk 14 The Document Object Model

## Document structure

In elke box van een HTML document zit een object, hiermee kan je interacteren. Dit vertelt in welke boxen tekst bevat. Dit heet het Document Object Model, oftewel DOM.

De globale binding *document* geeft ons toegang tot deze objecten. Het *documentElement* property is het object van de HTML tag.

## Trees

We noemen een *data structure* een *tree*, dit heeft een bepaalde strructuur  met 1 *root*, in dit geval de DOM, document.documentElement.

Een *tree* heeft verschillende soorten *nodes*. De syntax tree voor *the Egg language* heeft identifiers, values en application nodes. Deze application nodes kunnen children bevatten, terwijl identifiers en values leaves zijn, of nodes zonder children.

Hetzelfde geld voor de DOM. Nodes voor elements, die HTML tags reppresenteren, dit is de structuur van het document. Deze kunnen child notes bevatten.

Als voorbeeld van zo'n node is *document.body*. Sommige van deze children kunnen leaf nodes zijn, delen van een tekst of comment nodes.

Elke DOM node object heeft een *nodeType* property, die een nummer bevat die een *type of node* identificeert. Elementen hebben code 1, wat ook wordt gedefinieerd als de constante property *Node.ELEMENT_NODE*.

Text nodes representeren een stuk tekst in het document, code 3, *Node.TEXT_NODE*. Comments hebben code 8, *Node.COMMENT_NODE*.

Een andere manier om onze document tree te visualiseren gaat zo:

![](http://i67.tinypic.com/21btc2a.png)

De leaves zijn text nodes. De pijlen zijn parent-child relationships tussen nodes.

## The standard

De DOM was niet alleen gedesigned voor alleen Javascript. Het is juist een neutrale interface die door andere systemen kunnen worden gebruikt.

Er is geen manier om een neieuwe node te maken en dit children en attributes te geven. Je moet het eerst maken om vervolgens de children en de attributes een voor een toe te voegen door side effects te gebruiken. Code dat extreem interacteert met de DOM neigt ernaar om lang, herhalend en lelijk te zijn.

## Moving through the tree

DOM nodes bevatten links naar andere nodes die dichtbij zijn. Dit diagram illustreert dat:

![](http://i64.tinypic.com/2uizwja.png)

Ook is er een *children* property, net als *childNotes* maar dit bevat alleen children elementen (type1), geen andere types van child notes. Dit kan handig zijn wanneer je niet geinteresseerd ben in text nodes.

Wanneer je te maken heb met zo'n nested data structure, zijn recursive functions vaak handig. De volgende functie scant een document voor text nodes en bevat een string die true terug returned als hij er een heeft gevonden:

```
function talksAbout(node, string) {
  if (node.nodeType == Node.ELEMENT_NODE) {
    for (let i = 0; i < node.childNodes.length; i++) {
      if (talksAbout(node.childNodes[i], string)) {
        return true;
      }
    }
    return false;
  } else if (node.nodeType == Node.TEXT_NODE) {
    return node.nodeValue.indexOf(string) > -1;
  }
}

console.log(talksAbout(document.body, "book"));
// → true
```
The nodeValue property of a text node holds the string of text that it represents.

## Finding elements

Om een bepaalde link te krijgen, kan je dit het best zo doen:

```
let link = document.body.getElementsByTagName("a")[0];
console.log(link.href);
```

Alle element nodes hebben een *getElementsByTagName* method. Die collect alle elementen met die tag name that are descendants (direct or indirect children) of that node and returns een array-like object.

Om een specifieke single node te vinden, kan je het een id attribuut geven en vervolgens *document.getElementById* gebruiken:

```
<p>My ostrich Gertrude:</p>
<p><img id="gertrude" src="img/ostrich.png"></p>

<script>
  let ostrich = document.getElementById("gertrude");
  console.log(ostrich.src);
</script>
```

Ook kan je de methode *getElementsByClassName* gebruiken die zoekt door alle content van een element node, and retrieves alle elementen die de bepaalde string bevatten in hun class attribuut.

## Changing the document

Bijna alles in de DOM data structure kan veranderd worden. De shape van de document tree kan modified worden door de parent-child relationships te veranderen. Nodes hebben een *remove* method om ze te verwijderen van hun current parent node. Om een child node aan een element node toe te voegen kunnen we *appendChild* gebruiken, dit plaatst het aan het einde van de lijst met children. Of *insertBefore*, dit plaatst de node als eerste argument vóór de node die gegeven wordt als tweede argument.

Beide *replaceChild* en *insertBefore* verwachten dat de *nieuwe* node als eerste argument wordt meegegeven.

A node can exist in the document in only one place. Thus, inserting paragraph Three in front of paragraph One will first remove it from the end of the document and then insert it at the front, resulting in Three/One/Two. All operations that insert a node somewhere will, as a side effect, cause it to be removed from its current position (if it has one).

The replaceChild method is used to replace a child node with another one. It takes as arguments two nodes: a new node and the node to be replaced. The replaced node must be a child of the element the method is called on. Note that both *replaceChild* and *insertBefore* expect the new node as their first argument.

## Creating nodes

Als je alle img tags wil verplaatsen met hun *alt* attributen, dan kan je dit doen door de images weg te halen en text nodes aan te maken met *document.createTextNode*.

```
<p>The <img src="img/cat.png" alt="Cat"> in the
  <img src="img/hat.png" alt="Hat">.</p>

<p><button onclick="replaceImages()">Replace</button></p>

<script>
  function replaceImages() {
    let images = document.body.getElementsByTagName("img");
    for (let i = images.length - 1; i >= 0; i--) {
      let image = images[i];
      if (image.alt) {
        let text = document.createTextNode(image.alt);
        image.parentNode.replaceChild(text, image);
      }
    }
  }
</script>
```
*createTextNode* geeft on een text nodie die we in kunnen voegen in het document om het zichtbaar te maken op het scherm.

Als je een solid connection of nodes wil, dan kan je de collection converten to a real array calling *Array.from*:

```
let arrayish = {0: "one", 1: "two", length: 2};
let array = Array.from(arrayish);
console.log(array.map(s => s.toUpperCase()));
// → ["ONE", "TWO"]
```

Om element nodes te maken, kan je *document.createElement* gebruiken, dit zal een tag name bevatten en geeft een empty node terug van het gegeven type.

## Attributes

HTML geeft jou toestemming om wat voor attribuut dan ook op een node te zetten. Zo kan je extra informatie storen in een document. Hiervoor gebruik je *getAttribute* en *setAttribute*:

```
<p data-classified="secret">The launch code is 00000000.</p>
<p data-classified="unclassified">I have two feet.</p>

<script>
  let paras = document.body.getElementsByTagName("p");
  for (let para of Array.from(paras)) {
    if (para.getAttribute("data-classified") == "secret") {
      para.remove();
    }
  }
</script>
```
Het is aangeraden om de namen *data-* te geven zodat ze niet conflicten met andere attributen.

## Layout

Paragraphs of headings die de hele breedte van een document in beslag nemen en worden gerenderd op verschillende regels, worden *block elements* genoemd. Andere elementen zoals a of strong worden gerenderd in dezelfde line met tekst eromheen, deze heten *inline elements*.

De size en position van een element kan accesed worden van Javascript. DE *offsetWidth* en *offsetHeight* properties geeft de ruimte dat het element in beslag neemt in *pixels*. 

Similarly, clientWidth and clientHeight give you the size of the space inside the element, ignoring border width.

```
<p style="border: 3px solid red">
  I'm boxed in
</p>

<script>
  let para = document.body.getElementsByTagName("p")[0];
  console.log("clientHeight:", para.clientHeight);
  console.log("offsetHeight:", para.offsetHeight);
</script>
```
De meest effectieve manier om de exacte positie van een element op het scherm te vinden doe je via de *getBoundingClientRect* methode. Dit returned een object met de *top, bottom, left and right* properties in pixels relatief van linksboven op je scherm. Als je dit relatief op het hele document wil, moet je de huidige scroll positie toevoegen die je kan vinden in de bindings van *pageXOffset* en *pageYOffset*.

## Styling

Hier is een voorbeeld dat een *style* property gebruikt:

```
<p><a href=".">Normal link</a></p>
<p><a href="." style="color: green">Green link</a></p>
```
Een style attribuut kan een of meerdere declaraties bevatten, die properties zijn (zoals kleur) gevolgd met een colon (:) en een value (zoals groen). Als er meerdere declaraties zijn moet er een semicolon (;) tussen. Zoals:

```
"color: red; border: none"
```
Dit kan je ook doen met de propertie *display* met de values *block* en *none*.

De code van Javascript kan direct de style van een element manipuleren door de element zijn *style* property:

```
<p id="para" style="color: purple">
  Nice text
</p>

<script>
  let para = document.getElementById("para");
  console.log(para.style.color);
  para.style.color = "magenta";
</script>
```
Style properties als *font-family* hebben een streepje wat het awkward maakt om dat te typen in Javascript. Hier is een oplossing voor. Namelijk dit: *style.fontFamily*.

## Cascading styles

```
.subtle {
  color: gray;
  font-size: 80%;
}
#header {
  background: blue;
  color: white;
}
/* p elements with id main and with classes a and b */
p#main.a.b {
  margin-bottom: 20px;
}
```

The notation p > a {…} applies the given styles to all <a> tags that are direct children of <p> tags. Similarly, p a {…} applies to all <a> tags inside <p> tags, whether they are direct or indirect children.

## Query selectors

The querySelectorAll method, which is defined both on the document object and on element nodes, takes a selector string and returns a NodeList containing all the elements that it matches.

```
<p>And if you go chasing
  <span class="animal">rabbits</span></p>
<p>And you know you're going to fall</p>
<p>Tell 'em a <span class="character">hookah smoking
  <span class="animal">caterpillar</span></span></p>
<p>Has given you the call</p>

<script>
  function count(selector) {
    return document.querySelectorAll(selector).length;
  }
  console.log(count("p"));           // All <p> elements
  // → 4
  console.log(count(".animal"));     // Class animal
  // → 2
  console.log(count("p .animal"));   // Animal inside of <p>
  // → 2
  console.log(count("p > .animal")); // Direct child of <p>
  // → 1
</script>
```
## Positioning and animating

The following document displays a picture of a cat that moves around in an ellipse:

```
<p style="text-align: center">
  <img src="img/cat.png" style="position: relative">
</p>
<script>
  let cat = document.querySelector("img");
  let angle = Math.PI / 2;
  function animate(time, lastTime) {
    if (lastTime != null) {
      angle += (time - lastTime) * 0.001;
    }
    cat.style.top = (Math.sin(angle) * 20) + "px";
    cat.style.left = (Math.cos(angle) * 200) + "px";
    requestAnimationFrame(newTime => animate(newTime, time));
  }
  requestAnimationFrame(animate);
</script>
```
De afbeelding is gecentered op de pagina met een relatieve positie. De *top* en *left* styles worden continu veranderd om een animatie te maken.

Het script gebruikt een *requestAnimationFrame* om de *animate* funciton te runnen wanneer de browser klaar is om het scherm te veranderen. Dan called hij zichzelf weer om de volgende update te genereren. Als de browser window actief is, zal dit 60 keer per seconden updaten, dit is een prima animatie met 60FPS.

# Hoofdstuk 15 Handling events

## Event handlers

Door handlers te gebruiken kan je events opmerken om vervolgens een functie uit te voeren:
```
<p>Click this document to activate the handler.</p>
<script>
  window.addEventListener("click", () => {
    console.log("You knocked?");
  });
</script>
```

Hier wordt een eventlistener toegevoegs aan de window.

## Events and dom nodes

De *removeEventlistener* method met called met argumenten kan je de handler weghalen:

```
<button>Act-once button</button>
<script>
  let button = document.querySelector("button");
  function once() {
    console.log("Done.");
    button.removeEventListener("click", once);
  }
  button.addEventListener("click", once);
</script>
```
Je moet dezelfde function meegeven bij beide eventlisteners.

## Event objects

Je kan ook checken bij de muis welke knop hier is ingedrukt, hier zijn bepaalde codes voor en kan je checken met een *if* statement:

```
<button>Click me any way you want</button>
<script>
  let button = document.querySelector("button");
  button.addEventListener("mousedown", event => {
    if (event.button == 0) {
      console.log("Left button");
    } else if (event.button == 1) {
      console.log("Middle button");
    } else if (event.button == 2) {
      console.log("Right button");
    }
  });
</script>
```

## Propagation

Door de *stopPropagation* method te callen kan je voorkomen dat andere handlers het event ontvangen. Bijvoorbeeld als je een knop in een clickable element heb, en je wil niet dat de knop dingen kan registreren maar alleen hetegene om de knop heen. Hier een voorbeeld:

```
<p>A paragraph with a <button>button</button>.</p>
<script>
  let para = document.querySelector("p");
  let button = document.querySelector("button");
  para.addEventListener("mousedown", () => {
    console.log("Handler for paragraph.");
  });
  button.addEventListener("mousedown", event => {
    console.log("Handler for button.");
    if (event.button == 2) event.stopPropagation();
  });
</script>
```

## Default actions

* Link: Je wordt naar een target gebracht van de link.
* Down arrow: De browser scrolled naar beneden.
* Right click: Context menu.

Door de *preventDefault* method te gebruiken op een event object kan je het normale actions negeren.

Bijvoorbeeld als je je eigen keyboard shortcuts will hebben in een menu, dan wil je niet dat je pagina naar beneden scrolled.

Hier is een voorbeeld van een link die niet gevolgt wordt:

```
<a href="https://developer.mozilla.org/">MDN</a>
<script>
  let link = document.querySelector("a");
  link.addEventListener("click", event => {
    console.log("Nope.");
    event.preventDefault();
  });
</script>
```
Gebruik dit alleen als je een hele goede reden heb om dit te doen. Mensen die deze normale acties gewend zijn zullen dit niet leuk vinden als er unexpected behaviour is.

## Key events

Als je een key indrukt zal er een *keydown* event zijn, en een *keyup* event als je deze weer los laat:

```
<p>This page turns violet when you hold the V key.</p>
<script>
  window.addEventListener("keydown", event => {
    if (event.key == "v") {
      document.body.style.background = "violet";
    }
  });
  window.addEventListener("keyup", event => {
    if (event.key == "v") {
      document.body.style.background = "";
    }
  });
</script>
```

## Pointer events

Je heb een muis / touchpad en touchscreens. Dit zijn verschillende soorten events

### Mouse clicks

Als je een muis indrukt zullen er nummers ontstaan. *mouseup* en *mousedown* zijn hetzelfde als *keyup* en *keydown*.

### Mouse motion

Elke keer dat de muis beweegt wordt er een *mousemove* event gelanceerd. Dit wordt gebruikt om de plek van de muis positie te bepalen. 

Dit kan je gebruiken om de lengte van een balk te veranderen:

```
<p>Drag the bar to change its width:</p>
<div style="background: orange; width: 60px; height: 20px">
</div>
<script>
  let lastX; // Tracks the last observed mouse X position
  let bar = document.querySelector("div");
  bar.addEventListener("mousedown", event => {
    if (event.button == 0) {
      lastX = event.clientX;
      window.addEventListener("mousemove", moved);
      event.preventDefault(); // Prevent selection
    }
  });

  function moved(event) {
    if (event.buttons == 0) {
      window.removeEventListener("mousemove", moved);
    } else {
      let dist = event.clientX - lastX;
      let newWidth = Math.max(10, bar.offsetWidth + dist);
      bar.style.width = newWidth + "px";
      lastX = event.clientX;
    }
  }
</script>
```
Hier wordt de *mouseover* handler over de gehele window geregistreerd. Dus als je de balk ingedrukt houdt terwijl je muis buiten de box is, zal de lengte als nog updaten.

### Touch events

Een touchscreen werkt anders dan een muis. Er zijn geen buttons, en je kan niet de vinger tracken als deze niet op het scherm is. Daarnaast kan je meerdere vingers tegelijkertijd hebben.

Er zijn specifieke events zoals *touchstart* *touchmove* en *touchend* hiervoor.

## Scroll events

Je kan scroll events gebruiken door een bepaalde waarde mee te geven:

```
<style>
  #progress {
    border-bottom: 2px solid blue;
    width: 0;
    position: fixed;
    top: 0; left: 0;
  }
</style>
<div id="progress"></div>
<script>
  // Create some content
  document.body.appendChild(document.createTextNode(
    "supercalifragilisticexpialidocious ".repeat(1000)));

  let bar = document.querySelector("#progress");
  window.addEventListener("scroll", () => {
    let max = document.body.scrollHeight - innerHeight;
    bar.style.width = `${(pageYOffset / max) * 100}%`;
  });
</script>
```

Als je een element een *position fixed* geeft dan zorgt het ervoor dat je voorkomt dat je scrolled met de rest van het document. 

De *innerHeight* geeft je de height van de window. Dit kan je gebruiken om te bepalen hoe hoog je in de window zit. 

## Focus events

Als een element in focus is zal de browser dit een *focus* event meegeven. Als de focus weggaat krijgt hij een *blur* event.

Dit voorbeeld help je om te zien wat de focus heeft:

```
<p>Name: <input type="text" data-help="Your full name"></p>
<p>Age: <input type="text" data-help="Your age in years"></p>
<p id="help"></p>

<script>
  let help = document.querySelector("#help");
  let fields = document.querySelectorAll("input");
  for (let field of Array.from(fields)) {
    field.addEventListener("focus", event => {
      let text = event.target.getAttribute("data-help");
      help.textContent = text;
    });
    field.addEventListener("blur", event => {
      help.textContent = "";
    });
  }
</script>
```

## Load event

Als een pagina klaar is met laden, zal er een event *load* afgevuurd worden op de window en de document body objects. Dit wordt vaak gebruikt om het hele document te bouwen.

Als een pagina wordt geclosed of weg wordt genavigeert door bijvoorbeeld een link, dan wordt er een *beforeunload* event afgevuurd. Dit wordt gebruikt als de gebruiker perongeluk al zijn werk kwijtraakt als hij dit niet heeft opgeslagen.

## Events and the event loop

Als je iets wil doen dat time consuming is zonder de page te laten freezen, dan zijn er *web workers*. Een worker is een Javascript process die naast de main script wordt gelezen op zijn eigen tijdlijn.

## Timers

Soms moet je een function cancelen, dit doe je door de value te storen die je terug krijgt van *setTimeout* en dan *clearTimeout* te callen:

```
let bombTimer = setTimeout(() => {
  console.log("BOOM!");
}, 500);

if (Math.random() < 0.5) { // 50% chance
  console.log("Defused.");
  clearTimeout(bombTimer);
}
```

## Debouncing

Als er veel interacties tegelijk zijn kan je het beste *setTimeout* gebruiken zodat dit niet te vaak gebeurd. Dit noem je *debouncing* the event. 

```
<textarea>Type something here...</textarea>
<script>
  let textarea = document.querySelector("textarea");
  let timeout;
  textarea.addEventListener("input", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => console.log("Typed!"), 500);
  });
</script>
```

## Summary

Event handlers make it possible to detect and react to events happening in our web page. The addEventListener method is used to register such a handler.

Each event has a type ("keydown", "focus", and so on) that identifies it. Most events are called on a specific DOM element and then propagate to that element’s ancestors, allowing handlers associated with those elements to handle them.

When an event handler is called, it is passed an event object with additional information about the event. This object also has methods that allow us to stop further propagation (stopPropagation) and prevent the browser’s default handling of the event (preventDefault).

Pressing a key fires "keydown" and "keyup" events. Pressing a mouse button fires "mousedown", "mouseup", and "click" events. Moving the mouse fires "mousemove" events. Touchscreen interaction will result in "touchstart", "touchmove", and "touchend" events.

Scrolling can be detected with the "scroll" event, and focus changes can be detected with the "focus" and "blur" events. When the document finishes loading, a "load" event fires on the window.







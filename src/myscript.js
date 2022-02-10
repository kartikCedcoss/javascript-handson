  // this is a in-line comment
/* this is 
my multi line comment*/ //Comment Your JavaScript Code
var  myName; //Declare JavaScript Variables
var a;
a=7; //Storing Values with the Assignment Operator
// Setup
var a;
a = 7;
var b;

// Only change code below this line
b=a; //Assigning the Value of One Variable to Another
var a=9;//Initializing Variables with the Assignment Operator

var myFirstName = "Kartik";
var myLastName = "Saini";//Declare String Variables
// Only change code below this line
var a=5;
var b=10;
var c="I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!"; //Understanding Uninitialized Variables
// Variable declarations
var studlyCapVar ;
var properCamelCase ;
var titleCaseOver ;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000; //Understanding Case Sensitivity in Variables     

let catName = "Oliver";
let catSound = "Meow!"; //Explore Differences Between the var and let Keywords

const FCC = "freeCodeCamp"; 
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact);  //Declare a Read-Only Variable with the const Keyword

const sum = 10 + 10;//Add Two Numbers with JavaScript

const difference = 45 - 33;//Subtract One Number from Another with JavaScript

const product = 8 * 10; //Multiply Two Numbers with JavaScript

const quotient = 66 / 33;//Divide One Number by Another with JavaScript

let myVar = 87;

// Only change code below this line
myVar++; // Increment a Number with JavaScript

let myVar = 11;

// Only change code below this line
myVar--;//Decrement a Number with JavaScript

const ourDecimal = 5.7;

// Only change code below this line
const myDecimal = 5.7;//Create Decimal Numbers with JavaScript

const product = 2.0 * 2.5;//Multiply Two Decimals with JavaScript
const quotient = 4.4 / 2.0; //  Divide One Decimal by Another with JavaScript

const remainder = 11 % 3;//Finding a Remainder in JavaScript
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c +=  7;//  Compound Assignment With Augmented Addition

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -=  6;
b -=  15;
c -=  1;// Compound Assignment With Augmented subtraction

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *=  5;
b *= 3 ;
c *= 10;//  Compound Assignment With Augmented Multiplication

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;//Compound Assignment With Augmented Division

const myStr = "I am a \"double quoted\" string inside \"double quotes.\""; //Escaping Literal Quotes in Strings

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';//Quoting Strings with Single Quotes

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Escape Sequences in Strings

const myStr = "This is the start." + " This is the end."; // Concatenating Strings with Plus Operator

let myStr ="This is the first sentence. " ;
myStr += "This is the second sentence.";//Concatenating Strings with the Plus Equals Operator

// Only change code below this line
const myName = "Kartik saini";
const myStr = "My name is "+myName+"and I am well!";//Constructing Strings with Variables

// Change code below this line
const someAdjective = "free code camp";
let myStr = "Learning to code is";
myStr += someAdjective;//Appending Variables to Strings

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;//Find the Length of a String

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Use Bracket Notation to Find the First Character in a String

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Understand String Immutability
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; //Use Bracket Notation to Find the Nth Character in a String

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length-1]; // Use Bracket Notation to Find the Last Character in a String

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length-2]; // Use Bracket Notation to Find the Nth-to-Last Character in a String

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The"+" "+ myAdjective + " " + myNoun+ " "+ myVerb +" " + myAdverb +"."; // Change this line
// Word Blanks

// Only change code below this line
const myArray = ["peanut butter",10];//Store Multiple Values in one Variable using JavaScript Arrays

// Only change code below this line
const myArray = [["bulls",23],["white Sox" ,45]];//Nest one Array within Another Array

const myArray = [50, 60, 70];
const myData = myArray[0];//    Access Array Data with Indexes

// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] =45;//Modify Array Data With Indexes

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];// Access Multi-Dimensional Arrays With Indexes
  // Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
 myArray.push(["dog",3])//Manipulate Arrays With push()

 // Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop();//Manipulate Arrays With pop()

// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray =myArray.shift();//Manipulate Arrays With shift()

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul",35]);//Manipulate Arrays With unshift()
const myList = [["choco",2],["bar",3],["me",4],["abhi",24],["kartik",22]];//Shopping List
function reusableFunction() {
    console.log("Hi World");
  }
   reusableFunction();//    Write Reusable JavaScript with Functions

   function functionWithArgs(a,b) {
    console.log(a+b);
  
  }
  functionWithArgs(1,2);
  functionWithArgs(7,9); //Passing Values to Functions with Arguments  

  function timesFive(a) {
  
    return (5*a);
  }
  timesFive(5);
  timesFive(2);
  timesFive(0);//Return a Value from a Function with Return

  // Declare the myGlobal variable below this line
let myGlobal=10;

function fun1() {
   oopsGlobal=5;
  // Assign 5 to oopsGlobal Here

}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}// Global Scope and Functions
function myLocalScope() {
    var myVar;
    // Only change code below this line
  
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar); //Local Scope and Functions

  // Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear="sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();//Global vs. Local Scope in Functions

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum=sum+5;
}

// Only change code above this line

addThree();
addFive();//Understanding Undefined Value returned from a Function

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed =processArg(7);// Assignment with a Returned Value
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    
    return arr.shift();
    // Only change code above this line
  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));//stand in line

  function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }// Understanding Boolean Values
  function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  
  if(wasThatTrue){
    return  "Yes, that was true";
  }
   return "No, that was false";
    // Only change code above this line
  
  }//Use Conditional Logic with If Statements

  // Setup
function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);//Comparison with the Equality Operator

  // Setup
function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);//Comparison with the Strict Equality Operator

  // Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");//Practice comparing different values
  // Setup
function testNotEqual(val) {
    if (val!=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);//Comparison with the Inequality Operator

  // Setup
function testStrictNotEqual(val) {
    if (val!==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);//Comparison with the Strict Inequality Operator

  function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
  
    if (val>10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);//Comparison with the Greater Than Operator

  function testGreaterOrEqual(val) {
    if (val>=20) {  // Change this line
      return "20 or Over";
    }
  
    if (val>=10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);//Comparison with the Greater Than Or Equal To Operator

  function testLessThan(val) {
    if (val<25) {  // Change this line
      return "Under 25";
    }
  
    if (val<55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);//  Comparison with the Less Than Operator

  function testLessOrEqual(val) {
    if (val<=12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val<=24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);//Comparison with the Less Than Or Equal To Operator
  function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >=25) {
      
        return "Yes";
      }
    
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);// Comparisons with the Logical And Operator
  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val<10 || val>20) {
      return "Outside";
    }
  
   
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);//Comparisons with the Logical Or Operator

  function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
    else {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);//Introducing Else Statements
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    }
    
  else{
    return "Between 5 and 10";
  }
    
  }
  
  testElseIf(7);//Introducing Else If Statements

  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);//Logical Order in If Else Statements
  function testSize(num) {
    // Only change code below this line
   if(num<5){
     return "Tiny";
   }
    else if(num<10){
     return "Small";
   }
  
   else if(num<15){
     return  "Medium";
   }
  
   else if(num<20){
     return "Large";
   }
  
   else {
     return "Huge";
   }
  
  
    return "Change Me";
    // Only change code above this line
  }
  
  testSize(7);//Chaining If Else Statements
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if(strokes==1){
  return "Hole-in-one!"
}
else if(strokes<= par -2){
  return "Eagle";
}
else if(strokes == par - 1){
  return "Birdie";
}
else if(strokes == par ){
  return "Par";
}
else if (strokes == par +1){
  return "Bogey";
}
else if (strokes == par + 2){
  return "Double Bogey";
}
else if (strokes >= par + 3){
  return "Go Home!";
} 
else {
  return "Change Me";
}
  
  // Only change code above this line
}

golfScore(5, 4);// Golf-code
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch(val){
    case 1:
    answer = "alpha";
    break;
    case 2:
    answer = "beta" ;
    break;
  
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
  
  
  }
  
  
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);  //Selecting from Many Options with Switch Statements

  function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case "a":
      answer ="apple";
      break;
      case 'b':
      answer ="bird";
      break;
      case 'c':
      answer ="cat";
      break;
      
      default:
      answer ="stuff"
  
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);//Adding a Default Option in Switch Statements

  function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
      answer ="Low";
      break ;
    case 4:
    case 5:
    case 6:
    answer ="Mid";
    break ;
    case 7:
    case 8:
    case 9:
    answer ="High"
    break;
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);//Multiple Identical Options in Switch Statements

  function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  
    switch(val){
      case "bob":
      answer= "Marley";
      break;
      case 42:
      answer="The Answer";
      break;
      case 1:
      answer= "There is no #1";
      break;
      case 99:
      answer="Missed me by this much!";
      break;
      case 7:
      answer="Ate Nine";
      break;
  
  
    }
    
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7);//Replacing If Else Chains with Switch

  function isLess(a, b) {
    // Only change code below this line
    return a<b;
    // Only change code above this line
  }
  
  isLess(10, 15);//Returning Boolean Values from Functions
  // Setup
function abTest(a, b) {
    // Only change code below this line
  
  if(a<0 || b<0){
    return undefined;
  }
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);//Return Early Pattern for Functions

  var count = 0;

  function cc(card) {
    switch(card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count--;
        break;
    }
  
    var holdbet = 'Hold'
    if (count > 0) {
      holdbet = 'Bet'
    }
  
    return count + " " + holdbet;
  
  }
  
  
  cc(2); cc('K'); cc(10); cc('K'); cc('A');//counting cards

  const myDog = {
    // Only change code below this line
  "name": "tiger",
  "legs": 4,
  "tails": 1,
  "friends": ["jacker","brad","don"]
  
    // Only change code above this line
  }; //Build JavaScript Objects

  // Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Accessing Object Properties with Dot Notation

   // Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];  //Accessing Object Properties with Bracket Notation

// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
var playerNumber = 16;  // Change this line
var player = testObj[playerNumber];   //Accessing Object Properties with Variables

const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name="Happy Coder";//Updating Object Properties


const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof";//Add New Properties to a JavaScript Object  

// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails;//Delete Properties from a JavaScript Object

function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}//Using Objects for Lookups  

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}//Testing Objects for Properties

onst myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
  "artist" : "Killi paul",
  "title" : "rosewood",
  "release_year": 2004,
  "formats" :["youtube","cd"],
  "gold" :true
  }
];//Manipulating Complex Objects

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];//Accessing Nested Objects

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];//Accessing Nested Arrays

// Setup
const myArray = [];

// Only change code below this line
let i=5;
while(i>=0){
  myArray.push(i);
  i--;
}//Iterate with JavaScript While Loops

// Setup
const myArray = [];

// Only change code below this line
for(let i=1; i<=5; i++){
  myArray.push(i)
}// Iterate with JavaScript For Loops

// Setup
const myArray = [];

// Only change code below this line
for(let i=1; i<=9; i+=2){
  myArray.push(i)
}//Iterate Odd Numbers With a For Loop

// Setup
const myArray = [];

// Only change code below this line
for(let i=9; i>0; i-=2){
  myArray.push(i)
}//Count Backwards With a For Loop

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
var total=0;
for(let i=0; i<myArr.length; i++)
{
  total+=myArr[i]
} //Iterate Through an Array with a For Loop

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    product *= arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);//Nesting For Loops

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 5)//Iterate with JavaScript Do...While Loops

function sum(arr, n) {
  // Only change code below this line
  if(n<=0){
    return 0;
  }
  else{
    return sum(arr,n-1)+ arr[n-1];

  }
  
  // Only change code above this line
}//Replace Loops using Recursion

function lookUpProfile(name, prop){
  for (var i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}//Profile Lookup

function randomFraction() {

  // Only change code below this line

  return Math.random();

  // Only change code above this line
}//Generate Random Fractions with JavaScript

function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random()*10);
}//Generate Random Whole Numbers with JavaScript

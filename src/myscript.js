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



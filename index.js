// inline comment
// multi-line comment
/* this
jsdsmass
smkmXNAxma
XKAMSAsamkaM
jaSNAjsjsx
xaSN A NHNM
*/
/* Data Types:
undefined, null, boolean, string, symbol, number and object */

var myName = "Michael";


myName = 8;

let ourName = "freeCodeCamp";

const pi = 3.14;

var a;
var b = 2;

a = 7;

b = a;

// Uninitialized Variables
/* var a;
 var b;
 var c; 
 */
 var a = 5;
 var b = 10;
 var c = "I am a";

a = a + 1
b = b + 5
c = c + "String"

/* Case Sensitivity in Variables
// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
*/

// Adding Numbers
var sum = 10 + 10;

// Subtracting Numbers
var difference = 45 - 33;

// Multiplying Numbers
var product = 8 * 10;

// Dividing Numbers
var product = 66 / 33;

// Incrementing Numbers
var myVar = 87;

// myVar = myVar + 1;
myVar++

// Decrementing Numbers
var myVar = 11;

// myVar = myVar - 1
myVar--;

/* Decimals */
var ourDecimal = 5.7;

var myDecimal = 0.009;

var product = 2.0 * 2.5;

var quotient = 4.4 / 2.0;

/* Finding a Remainder */
var remainder;
remainder = 11 % 3;

/* Compound Assignment with Augmented Addition, Subtraction, Multiplication and Division */
// Augmented Addition
var a = 3;
// a = a + 12;
a += 12;

// Augmented Subtraction
var a = 11;
// a = a - 6;
a -= 16;

// Augmented Multiplication
var a = 5;
// a = a * 5;
a *= 16;

// Augmented Division
var a = 48;
// a = a / 12;
a /= 12;

/* Declare String Variables */
var firstName = 'Alan';
var lastName = "Turing";

/* Escaping Literal Quotes in Strings */
var myStr = "I am a \"double quoted\" string inside \"double quotes\""

/* Quoting Strings with Single Quotes */
// var myStr = "<a href = \"https://www.google.com\" target=\"_blank\">Link</a>"
 var myStr = '<a href = "https://www.google.com" target="_blank">Link</a>'

 /* Using Backticks to allow for both single and double quotes within the string */
 var myStr = `'<a href = "https://www.google.com" target="_blank">Link</a>'`

 /*Escape Sequences in Strings */
 /***** 
  CODE OUTPUT
  \' single quote
  \" double quote
  \\ backslash
  \n newline
  \r carriage return
  \t tab
  \b backspace
  \f form feed
 *****/
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"

/* Concatenating Strings with Plus Operators */
var ourStr = "This is the start. " + "This is the end" 

/* Concatenating Strings with Plus Equals Operators */
var ourStr = "I come first ";
ourStr += "I come second";
console.log(ourStr);

/* Constructing Strings with Variables */
var ourIdentity = "freeCodeCamp";
var ourStr = "Hello our name is " + ourIdentity + ", how are you?"


/* Appending Variables to Strings */
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is";
ourStr += anAdjective;

/* Find Length of String */
var firstNameLength = 0;
var firstName = "Lovelace"

firstNameLength = firstName.length;

/* Bracket Notation to Find First Character in String */
var firstLetterOfLastName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0]

/* String Immutability */
var myStr = "Jello World";
// myStr[0] = "H";
myStr= "Hello World";

/* Bracket Notation to Find Nth Character in String */
var lastName = 'LoveLace'
var thirdLetterofLastName = lastName[2]

/* Bracket Notation to Find Nth to Last Character in String */
var firstName = "Didactic";
var lastLetterOfFirstName = firstName[firstName.length - 1];

/* Word Blanks */
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){

var result = "";
result += "The " + myAdjective + myNoun + myVerb + " to the store " + myAdverb;
return result;
  }
  console.log(wordBlanks("dog", "big", "ran", "quickly"));
  
  /* Store multiple values with arrays */
  var ourArray = ["John", 23];

  var myArray = ["Justin", 1];

  /* Nested Arrays */
  var ourArray = [["the universe", 16], ["Manchester", 123456]]; 
  var myArray = [["Bulls", 23], ["Lakers", 24]];

  /* Access Array Data with Indexes */
  var ourArray = [50,60,70];
  var ourData = ourArray[0];

  /* Modify Array Data with Indexes */
  var ourArray =[18, 64, 99];
  ourArray[1] = 45;

  /* Access Multi-Dimensional Arrays with Indexes */
  var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13, 14]];
  var myData = myArray[2][1];

  /* Manipulate Arrays with push */
  var ourArray = ["Stimpsom","J","cat"];
  ourArray.push(["happy","joy"])
  console.log(ourArray.push)

  /* Manipulate Arrays with pop */
  var myArray = [["John", 23], ["cat", 2]];
  var removedFromMyArray = myArray.pop()

  
  /* Manipulate Arrays with shift */
  var myArray = [["John", 23], ["dog", 3]];
  var removedFromMyArray = myArray.shift()

   /* Manipulate Arrays with unshift */
   var myArray = [["John", 23], ["dog", 3]];
  myArray.shift()
    myArray.unshift(["Paul", 35]);

    /* Write Reusable Code with Functions */
    function ourReusableFunction() {
      console.log("Heyya, World");
    }
     ourReusableFunction();

      /* Passing Values to Functions with Arguments */
      function ourFunctionWithArgs(a,b) {
        console.log(a - b);
      } 
      ourFunctionWithArgs(10, 5);
  
      /* Global Scope and Functions */
      var myGlobal = 10;

      function fun1() {
        oopsGlobal = 5;
      }

      function fun2() {
        var output = "";
        if (typeof myGlobal != "undefined") {
          output += "myGlobal:" + myGlobal;
        }
        if (typeof oopsGlobal != "undefined") {
          output += "oopsGlobal:" + oopsGlobal;
        }
        console.log(output)
      }
      fun1()
      fun2()

      /* Local Scope and Functions */
      function myLocalScope() {
        var myVar = 5;
        console.log(myVar);
      }
      myLocalScope()

      console.log(myVar)

      /* Global vs Local Scope in Functions */
        var outerWear = "T-shirt";

        function myOutfit()
        {
          var outerWear 
          return outerWear;
        }

        console.log(myOutfit());

        /* Return a Value from a Function with Return Statement */
        function minusSeven(num) {
          return num -7;
        }
        console.log(minusSeven(10))

        /* Understanding Undefined Value Returned from a Function */
    var sum = 0;
    function addThree() {
      sum = sum + 7;
    }
    console.log(addThree)

    function addFive() {
      sum += 5;  
    }
    console.log(addFive)
    
    function addFive() {
      sum += 5;  
    }
    console.log(addFive)
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
result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
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

    /* Assignment with a Returned Value */
    var changed = 0;

    function change(num) {
      return (num + 5) / 3
    }
    changed = change(10)

    /* Stand in Line */
    function nextInLine(arr, item) {
      arr.push(item)
      return arr.shift();
    }
    var testArr =[1,2,3,4,5]

    console.log("Before:" + JSON.stringify(testArr));
    console.log(nextInLine(testArr, 6));
    console.log("After:" + JSON.stringify(testArr))

    /* Boolean Values */
    function welcomeToBoolean(){
      return true
    }

    /* Use Conditional Logic with If Statement */
    function ourTrueorFalse(isItTrue){
      if(isItTrue) {
        return "Yes, it's true";
      }
      return "No, it's false"; 
    }
    console.log(ourTrueorFalse(true))

    /* Comparison with Equality Operator */
    function testEqual(val) {
      if (val == 12) {
        return "Equal"
      }
      return "Not Equal"
    }

    console.log(testEqual(10));

     /* Comparison with Strict Equality Operator */
     function testStrict(val) {
      if (val === 7) {
        return "Equal";
      }
      return "Not Equal";
    }
    console.log(testStrict(7));

    /* 
    3 === 3
    3 === '3' will not equal for strict equality operator but will equal for equality operator(==)
    */

    /* Practice Comparing Different Values with both Strict Equality and Equality Operators */
    function compareEquality(a, b) {
      if (a == b) {
        return "Equal"
      }
      return "Not Equal"
    }
    console.log(compareEquality(10, "10"))

    function compareEquality(a, b) {
      if (a === b) {
        return "Equal";
      }
      return "Not Equal";
    }
    console.log(compareEquality(10, "10"));

    /* Comparison with the inequality operator */
    function testNotEqual(val) {
      if (val != 99) {
        return "Not Equal"
      }
      return "Equal"
       }
        console.log(testNotEqual(10))

         /* Comparison with the strict inequality operator */
         function testStrictNotEqual(val) {
          if (val !== "17") {
            return "Not Equal";
          }
          return "Equal";
           }
            console.log(testStrictNotEqual("10"))

            /* Comparison with the logical And operator */
         function testLogicalAnd(val) {
          if (val > 100) {
            return "Over 100";
          }
          if (val > 10) {
            return "     Over 10";
          }
          return "10 or Under";
           }
            console.log(testLogicalAnd("10"))

            /* Comparison with the logical Or operator */
            function testLogicalOr(val) {
              if (val < 10 || val > 20 ) {
                return "Outside"
              }
              return "Inside"
            }
            testLogicalOr(15)

              // Else Statements
              function testElse(val) {
                var result = ""

                
                if (val > 5) {
                  result ="Bigger than 5";
                }
                else {
                  result ="5 0r Smaller";
                }
                return result;
              }
              console.log(testElse(4))
             
            // Else If Statement
                function testElseIf(val) {
                  if (val > 10) {
                    return "Bigger than 10";
                  }
                  else  if (val < 5) { 
                    return "5 0r Smaller";
                  } else{ 
                    return "Between 5 and 10";
                  }
                  
              }
              console.log(testElseIf(7))

              /* Logical Order in If Else Statements */
        function orderMyLogic(val) {
          if (val < 5) {
            return "Less than 5";
          } else if (val < 10) {
            return "Less than 10";
          } else {
            return "Greater than or equal to 10"
          }
        } 
        console.log(orderMyLogic(3))

        
        /* Golf Code */
        var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"]
        function golfScore(par, strokes) {
          if (strokes == 1) {
            return names[0]
          } else if (strokes <= par - 2) {
            return names[1]
          } else if (strokes == par - 1) {
            return names[2]
          } else if (strokes == par) {
            return names[3]
          } else if (strokes == par + 1) {
            return names[4]
          } else if (strokes == par + 2) {
            return names[5]
          } else if (strokes >= par + 3) {
            return names[6]
          }
        }
        console.log(golfScore(5,4))

        function caseInSwitch(val) {
          var answer 
          switch(val) {
            case 1:
              answer ="alpha";
              break;
              case 2:
              answer ="beta";
              break;
              case 3:
              answer ="gamma";
              break;
              case 4:
              answer ="delta";
              break;
          }
          return answer;
        }
        console.log(caseInSwitch(4));

        /* Default Option in Switch Statements */
        function switchOfStuff(val) {
          var answer = "" 
          switch(val) {
            case "a":
              answer ="apple";
              break;
              case "b":
              answer ="bird";
              break;
              case "c":
              answer ="cat";
              break;
              default:
              answer ="stuff";
              break;
          }
          return answer;
        }
        console.log(switchOfStuff(""));

        /* Multiple Identical Options in Switch Statements */
        function sequentialSizes(val) {
          var answer = " "
          switch(val) {
            case 1:
            case 2:
            case 3:
              answer = "Low";
              break;
              case 4:
              case 5:
              case 6:
                answer ="Mid";
                break;
                case 7:
                case 8:
                case 9:
              answer = "High";
              break;
          }
          return answer;
        }
        console.log(sequentialSizes(5))

         /* Returning Boolean Values from Functions */
       function isLess(a,b) {
        return a < b;
      }
      console.log(isLess(10,15));

      /* Returning Early Pattern from Functions */
      function abTest(a, b) {
       if (a < 0 || b < 0) {
         return undefined
       }

       return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
      }
      console.log(abTest(2,2))

        /* Building Javascript Objects */
       var ourDog = {
        "name" : "Camper",
        "legs" : 4,
        "tails" : 1,
        "friends" : ["Everyone!"]
       };

       /* Accessing Object Properties with Dot Notation */
       var testObj = {
        "hat" :"ballcap",
        "shirt" :"jersey",
        "shoes" : "cleats"
 
       }
       var hatValue = testObj.hat
       console.log(hatValue)
        
       /* Accessing Object Properties with Bracket Notation */
       var testObj = {
        "an entree" : "hamburger",
        "my side" : "veggies",
        "the drink" : "water" 
       };

       var entreeValue = testObj["an entree"]
       var drinkValue = testObj['the drink']

        console.log(drinkValue)
        console.log(entreeValue)

       /* Accessing Object Properties with Variables */
       var testObj = {
        12 : "Namath",
        16 : "Montana",
        19 : "Unitas"
       };

       var playerNumber = 16;
       var player = testObj[playerNumber];    
       
       console.log(player)

        /* Updating Object Properties */
       var ourDog = {
        "name" : "Camper",
        "legs" : 4,
        "tails" : 1,
        "friends" : ["Everyone!"]
        };
        ourDog.Name = "Happy Camper"
        console.log(ourDog.Name)

       /* Adding New properties to an Object */
        var ourDog = {
        "name" : "Camper",
        "legs" : 4,
        "tails" : 1,
        "friends" : ["Everyone!"]
       };
       ourDog.Bark = "Woof"

       var myDog = {
        "name" : "Coder",
        "legs" : 4,
        "tails" : 1,
        "friends" : ["freeCodeCamp Campers"]
       };
       myDog["bark"] = "Bow wow"
       
       /* Deleting Properties from our Objects */
       var ourDog = {
        "name" : "Camper",
        "legs" : 4,
        "tails" : 1,
        "friends" : ["Everyone!"],
        "bark" : "Woof"
       };
       delete ourDog.Bark 

       /* Testing Objects for Properties */
       var myObj = {
        gift : "pony",
        pet : "kitten",
        bed : "sleigh"
       };

       function checkObj(checkProp) {
        if (myObj.hasOwnProperty(checkProp)) {
          return myObj[checkProp]
        } else {
          return "Not Found"
        }
       }
      console.log(checkObj("gift")); 

      /* Manipulatiing Complex Objects */
      var myMusic = [
        {
          "artist" : "Billy Joel",
          "title" : "Piano Man",
          "release_year": 1973,
          "formats": [
            "CD",
            "Youtube Video"
          ],
          "gold": true          
        },
        {
          "artist": "Michael Ebube",
          "title": "Cereal Man" 
        }
      ]

      /* Accessing Nested Objects */ 
      var myStorage = {
        "car": {
          "inside": {
            "glove box": "maps",
            "passenger Seat": "crumbs"
          },
          "outside": {
            "trunk": "jack"
          }
        }
      };

      var gloveBoxContents = myStorage.car.inside["glove box"];
      console.log(gloveBoxContents)

      /* Accessing Nested Arrays */
      var myPlants = [
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
            "iroko",
            "pine",
            "mahogany"
          ]
        }
          ];
          var secondTree = myPlants[1].list[1]
          console.log(secondTree)

          /* Record Collection */
           var collection = {
            "2548": {
              "album": "Slippery When Wet",
              "artist": "Bon Jovi",
              "tracks": [
                "Let it Rock",
                "You Give Love A Bad Name"
              ]
            },
            "2468": {
              "album": "1999",
              "artist": "Prince",
              "tracks": [
                "1999",
                "Little Red Corvette"
            ]
            },
            "1245": {
              "artist": "Wizkid",
              "tracks": [ ]
            },
            "5439": {
              "album": "ABBA Gold",
            }
          };
          var collectionCopy = JSON.parse  (JSON.stringify(collection));
          
          function updateRecords(id, prop, value)  {
            if (value === "") {
              delete collection[id][prop]
            } else if (prop === "tracks") {
              collection[id][prop] = collection[id][prop] || []
              collection[id][prop].push(value)
            }
            else {
              collection[id][prop] = value;
            }


            return collection;
          };
        
          console.log(updateRecords(5439,"artist", "ABBA"))
          updateRecords(2468, "tracks", "test")

          /* Iterate with While Loops */
            var myArray = [];

            var i = 0;
            while(i < 5) {
              myArray.push(i);
              i = i+1;
            }

            console.log(myArray);


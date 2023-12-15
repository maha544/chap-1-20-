//Chapter 1 (Alerts)
// Q 1

//alert("Enter Your First Name");
//alert("Enter Your Last Name");
//alert("Enter Your Email");
//alert("Enter Your Phone Number");
//alert("Enter Your Password");

//Q 2

//alert("You're learning JavaScript!");

//Q 3

//alert("Enjoy the little things in life!");

//Chapter 2 (Variables for string)

//Q 1

var myFavColor = "purple";

//Q 2

var myFriendName;
myFriendName = "Mehwish";

//Q 3

var teamName = "Binary Team";
//alert("Our team name is: " + teamName);

//Q 4

var bestMan = "Charlie";
bestMan = "Ruth B";

//Chapter 3 (Variables for numbers)

//Q 1

var caseQty;

//Q 2

caseQty = 144;

//Q 3

//var num = "9";
//var result = +num;
//console.log(result);

//Q 4

var numberA;
numberA = 4 + 6;
console.log(numberA);

//Q 5

var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
console.log(orderTotal);

//Q 6

var numberB = 40;
var totalNum = numberB + 5 ;
console.log(totalNum);

//Chapter 4 (Variable names Legal and Illegal)

//Q 1

//var product cost = 3.45;
var productCost = 3.45;

//Q 2

//var Nameofband;

var nameOfBand;

//Q 3

var amountOfBill = 1050;

//Q 4

var myFullName = "Maha Javaid";

//Q 5

// var name_2; (legal)
// var @name;  (illegal)
//var name22;   (legal)
// var 2name;  (illegal)
// var myName;  (legal)

//Chapter 5 (Math Expression I)

//Q 1

//Ans : Modulo Operator (%) it gives us a remainder.
var remainder = 10 % 3;
console.log(remainder);

//Q 2

//var num = 20 % 6;
//console.log(num);
//Ans is 2.


//Q 3

var largeNumber = 1000 * 2000;
//console.log(largeNumber);


//Q 4

var subA = 10;
var subB = 3 ;
var minus = subA - subB ;
console.log(minus);


//Q 5

var dividend = 17;
var divisor = 5;

var remainderResult = dividend % divisor;
console.log(remainderResult);

//Q 6

var product = 4 * 6 ;
//alert(product);


//Chapter 6 (Math Expression II)

//Q 1

//x += 1;
//x++;

//Q 2

var a = 100;

b = --a;
console.log(b);

//Q 3


var x = 50;
var y = x++; //it is post-increment
//Ans is 50.
console.log(y);

//Q 4

var u = 50;
var z = --u; // it is pre-decrement
//Ans is 49.
console.log(u);

//Q 5

//var num = 5;
//var newNum = num--;

//console.log(num);    // Ans: 4
//console.log(newNum); // Ans: 5

//Q 6

var add = 5;
var addMore = add++;

console.log(add);
console.log(addMore);

//Q 7

var value = 46;
value ++;
//alert(value);

//Chapter 7 (Math Expression III)

//Q 1

//var calculatedNum = 2 + (2 * 6);
//ANS is 14.
//console.log(calculatedNum);

//Q 2

//var calculatedNum = (2 + 2) * 6;
//Ans is 24.
//console.log(calculatedNum);

//Q 3

//var calculatedNum = (2 + 2) * (4 + 2);
//Ans is 24
//console.log(calculatedNum);

//Q 4

//var calculatedNum = ((2 + 2) * 4) + 2;
//Ans is 18
//console.log(calculatedNum);

//Q 5
//var par = (2 + 2) * (4 + 10);
//console.log(par);


//Q 6

//var par = (2 + (2 * 4)) + 10;
//console.log(par);

//Q 7

var val = 4 / (2 * 4);
//Ans is 0.5.
console.log(val);



//Chapter 8 (Concatenating Text-Strings)

//Q 1

//var num = "2" + "2";
//console.log(num);

//Q 2

//var message = "Hello, " + "Dolly";
//alert(message);

//Q 3

var num = "33" + 3;
//alert(num);


//Q 4

var part1 = "Pakistan ";
var part2 = "Zindabad";
var fullMessage = part1 + part2;

//alert(fullMessage);

//Q 5 

var stringValue = "Hello, " + 123;
//alert(stringValue);

//Q 6 

var a = "Good ";
var b = "Morning";
var c = a + b;
console.log(c);


//Chapter 9 (Prompts)

//Q 1

//var firstName = prompt("Enter Your First Name");

//Q 2

//var country = prompt("Country?" , "China");

//Q 3

//var yourName = prompt("Enter Your Name");

//Q 4

//var userInput = prompt("Please enter your favorite color:", "Black");

//Q 5

//var a = "Good ";
//var b = "Morning";
//var c = prompt(a , b);

//Q 6

//var a =prompt("how was your day?");
//alert (a);

//Chapter 10 (if statments)

//Q 1
var city = "Karachi"
if (city === "Karachi") {
console.log("The City OF Lights");
}

//Q 2

if (x === y) {
    var z = prompt("Enter the value of z?");
    if (z === "something") {
      alert("You entered 'something'.");
    } else {
      alert("You entered a different value.");
    }
  }

//Q 3

var zipCode = "10010";
if (zipCode == "10010"){
    alert("Karachi");
}else{
    alert("Please write correct city");
}

//Q 4

var x = 1; // Assume x has some initial value

if (x === 1) {
  x = 2;
}

console.log(x); // Check the new value of x

//Chapter 11 (Comparison Operators)
  
//Q 1

var color = "red";

if (color !== "red"){
    console.log("The color is not red.")
}

//Q 2

var val1 = 10;
var val2 = 5;

if (val1 >= val2) {
  console.log("val1 is greater than val2");
}

//Q 3

var myNumber = 5;

if (myNumber !== 10) {
  myNumber = 15;
}

console.log(myNumber);

//Q 4

var numberToTest = 7;
var differentNumber = 10;

if (numberToTest !== differentNumber) {
  alert("Congratulations! The numbers are unequal.");
}

//Q 5

var predefineName = "maha";
var enterName = prompt("What's Your First Name?");

if (enterName !== predefineName){
    alert("No match");
}

//Chapter 12 (if...else and else if statements)

//Q 1

var numberToTest = 7;
var differentNumber = 10;

if (numberToTest >= differentNumber) {
  alert("The numbers are equal.");
}else {
    alert("The numbers are unequal.");
}

//Q 2

// Get marks from the user
var marks = parseFloat(prompt("Enter your marks:"));

if (!isNaN(marks)) {
  // percentage
  var percentage = (marks / 100) * 100;

  // grade
  if (percentage >= 90) {
    alert("Your percentage is " + percentage.toFixed(2) + "%. Grade: A");
  } else if (percentage >= 80) {
    alert("Your percentage is " + percentage.toFixed(2) + "%. Grade: B");
  } else if (percentage >= 70) {
    alert("Your percentage is " + percentage.toFixed(2) + "%. Grade: C");
  } else if (percentage >= 60) {
    alert("Your percentage is " + percentage.toFixed(2) + "%. Grade: D");
  } else {
    alert("Your percentage is " + percentage.toFixed(2) + "%. Grade: F");
  }
} else {
  alert("Please enter a valid number for marks.");
}

//Q 3

if (a === 10) {
  alert("a is 10");
 }else {
  alert("The correct value of a is 10");
 }

//Q 4

var enterCity = prompt("Enter city name");

if (enterCity === "karachi"){
  alert("It is Karachi");
}else if (enterCity === "lahore"){
  alert("It is Lahore");
} else {
  alert("invalid info");
}


//Chapter 13 (Testing sets of conditions)

//Q 1

if (a == b && c == d){
  console.log("correct");
}

//Q 2

//if (a == b || c !== d){
 // console.log("valid");
//}

//Q 3


var name1 = "hamza";
var name2 = "arsalan";
var age1 = 60;

if ((name1 === "Hamza" || name2 === "Arsalan") && age1 < 60) {
  console.log("ok");
}

//Q 4

var numOne = 10;
var numTwo = 24;

if (numOne < numTwo || numOne > numTwo){
  alert("ok");
}

//Q 5

var myFistrName = "maha";
var lastName  =  "javed";

var forFirstName = prompt("What's your First Name?");
var forLastName = prompt("What's your Last Name?");

if (forFirstName === myFistrName && forLastName === lastName){
  alert("valid");
}

//Chapter 14 (If statements nested)

//Q 1

//if (pass !== "") {
  //if (pass.length <= 5) {
    //alert("Password must be greater than 5");
  //} else {
    //alert("OK");
  //}
//}

//Q 2

var a = 1;
var c = "Max";

if (a === 1) {
  if (c === "Max") {
    alert("OK");
  }
}

//Q 3

if (a && c){
  alert("ok");
}

//Q 4

var appA = 50;
var appB = 50;

if (appA === appB){
   if (appA <= appB){
    alert("ok");
   }
}

//Chapter 15 (Array I)

//Q 1

//var arr = [];

//Q 2

//var arr = ["Pie"];

//Q 3

//var alphabet = ["h","i","j","k"];

//alert(alphabet[2]);

//Q 4

//var alphabet=["h","i","j","k","l","m", "n", "o"];

//console.log(alphabet.length);

//Q 5

//var arr = ["first element"];
//arr [1] = "second element";
//alert(arr[1]);


//Chapter 16 (Array II)

//Q 1

//var arr = ["tie"];
//arr.push("neck");
//alert(arr[arr.length - 1]);

//Q 2

//var Alphabet=["h","i","j","k"];

//Alphabet.pop();
//console.log(Alphabet);

//Q 3

//var Alphabet=["h","i","j","k"];

//Alphabet.push(20);

//console.log(Alphabet);


//Chapter 16 (Array III)


//Q 1

//var sizes = ["S", "M", "XL", "XXL", "XXXL"];
//sizes.shift( 0 );
//console.log(sizes);

//Q 2

//var sizes = ["S", "M", "XL", "XXL", "XXXL"];
//sizes.unshift("A" , "B" , "C");
//console.log(sizes);

//Q 3

//var arr1 = ["lot"];
//arr1.unshift = ("top");
//alert(arr1[0]);

//Q 4

//var sizes = ["S", "M", "XL", "XXL", "XXXL"];

//var indexOfM = sizes.indexOf("M");
//sizes.splice(indexOfM + 1, 0, "L");// 0 is for no removal

//console.log(sizes);

//Q 5

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice( 0 , 3);
console.log(regSizes);

//Q 6

//var pets = ["dog", "cat", "ox", "duck", "frog"];
//var rem = pets.splice(1 , 3 , "snake", "dragon", "rat" );
//console.log(pets);

//Q 7

//var pets = ["dog", "cat", "ox", "duck", "frog"];
//var rem = pets.splice( 1 , 2);
//console.log(pets);

//Q 8

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets =pets.slice(3,5);
console.log(reducedPets);

//Chapter 17 - 20 (for Loops)

//Q 1

for (var i=0 ; i <10 ; i++){
   console.log(i);
}

//Q 2

for (var i=1 ; i <= 12 ; i++){
  console.log(i);
}

//Q 3

for (var i = 0 ; i <= 4 ; i++){

}

//Q 4

//for (var count = 0; count < 100; count++) {
  //console.log(count);
//}

//Q 5

for (var count = 3; count > 0; count--) {
  console.log(count);
}

//Q 6

var arr = [1, 2, 3, 4, 5];
var numberOfElements = arr.length;

console.log("Number of elements in the array:", numberOfElements);

//Q7

var flag = true;
console.log(flag);

//Q 8

var pets = ["dog", "cat", "ox", "duck", "frog"];

for (var i=0 ; i < pets.length ; i++){
  console.log(i , pets[i]);
}

//Q 9

for (var i = 0; i < 10; i++) {
  if (i === 1) {
    alert("Counter value on the second iteration: " + i);
    break;
  }
}

//Q 10

var arr = ["jack" ,"bar" ,"heal" ,"lili" ,"smith" ];

var userName = prompt("Enter your first name.");
for (var i = 0; i < arr.length ; i++){
  if (arr.includes(userName)){
    alert("Enter");
    break;
  }else {
    alert("Please write user name");
  }
}


//Q 11

var matchFound = false;
var list = ["item1", "item2", "item3"];

var userInput = prompt("Enter something:");

for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
  alert("Match found");
  matchFound = true;
   break;
  }
}
if (!matchFound) {
  alert("No match found");
}


//Q 12

var firstArr = ["a" ,"b", "c", "d" , "e" , "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length ; i++){
  for (var j = 0; j < secondArr.length ; j++){
         console.log(firstArr[i] , secondArr[j]);
   }
}
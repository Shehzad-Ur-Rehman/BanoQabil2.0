// console.log("Hello Students");

//Methods
// alert()
// prompt()

// Create Function

// Normal Function

// function abc() {
//   var abc = "name";
//   console.log("abc==>", abc);
// }

// abc() // Function Call

// Create Function

// Arrow Function (ES-6)

// const abc = () => {
//   var abc = "name";
//   console.log("abc==>", abc);
// };

// abc(); // Function Call

// Create loops

// For Loop

// for(statement, condition, increment){
//     //Block
// }

//statement condition increment
// for (var i = 1; i <= 100; i++) {
//   console.log("Loop==>", i);
// }

// var text = "Hello Students";

// for (var i = 1; i <= 5; i++) {
//   console.log("Loop==>", i, text);
// }

// var cities = ["karachi", "hyderabad", "Sukkur", "Multan", "Islamabad"];
// for (var i = 0; i < cities.length ; i++) {
//   console.log("Cities==>", cities[i]);
// }

// Table Print
// var table = 2; //static value
// for (var i = 1; i <= 10; i++) {
//   console.log("Table ==>", table + "X" + i + "=" + table * i);
// }

// Flag

// var cities = ["karachi", "hyderabad", "Sukkur", "Multan", "Islamabad"];
// var flag = false;
// for (var i = 0; i < cities.length; i++) {
//   if (cities[i] == "Multan") {
//     flag = true;
//   }
// }

// if (flag) {
//   console.log("Found");
// } else {
//   console.log("Not Found");
// }

// Break

// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   if (i === 4) {
//     break;
//   }
// }

// Palindrome

// civic;
// madam;
// radar;
// level;
// refer;













// function isPalindrome(str) {
//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     const reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
// }


// const userInput = prompt("Enter a string:");
// if (userInput !== null) {
//     const result = isPalindrome(userInput);
//     console.log(`"${userInput}" is a palindrome: ${result}`);
// } else {
//     console.log("User canceled the input.");
// };


// table = prompt("Enter any Number")
// for (var i = 1; i <= 10; i++){
//     console.log(table + "X" + i + "=" + table * i)
// } 


// table = prompt("Enter any number")
// for (var i = 1; i <= 10; i++){
//     console.log(table + " * " + i + " = " + table * i)
// };



// var tableNumber = parseInt(prompt("Enter the number for multiplication table:"));
// var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// // Check if the inputs are valid
// if (isNaN(tableNumber) || isNaN(tableLength)) {
//     document.write("Invalid input. Please enter valid numbers.");
// } else {
//     // Display the multiplication table
//     document.write("<h2>Multiplication Table for " + tableNumber + ":</h2>");
//     document.write("<ul>");

//     for (var i = 1; i <= tableLength; i++) {
//         var result = tableNumber * i;
//         document.write("<li>" + tableNumber + " x " + i + " = " + result + "</li>");
//     }

//     document.write("</ul>");
// };


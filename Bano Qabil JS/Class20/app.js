// alert("Hello Students");

// Example switch statement
// var day = prompt("What's day is today");
// switch (day) {
//   case "Monday":
//     console.log("Today is Monday");
//     break;
//   case "Tuesday":
//     console.log("Today is Tuesday");
//     break;
//   default:
//     console.log("Today is neither Monday nor Tuesday");
//     break;
// }

// Example ternary operator
// var age = prompt("Your age");
// var message =
//   age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";
// console.log(message);

// Example handling events in the DOM
// var element = document.getElementById("my-element");
// element.addEventListener("click", function () {
//   console.log("Element clicked!");
// });

// element.addEventListener("keydown", function (event) {
//   console.log("Key pressed: " + event.key);
// });

// SetTimeOut (For Delay)

// function abc() {
//   console.log("two");
// }
// console.log("one");
// setTimeout(abc, 5000);
// console.log("three");

// Text Expand (See More / See Less)

// function expandText() {
//   var shortText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
//   var text =
//     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus sed labore tempore quaerat, cupiditate porro molestiae pariatur possimus facere cum cumque, eaque neque veritatis placeat minima nemo hic, sint explicabo!";
//   var para = document.getElementById("para");
//   var link = document.getElementById("link");

//   if (link.innerHTML === "See more") {
//     para.innerHTML = text;
//     link.innerHTML = "See Less";
//   } else {
//     para.innerHTML = shortText;
//     link.innerHTML = "See more";
//   }
// }

// Promise

// let promise = new Promise(function (resolve, reject) {
//     const x = "shahzadrehman560@gmail.com";
//     const y = "shahzadrehman560@gmail.com";
//     if (x === y) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
  
//   promise
//     .then(function () {
//       console.log("Success, You are a Login");
//     })
//     .catch(function () {
//       console.log("Some error has occurred");
//     });
  
  // Callback
  
  // The add() function is
  // called with arguments a, b
  // and callback, callback
  // will be executed just
  // after ending of add() function
  function add(a, b, callback) {
    console.log(`The sum of ${a} 
    and ${b} is ${a + b}`);
    callback();
  }
  
  // The disp() function is called just
  // after the ending of add() function
  function disp() {
    console.log(`This must be printed
     after addition`);
  }
  
  // // Calling add() function
  add(5, 6, disp);
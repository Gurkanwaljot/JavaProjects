"use strict";

//document.getElementById("count-el").innerText = 5
// let count = 5
// count += 1
// console.log(count)
// inititalize the count 0
// listen for the clicks on the increment button
// increment the count variable when the button is clicked
// change thr count-el to reflect the  new count
var countEl = document.getElementById("count-el");
var count = 0;

function increment() {
  count += 1;
  console.log(count);
}

increment();
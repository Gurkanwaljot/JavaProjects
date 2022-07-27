// let errorEvent = document.getElementById("error")

// function errorLog(){
//     console.log("Button Clicked")
//     errorEvent.textContent = "Something went wrong please try again"
// }
// errorLog()
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let Sum =  document.getElementById("sum-el")
function Addition(){
    Sum.textContent = num1 + num2
    console.log(Sum)
}
Addition()

function Subtraction(){
    Sum.textContent = "Sum: " +  num1 - num2
    console.log(Sum)
}
Subtraction()
function Division(){
    Sum.textContent = "Sum: " + num1 / num2
    console.log(Sum)
}
Division()
function Multiplication(){
    Sum.textContent = "Sum: " + num1 * num2
    console.log(Sum)
}
Multiplication()
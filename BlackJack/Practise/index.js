let person = {
    Name: "Gurkanwaljot Singh Brar",
    Age: 20,
    Country: "Canada"
}

function logData(){
    let personInfo= person.Name + " is " + person.Age + " and lives in " + person.Country + "."
    console.log(personInfo)
}
logData()

let age = 15
if(age < 6){
    console.log("Free!")
} else if( age < 18){
    console.log("Child Discount")
} else if( age < 27){
    console.log("Student Discount")
} else if( age <67){
    console.log("Full Price")
} else{
    console.log("Senior Citizen Discount")
}

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

for(let i = 0 ; i < largeCountries.length; i++){
    console.log(largeCountries[i])
}

let largeCountries1 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

largeCountries1.pop()
largeCountries1.push("Pakistan")
console.log(largeCountries1)

largeCountries1.shift()
largeCountries1.unshift("China")
console.log(largeCountries1)

let dayOfMonth = 13
let weekDay = "Friday"

if(dayOfMonth === 13 && weekDay == 'Friday'){
    console.log("OHHHH TERI NU!!!!!!!!!")
}

let hands = ["rock", "paper", "scissor"]
function randomHands(){
    let number = Math.floor(Math.random() * 3) 
    console.log(hands[number])
}
randomHands()

let fruit = ["Apples", "Oranges", "Apples", "Oranges"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function appleArea(){
    appleShelf.textContent = fruit[0] + " " + fruit[2]
}

appleArea()

function orangeArea(){
    orangeShelf.textContent = fruit[1] + " " + fruit[3]
}
orangeArea()
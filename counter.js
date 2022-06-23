let countEl = document.getElementById("count-el")
let click = document.getElementById("increment-btn")
let saveEl = document.getElementById("save-el")


// let myAge;
// myAge = 22;
// console.log(myAge);

// // basic mathematical operation

// let firstBatch = 5
// let secondBatch = 7

// let coun = firstBatch +secondBatch
// console.log(coun)

// let humanDogRatio = 7

// let MyDogAge = humanDogRatio * myAge
// console.log(MyDogAge)

// // reassignning and incrementing

// let counts = 21
// counts = 22
// console.log(counts)

// let read = 5
// read = read + 1
// console.log(read)

// let bonusPoints = 50
// bonusPoints += 50
// console.log(bonusPoints)
// bonusPoints -= 75
// console.log(bonusPoints)
// bonusPoints += 45
// console.log(bonusPoints)

// // adding a button 

// //  using function to write less code

// // function track(){
// //    console.log(5)
// //    console.log(4)
// //    console.log(3)
// //    console.log(2)
// //    console.log(1)
// // }

// // track()


// function countDown(){
//     i = 6
//     while (i > 0){
//         i--
//         console.log(i)
//     }
// }
// countDown()
// // creating a function

// function val(){
//     console.log(42)
// }
// val()

// //  a function that logs the sum of numbers

// function sum(a, b, c){
//     value = a + b +c
//     console.log(value)
// }
// sum(80, 90, 20)

// var x = 34
// var y = 33
// var z = 36

// function laps(){
//     total = x + y + z
//     console.log(total)
// }
// laps()

//  a function that increments
// let lapscompleted = 0
// function incrementLap(){
    
//     while (lapscompleted < 3){
//         lapscompleted = lapscompleted + 1
//         console.log(lapscompleted)
//     }
    
    
// }
// incrementLap()

// increment on click
let count = 0
function increment(){
    // console.log("clicked")
    count++
    // console.log(count)
    countEl.innerHTML = count
}
// console.log(countEl)

//  The document object Model

// create a save button

function save(){
    let countStr = count + "- "
    saveEl.textContent += countStr
}

// what is a string

// var username = "lokson"
// var message = ", You have three new notifications"

// console.log(username + message)

// // log a greeting to the console

// var name = "lokson"
// var greeting = "Hi, my name is "

// var myGreeting = greeting + name
// console.log(myGreeting)

// //  strings vs numbers

// var name = 22
// var greeting = "Hi, my name is "
// var mygreeting = greeting + name
// console.log(mygreeting) // "Hi, my name is 42" will be int he console because string always overide number

// var a = 4
// var b = "10"
// console.log(a + b) // "410" will be printed on the console

// var a = "30"
// var b = "20"
// console.log(a + b) // "3020" will be printed on the console

//  render a welcome message

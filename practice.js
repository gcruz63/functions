// const calculateAgeInDogYears = (ageOfPerson) => {
//     const ageInDogYears = ageOfPerson / 7

//     return ageInDogYears
// }

// const dogAge = calculateAgeInDogYears(45)
// console.log(dogAge)

/////////////////////////////////////////////////////////////////////////////////////
//  Practice: Best in Show
// Write a function that takes a string of a dog breed as an argument (like 'border collie')

// const dogs = (dogBreeds) => {
    
// }

// Have the function return the value of "My favorite dog breed is schnauzer" if an argument of "schnauzer" is provided.
 
// const dogs = (dogBreeds) => {
    //     if(dogBreeds === "schnauzer"){
    //         return "My favorite dog breed is a schnauzer."
    //     }
    // }

// Store the return value of the function into a variable. (e.g. const myFavorite = someFunction())

// const dogs = (dogBreeds) => {
//     if(dogBreeds === "schnauzer"){
//         return "My favorite dog breed is a schnauzer."
//     }
// }
// const favoriteDogs = dogs()

// Log the string of "When it comes to pets," plus the returned value of the function.

// const dogs = (dogBreeds) => {
//     if(dogBreeds === "schnauzer"){
//         return "My favorite dog breed is a schnauzer."
//     }
// }
// const favoriteDogs = dogs("schnauzer")

// If, and only if, an argument value of "meow" is provided to the function, it should return the string "I like cats".

// const dogs = (dogBreeds) => {
//     if(dogBreeds === "schnauzer"){
//         return "My favorite dog breed is a schnauzer."
//     }else if(dogBreeds === "meow")
//     return "I like cats."
// }
// const favoriteDogs = dogs("schnauzer")
// console.log(favoriteDogs)

/////////////////////////////////////////////////////////////////////////////////////////
// Practice: Addition
// In this exercise, you are going to define more than one parameter for functions.
// Write a function named add that returns the sum of two numbers.

// const add = (num1,num2) => {
//     return num1 + num2
// }

// Log the result of the add function.

// const add = (num1,num2) => {
//          return num1 + num2
//     }
// const sum = add(5, 8)
// console.log(sum)

// or //

// const add = (num1, num2,) => {
//     let sum = (num1 + num2)
//     return sum
// }
// console.log(add(5, 8))

// Modify the function to return the sum of three numbers.

// const add = (num1, num2, num3) => {
//     let sum = (num1 + num2 + num3)
//     return sum
// }
// console.log(add(5, 8, 10))

// If the values of 17, 4, and 11 are provided as arguments, then the function must evaluate to 32.

// const add = (num1, num2, num3) => {
//     let sum = (num1 + num2 + num3)
//     return sum
// }
// console.log(add(17, 4, 11))

// Exploration Tasks
// Switch the order of your parameters. For example, if your parameters are (first, second, third), then change it to (second, first, third). What effect does that have on the unit of work?

// const add = (num1, num2, num3) => {
//     let sum = (num2 + num1 + num3)
//     return sum
// }
// console.log(add(17, 4, 11))

// Remove one parameter, but not the others. Does the function still work?

// const add = (num1, num3) => {
//     let sum = (num1 + num2 + num3)
//     return sum
// }
// console.log(add(17, 4, 11))

// Change the order of the variables when you add them together in the function. Does that affect the output of the function?

// const add = (num1, num2, num3) => {
//     let sum = (num1 + num2 + num3)
//     return sum
// }
// console.log(add(4, 17, 11))

////////////////////////////////////////////////////////////////////////
// Practice: Self-Driving Cars
// Create a function named go that takes 2 arguments:
// direction (forwards, backwards, etc.) speed (mph).

// const go = (direction, speed) => {

// }

// The function, when invoked, will log out the following message format in the console:
// The car is moving forwards at 45 mph.
// The car is moving backwards at 8 mph.
// The car is moving in circles at 12 mph.

// const go = (direction, speed) => {
//     console.log(`The car is moving ${direction} at ${speed} mph.`)    
// }
// go("forward", 45)
// go("backwards", 8)
// go("circles", 12)

// Add a condition inside the function to check if the speed is greater than 75 mph. If it is, add an additional message of SLOW DOWN!

// const go = (direction, speed) => {
//     console.log(`The car is moving ${direction} at ${speed} mph.`) 
//     if(speed > 75) { console.log(`SLOW DOWN!!!!`) }   
// }
// go("forward", 80)
// go("backwards", 8)
// go("circles", 12)

///////////////////////////////////////////////////////////////////////////////////
// Practice: Evens or Odds
// Design a function named evenOrOdd that takes a single number as an argument.
// It should return the string "Even" if the number is evenly divisible by two.
// It should return the string "Odd" if the number is not evenly divisible by two.
// Log the result of the function.

// const evenOrOdd = (num1) => {
//     if(num1 % 2 === 0) {
//         console.log(`Even`)
//     }
//     else{
//         console.log(`Odd`)
//     }
// }
// evenOrOdd(12467)

// Exploration Tasks
// Create an array of numbers outside the function. Some even, some odd. 
//After the function is defined, iterate the array of numbers with a for..of loop, and invoke the evenOrOdd function with each number as the argument.
// What happens when you pass the argument value of 0?

// const numberArrays = [
//     {number: 13},
//     {number: 400},
//     {number: 594905}
// ]
//  const evenOrOdd = () => {
//     for (const number of numberArrays) {
//         if(number.number % 2 === 0) {
//             console.log(`Even`)
//         }
//         else{
//             console.log(`Odd`)
//         }
//     }
    
//  }
// evenOrOdd()

///////////////////////////////////////////////////////////////////
// Practice: Double Functions
// For this exercise, you are going to utilize two functions; each function will have a single responsibility. 
// The goal of the exercise is to convert an array of words into a sentence, 
// but some of the words in the array should not be included in the sentence.

// const words = [
//     "The", "killing", "complex", "houses",
//     "married", "kittens", "and", "single",
//     "soldiers", "and", "their", "kleptomaniacal",
//     "families"
// ]

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)

    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)

    Invoke the filtering function and store its return value

    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/ 
// const filterWordsFunc = () => {
//      const wordsWithoutK = []
//     for (const wordsStr of words) {
//          if(wordsStr.startsWith("k") === false){
//              wordsWithoutK.push(wordsStr)
//          }
//      }
//      return wordsWithoutK.join(" ")
//  }
//  console.log(filterWordsFunc())
//////////////////////////////////////////////////////////////////////////////
// Practice: Fast Food (Multiple Parameters)
// Your job in this exercise is to write a function that returns an object that represents a fast food meal.
// The customer will be able to order a sandwich, a side item (like fries or apples), a drink, and a dessert. 
// Your function should take all of those externally defined values as input (i.e. parameters) and then return an object like this.

// const orderMeal = (sandwich, side, drink, dessert) => {
//     return {  
//         "sandwich": sandwich,
//         "side": side,
//         "drink": drink,
//         "dessert": dessert
//     }
// } 
// const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges")
//  console.log(orderMeal("Mcchicken", "fries", "coke", "dessert"))

/////////////////////////////////////////////////////////////////////////////
// Defining the Chores
// First define six (6) functions that defines a single parameter whose value should be an object.

const personName = {
    firstName: "Donald",
    lastName: "McLelland"
}
const choreOne = chore => `completed ${chore}`
const choreTwo = chore2 => `completed ${chore2}`
const choreThree = chore3 => `${chore3}`
const choreFour = chore4 => `${chore4}`
const dayFunc = day => `On ${day}`

//Now define a function that has six parameters. The purpose of each parameter is as follows:
//chore - A function that will perform a chore
//person - An object representing a perform. It should have a firstName and a lastName property.
//day - The weekday to perform the task (e.g. "Tuesday")
//We suggest you name this higher order function dayPlanner().

const dayPlanner = (chore, secondChore, thirdChore, fourthChore, person, day) => {
    const result = `${day}, ${person.firstName} ${person.lastName} ${chore}.
    ${person.firstName} also ${secondChore}, ${thirdChore}, and ${fourthChore}.`
    return result
}
const donaldDay = dayPlanner(choreOne("cleaning the house"), choreTwo("taking out the trash"), choreThree("washing the dishes"), choreFour("paying the rent"), personName, dayFunc("friday"))
console.log(donaldDay)


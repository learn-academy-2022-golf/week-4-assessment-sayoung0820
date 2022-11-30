// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// describe("functionName",  ( ) => { 
// } it("describes what functionName does", ( ) => {
// expect(functionName("pats argument through as needed")).toEqual("expected output")
// })
// })


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("dropFirst", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    expect(dropFirst(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(dropFirst(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
    })

    // ReferenceError: dropFirst is not defined

// b) Create the function that makes the test pass.

// Pseudocode:
// Create a function called dropFirst that takes in an array, removes the first item from the array and shuffles the remaining content
// Taking in one parameter, array
// function will first use the .shift method to remove the first value
// function will then use the math.random method to randomize the returning array
// .length to iterate over the array
// return the new array

const dropFirst = (array) => {
      array.shift()
      array.sort(Math.floor(Math.random() * array.length))
      return array
  }

// Getting two error messages 
  // ReferenceError: Cannot access 'dropFirst' before initialization
  // ReferenceError: math is not defined
  // refactored code, then got new error
  // TypeError: The comparison function must be either a function or undefined
 // I know I am using the math.random method incorrectly here but thought I could .shift to remove the first element, then sort/randomize the remaining array but still doesn't pass



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

// Pseudocode:
// taking in one parameter, an object
// function will take in up and down votes, compare the number of each, then return the end total of votes

 describe("countVotes", () => { 
    it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
        const votes1 = {upVotes: 13, downVotes: 2}
        const votes2 = {upVotes: 2, downVotes: 33}
        expect(countVotes(votes1)).toEqual(11)
        expect(countVotes(votes2)).toEqual(-31)
    })
})

//  ReferenceError: countVotes is not defined

// b) Create the function that makes the test pass.


// Pseudocode:
// taking in one parameter, an object
// function will take in up and down votes, compare the number of each, then return the end total of votes
// destructure the object to get to the values of the keys
// use . notation 
// subtract votes
// return values

const countVotes = (object) => {
   return object.upVotes - object.downVotes
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe("noDupes", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
    expect(noDupes(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

//   ReferenceError: noDupes is not defined

// b) Create the function that makes the test pass.

// Pseudocode
// create a function called noDupes
// two parameters, both arrays
// join both arrays together using spread operator
// created new variable for joined arrays
// using new set to remove dupes
// return new array

const noDupes = (array1, array2) => {
   let newArray = [...array1, ...array2]
   return [...new Set(newArray)]
}
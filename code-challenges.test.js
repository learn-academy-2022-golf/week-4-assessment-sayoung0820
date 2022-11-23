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
// } if("describes what functionName does", ( ) => {
// expect(functionName("pats argument through as needed )).toEqual("expected output")
// })
// })


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe(newColors, () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    expect(newColors(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(newColors(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
    })

    // ReferenceError: newColors is not defined

// b) Create the function that makes the test pass.

// Pseudocode:
// Create a function called newColors that takes in an array, removes the first item from the array and shuffles the remaining content
// Taking in one parameter, array
// function will first use the .shift method to remove the first value
// function will then use the math.random method to randomize the returning array
// return the new array

const newColors = (array) => {
    array.shift()
    return array.sort(() => Math.random() - 0.5)
}

// numbers.sort(function (a, b) {
//     return Math.random() - 0.5;
//   });

// I know I am using the math.random method incorrectly here but thought I could .shift to remove the first element, then sort/randomize the remaining array but still doesn't pass

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31



// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]


// b) Create the function that makes the test pass.

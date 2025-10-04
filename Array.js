// Array & String
// ==============

/*
An array in JavaScript is a special type of object used to store multiple values in a single variable.
It can hold a collection of elements, which can be of any data type.
Arrays are useful for storing lists of data.
*/

// Methods
// =======

/*
1. push(): Adds a new element to the end of the array.
2. pop(): Removes the last element from the array.
3. shift(): Removes the first element from the array.
4. unshift(): Adds a new element to the beginning of the array.
5. splice(): Adds or removes elements from the array.

   Syntax:
   arrayName.splice(index, numToRemove, valueToAdd);

   // 0 - It is used to add a value in the given index number and it will move forward the already existing value.
   // 1 - It is used to add a value in the given index number and it will remove the already existing value (like replace).
   // splice(add, remove, replace)
   
6. sort(): Sorts the elements of the array.
7. reverse(): Reverses the order of elements in the array.
*/


let days = ["sunday", "monday", "tuesday", "thursday", "friday", "saturday"];
days.splice(3, 1, "wednesday");
console.log(days);

// sort
let ab = ["b", "d", "a", "f", "c", "e"];
console.log(ab.sort());

// reverse
let rev = "jeeva";
console.log(rev.split("").reverse().join(""));


// Input : 
// I am learning JavaScript 

// Output: 
// Javascript learning am I

let input = "I am learning JavaScript"

console.log(input.split(" ").reverse().join(" "));

// 1. map(): Creates a new array by providing function to each element of the original array,
// like transformation or modification of each item in the array.

// Example:
let numbers = [1, 2, 3, 4];
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

// 2. filter(): It creates a new array with elements that pass a certain condition (test).
// It acts like a filter that only lets through the items that meet the criteria.

// Example:
let nums = [1, 2, 3, 4, 5];
let even = nums.filter((num) => num % 2 === 0);
console.log(even); // Output: [2, 4]

// 3. reduce(): Reduces an array to a single value.
// It’s like summarizing or combining all the elements into one final result.

let sum = numbers.reduce((accumulator, currentValue) => {
    // logic to accumulate values
    return accumulator + currentValue;
});
console.log(sum); // Output: 10

/*
accumulator: Holds the accumulated result of the previous iteration.
currentValue: The current element being processed in the array.
*/

// map full syntax:
let result = numbers.map((value, index, array) => {
    return value * 2;
});


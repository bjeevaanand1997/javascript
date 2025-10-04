// let name = "Jeeva";
// let age = 28;
// console.log("Name:", name);
// console.log("Age:", age);


// let fruits = ["Apple", "Banana", "Mango"];
// console.log("First fruit:", fruits[0]);

// // 3. Object Example
// let person = {
//   firstName: "Jeeva",
//   lastName: "Anand",
//   city: "Chennai"
// };
// console.log("Full Name:", person.firstName + " " + person.lastName);

// let a = 10;
// let b = 20;
// let sum = a + b;
// console.log("Sum:", sum);

// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }

// let a = 25;
// let b = 42;
// let c = 17;

// let largest;

// if (a >= b && a >= c) {
//   largest = a;
// } else if (b >= a && b >= c) {
//   largest = b;
// } else {
//   largest = c;
// }

// console.log("The largest number is:", largest);


// i) Print values from 1 to N
// ii) Print values N to 1

// i)
// Input: 5
// Output :
// 1
// 2
// 3
// 4
// 5

// ii)
// Input :5
// Output :
// 5
// 4
// 3
// 2
// 1





let N = prompt("Enter a number:"); 
N = Number(N); // convert to number

console.log("Odd values:");
for (let i = 1; i <= N; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("Even values:");
for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(N) {
    N = Number(N);

    console.log("Odd values:");
    for (let i = 1; i <= N; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }

    console.log("Even values:");
    for (let i = 1; i <= N; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

    rl.close();
});

let N = 5; // you can change this number anytime

console.log("Odd values:");
for (let i = 1; i <= N; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("Even values:");
for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


let N = 50; // you can change this number anytime

console.log("divisible by 5 and 8 :");
for (let i = 1; i <= N; i++) {
    if (i % 5 == 0 && i % 8  == 0) {
        console.log(i);
    }
}

console.log("Checking whether the given year is leap year or not.");

let N = 1996
if (N %4==0  && N% 100!==0  || N % 400===0){
    console.log("it is leap year");
    
}

else{
    console.log(" it is not a leap year");
    
}

for (let year = 2000; year <= 2100; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year);
    }
}


let x = 10

if (x < 0){
    console.log("it is negative ");
    
}

else if(x%2==0){
    console.log("it is positive number");
    
}

else{
    console.log("x is even and non negative");
    
}

let n = 10;

// initialize sum and counter
let sum = 0;
let i = 1;

while (i <= n) {
    sum = sum + i;
    i = i + 1; // update counter
}

// print the sum
console.log("The sum is", sum);


for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j + ' ';
    }
    console.log(row.trim());
}

const rows = 5;
for (let i = 1; i <= rows; i++) {
    let spaces = ' '.repeat(rows - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
}




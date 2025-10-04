// // let str = "hello java welcome to java world";
// // console.log(str.length);
// // console.log(str.toUpperCase());
// // console.log(str.toLowerCase());
// // console.log(str.charAt(4));
// // console.log(str.indexOf("o"));
// // console.log(str.lastIndexOf("o"));
// // console.log(str.slice(5));
// // console.log(str.substring(0,5));

let str = "hello java welcome to java world";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(4));
console.log(str.indexOf("o"));
console.log(str.lastIndexOf("o"));
console.log(str.slice(5));
console.log(str.substring(0,5));
console.log(str.replace("java","js"));
console.log(str.replaceAll("java","javascript"));
console.log(str.trim());
console.log(str.split("").join(""));
console.log(str.concat(" nice to meet you"));
console.log(str.startsWith("j"));
console.log(str.endsWith("d"));
console.log(str.includes("w"));


// Input:
// Banana 
// Count of a 

// Output:
// 3

// let a= "Banana"
// let b= a.split("a").length-1;
// console.log(a);


let a = "Banana";
let b = a.toLowerCase().split("a").length - 1;
console.log(b);

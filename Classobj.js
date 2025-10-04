class car{
    constructor(brand,color,price){
        this.brand=brand;
        this.color=color;
        this.price=price;
    }

    output(){
        console.log(`I need ${this.brand} car
Its fully colored by ${this.color} color
The minimum of the car`);
    }
}

const pro = new car("BMW","Black","75lakhs");
pro.output();


// ==============================
// Synchronous (Sync):
// Synchronous means that things happen one after another in order.
// The program waits for one task to finish before moving on to the next task.

// Asynchronous (Async):
// Asynchronous means that tasks can happen at the same time,
// or the program can start a task and move on to another task
// without waiting for the first one to finish.
// You can do other things while waiting for a task (like waiting for an email response).

// 1. What is setTimeout?
// setTimeout() is a JavaScript function that allows you to delay the execution
// of a block of code for a specified amount of time.
//
// setTimeout is used when you want to delay something in your program for a specific time,
// but you don’t want to stop the program from doing other things while waiting.


// ==============================
// CALLBACK
// Meaning:
// A callback is like telling someone,
// “When you finish doing something, call me back and let me know.”

// Definition:
// A callback function is simply a function that you pass as an argument to another function.
// The function you pass the callback to will call it back after it has finished its task.



// settimeout

// asynchronous order
function box1(){
    setTimeout(() => {
        console.log("loading");
    }, 5000);
}

function box2(){
    setTimeout(() => {
        console.log("loading successful");
    }, 1000);
}

box1();
box2();


// call back

function box1(callback){
    setTimeout(() => {
        console.log("loading");
        callback();
    }, 5000);
}

function box2(callback){
    setTimeout(() => {
        console.log("loading successful");
    }, 1000);
}

box1(box2);


// call back

function box1(callback){
    setTimeout(() => {
        console.log("loading");
        callback();
    }, 5000);
}

function box2(callback){
    setTimeout(() => {
        console.log("loading successful");
        callback();
    }, 1000);
}

function box3(callback){
    setTimeout(() => {
        console.log("finish");
    }, 2000);
}

box1(() => {
    box2(() => {
        box3(() => {})
    });
});


// Callback Hell in JavaScript
// ---------------------------
// Callback hell occurs when multiple callbacks are nested inside each other,
// leading to complex and hard-to-manage code.
// This makes it difficult to follow the flow of the program.


// Promises
// ========
// Meaning: A Promise is like a guarantee to either complete the task (success)
// or tell you if something went wrong (failure).

// Definition: A Promise is used to handle things that take time,
// like fetching data from the internet, waiting for a timer, or reading a file.
// The promise says: "I'll either give you the result, or I'll tell you if there's an error."


// SYNTAX:

// Creating a Promise
return new Promise((resolve, reject) => {
    // Code for ==> task to be done or not
});


// Handling the Promise result
callBackPromise
    .then((message) => {
        console.log(message); // This runs if the promise is fulfilled.
    })
    .catch((error) => {
        console.log(error); // This runs if the promise is rejected.
    });


// return new Promise((resolve, reject) => {})

function go() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am going to the shop");
        }, 5000);
    });
}

function buy() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I bought the product");
        }, 3000);
    });
}

function change() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Collected the changes");
        }, 2000);
    });
}

function back() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Back to home");
        }, 5000);
    });
}
function back() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Back to home");
        }, 5000);
    });
}

// Promise chaining example
go()
    .then(val => {
        console.log(val);
        return buy();
    })
    .then(val => {
        console.log(val);
        return change();
    })
    .then(val => {
        console.log(val);
        return back();
    })
    .then(val => {
        console.log(val);
    });
    // --------------------------------------------------------------------------------
function go() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am going to the shop");
        }, 5000);
    });
    function back() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const d = true;
            if (d) {
                resolve("Back to home");
            } else {
                reject("Back to ground");
            }
        }, 5000);
    });
}

// Promise chaining with error handling
go()
    .then(val => {
        console.log(val);
        return buy();
    })
    .then(val => {
        console.log(val);
        return change();
    })
    .catch(val => {
        console.log(val);
        return back();
    })
    .then(val => {
        console.log(val);
    });

    function buy() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const b = true;
            if (b) {
                resolve("I bought the product");
            } else {
                reject("I have not bought the product");
            }
        }, 3000);
    });
}

function change() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const c = false;
            if (c) {
                resolve("Collected the changes");
            } else {
                reject("Forgot to collect the changes");
            }
        }, 2000);
    });
}


async function js() {
    try {
        const x = await go();
        console.log(x);

        const y = await buy();
        console.log(y);

        const z = await change();
        console.log(z);

        const w = await back();
        console.log(w);

    } catch (error) {
        console.log(error);
    }
}

js();
 
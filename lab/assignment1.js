// Lab Task 1

function add(a, b) {
    if (a === undefined || b === undefined) {
        return "Error: One or more arguments are undefined.";
    }
    return a + b;
}

function subtract(a = 0, b = 0) {
    if (a === undefined){ 
        a = 0;
    }
    if (b === undefined){
        b = 0;
    }
    return a - b;
}

function multiply(...args) {
    return args.reduce((product, num) => product * num, 1);
}

function divide() {
    if (arguments.length < 2) {
        return "At least two arguments are required.";
    }
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] === 0) {
            return "Division by zero.";
        }
        result = result / arguments[i];
    }
    return result;
}

function round(num) {
    return Math.round(num);
}

console.log(add(5, 10));
console.log(add(5));
console.log(subtract(10, 5));
console.log(subtract(10));
console.log(multiply(2, 3, 4));
console.log(divide(20, 4, 2));
console.log(divide(20, 0));

// Lab Task 2
function SolveThis(obj) {
    const result = {};
    for (const key in obj) {
        if (key === "sum") {
            result[key] = obj[key].reduce(add);
        } else if (key === "max") {
            result[key] = Math.max(...obj[key]);
        } else if (key === "min") {
            result[key] = Math.min(...obj[key]);
        } else if (key === "round") {
            result[key] = obj[key].map(round);
        } else if (key === "abs") {
            result[key] = obj[key].map(num => Math.abs(num));
        } else if (key === "ceil") {
            result[key] = obj[key].map(num => Math.ceil(num));
        } else if (key === "floor") {
            result[key] = obj[key].map(num => Math.floor(num));
        } else if (key === "random") {
            result[key] = obj[key].map(() => Math.random());
        }
    }
    return result;
}


// Task 2
console.log(SolveThis({ sum: [3, 2, 4], max: [2, 4, 3, 5], min: [5, 3, 4, 3] }));
console.log(SolveThis({ round: [1.2, 2.5, 3.7], abs: [-1, -2, -3] }));
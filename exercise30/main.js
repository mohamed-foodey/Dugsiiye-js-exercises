// callbacks
function operate(num1, num2, callback){
    return callback(num1, num2);
}

function add(num1, num2){
    return num1 + num2;
}
console.log("addition",operate(5,5,add));

function subtract(num1, num2){
    return num1 - num2;
}
console.log("subtraction",operate(5,1,subtract));

function multiply(num1, num2){
    return num1 * num2;
}
console.log("multiplication",operate(5,5,multiply));

function divide(num1, num2){
    return num1 / num2;
}
console.log("division",operate(5,5,divide));
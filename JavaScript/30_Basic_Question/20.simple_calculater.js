const ps = require("prompt-sync");

const prompt = ps({sigint : true});
//{sigint : true} for interuppt signal like ctrl c

const expression = [];
// let valid = true;
let num, opeartor;
console.log("Enter the expression, to end type 'exit'.....");
while(true){

    num = prompt("Enter nunber: ");
    expression.push(num);
        opeartor = prompt("Enter the operator: ");
        expression.push(opeartor);
}

console.log(expression);
// const calculator = (num1, num2, operator) => {

// }
// const num1 = prompt("Enter a first value:");
// console.log(param);











// let operator = 
const factorial = (num) => {
    if(num == 1)
        return 1;
    return num * factorial(num-1);
}

let number = 7;
console.log(`Factorial of ${number} is ${factorial(number)}`);
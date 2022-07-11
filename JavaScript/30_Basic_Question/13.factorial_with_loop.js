const factorial = (num) => {
    let fact = 1;
    for(let i = 2; i <= num; i++){
        fact = fact * i;
    }
    return fact;
}

let number = 7;
console.log(`Factorail of ${number} is ${factorial(number)}`);
const prime = (num) => {
    let i = 2;
    while(i < Math.round(number / 2)){
        if(number % i == 0)
            return "Not Prime";
        i++;
    }
    return "Prime";
}



const number = 2;
console.log(prime(number));
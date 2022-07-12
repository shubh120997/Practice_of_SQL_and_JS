const check_armstrong = (num) => {
    let temp = num, sum = 0;
    let length = num.toString().length;
    while(temp > 0){
        let rem = temp % 10;
        sum += Math.pow(rem, length);
        temp = parseInt(temp / 10);
    }
    if(num == sum)
        return `${num} is armstrong number.`;
    else
        return `${num} is not armstrong number.`;
}

let number = 153;
console.log(check_armstrong(number));

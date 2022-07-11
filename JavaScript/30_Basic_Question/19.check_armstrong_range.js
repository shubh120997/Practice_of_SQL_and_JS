const check_armstrong = (lowRange, upperRange) => {
    for(let i = lowRange; i <= upperRange; i++){
        let temp = i, sum = 0;
        let length = i.toString().length;
        while(temp > 0){
            let rem = temp % 10;
            sum += Math.pow(rem, length);
            temp = parseInt(temp / 10);
        }
        if(i == sum)
            console.log(`${i} is armstrong number.`);
    }
}


check_armstrong(100, 1000);

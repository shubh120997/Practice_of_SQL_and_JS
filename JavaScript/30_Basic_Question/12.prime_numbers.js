const prime = (lower, upper) => {
    let num = lower;
    while(num <= upper){
        let i = 2;
        let counter = 0;
        while(i < Math.round(num / 2)){
            if(num % i == 0)
                counter++;
            i++;           
        }
        if(counter == 0)
            console.log(num);
        num++;
    }
}

const lowerRange = 2;
const upperRange = 100;
console.log(prime(lowerRange, upperRange));
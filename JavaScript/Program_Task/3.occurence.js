const array = ['a', 'b', 'c', 'a', 'b', 'b'];

const obj = {};

for(let i=0; i<array.length; i++){
    if(array[i] in obj){
        obj[array[i]] = obj[array[i]]+1;
    }
    else{
        obj[array[i]] = 1;
    }
}

console.log(obj);
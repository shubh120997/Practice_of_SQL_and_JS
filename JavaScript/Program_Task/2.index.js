/*----------Using Loops--------------*/
// const index = (array, search) => {
//     for(let i=0; i<array.length; i++){
//         for(let j=0; j<array[i].length; i++){
//             if(array[i][j] == search[j])
//                 return i;
//         }
//     }
//     return -1;
// }

/*------------Using Stringfy--------------*/
const index = (array, search) => {
    for(let i=0; i<array.length; i++){
        if(JSON.stringify(array[i]) === JSON.stringify(search))   return i;
    }
    return -1;
}

const array = [[1,2],[4,5],[3,4]];
const search = [3,4];

console.log(index(array, search));



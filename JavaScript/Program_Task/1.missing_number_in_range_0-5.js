/*----------using sorting-------------*/
// const missing = (array) => {
//     array.sort();
//     for(let i=0; i < array.length; i++){
//         if(array[i] != i)
//             return i;
//         continue;        
//     }
// }


/*----------using only loop-----------*/
// const missing = (array) => {
//     for(let i=0; i <= 5; i++){
//         let counter = 0;
//         for(let j=0; j < array.length; j++){
//             if(i == array[j])
//                 counter++;   
//         }
//         if(counter == 0)
//             return i;
//     }
// }

/*----------using natural numbers sum---------*/
// const missing = (array) => {
//     let total = array.length * (array.length + 1) / 2
//     for(let i = 0; i < array.length; i++){
//         total -= array[i];
//     }
//     return total;
// }

const array = [4,3,1,0,5];
console.log(missing(array));

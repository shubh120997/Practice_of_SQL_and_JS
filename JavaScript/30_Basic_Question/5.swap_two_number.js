let a = 8;
let b = 9;

//using third variable
let c = a;
a = b;
b = c;

console.log(a);
console.log(b);


//without using third variable
a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);
const a = 2;
const b = 4;
const c = 2;

let discriminant = b * b - 4 * a * c;
let root1 = 0; 
let root2 = 0;

if (discriminant > 0){
    root1 = (-b + Math.sqrt(discriminant)) / 2 * a;
    root2 = (-b - Math.sqrt(discriminant)) / 2 * a;
    console.log(root1);
    console.log(root2);
}
else if (discriminant === 0){
    root1 = root2 = -b / (2 * a);
    console.log(root1);
    console.log(root2);
}
else{
    console.log("Roots are imaginary");
}


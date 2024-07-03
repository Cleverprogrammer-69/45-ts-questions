let str1:String = "Abdullah"
console.log("Is str1 == 'ABdullah'? I predict False.");

console.log(str1 == "ABdullah")

console.log("Is str1.toLowerCase() == 'abdullah'? I predict True.");

console.log(str1.toLowerCase() == "abdullah");

console.log("Is 9 < 19? I predict True.");

console.log(9 < 19);

console.log("Is 9 < 19 || 19<9 ? I predict True");

console.log(9 < 19 || 19<9);


console.log("Is 9 < 19 && 19<9 ? I predict False");

console.log(9 < 19 && 19 < 9);

let numbers:Number[]=[2,4,1,4,6,27,23]

console.log("Is 45 is in array ? I predict false")
console.log(numbers.includes(45))

console.log("Is 4 is in array ? I predict true");
console.log(numbers.includes(4))
"use strict";
let places = ["Australia", "Saudi Arabia", "Turkey", "Malaysia", "Russia", "Germany"];
console.log(places);
//Sorted not changing original
console.log([...places].sort());
console.log(places);
//Reverse Sorted not changing original
console.log([...places].sort().reverse());
console.log(places);
//Reverse 1
console.log(places.reverse());
//Reverse 2 
console.log(places.reverse());
//Sorted but changing original state
places.sort();
console.log(places);
//Reverse sorted and change order of original
places.sort().reverse();
console.log(places);

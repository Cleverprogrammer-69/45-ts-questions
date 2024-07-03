"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.map(num => {
    if (num > 3)
        console.log(`${num}th`);
    else if (num == 1)
        console.log("1st");
    else if (num == 2)
        console.log("2nd");
    else if (num == 3)
        console.log("3rd");
});

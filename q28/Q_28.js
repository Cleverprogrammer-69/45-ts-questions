"use strict";
let age1 = 20;
if (age1 > 0 && age1 < 2)
    console.log("Person is baby");
else if (age1 >= 2 && age1 < 4)
    console.log("Person is toddler");
else if (age1 >= 4 && age1 < 13)
    console.log("Person is kid");
else if (age1 >= 13 && age1 < 20)
    console.log("Person is teenager");
else if (age1 >= 20 && age1 < 65)
    console.log("Person is adult");
else
    console.log("Person is old");

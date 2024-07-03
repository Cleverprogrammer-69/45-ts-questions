"use strict";
function orderSandwitch(...sandwitch) {
    if (sandwitch.length == 0)
        console.log("You ordered only bread!");
    else {
        sandwitch.map((item, index) => {
            console.log(`Your ordered sandwitch has ${item}`);
        });
    }
}
orderSandwitch("Chicken", "Beans", "Ketchup");
orderSandwitch("Chicken", "Peanuts", "Beaf", "Beans", "Ketchup");

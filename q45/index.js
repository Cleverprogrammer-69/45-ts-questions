"use strict";
function createCar(manufacturer, modelName, attributes = {}) {
    const car = Object.assign({ manufacturer,
        modelName }, attributes);
    return car;
}
console.log(createCar("Toyota", "Corola", {
    color: "blue",
    year: 1998,
    features: "auto",
}));

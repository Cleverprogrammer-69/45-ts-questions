"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q_16_1 = require("../q16/Q_16");
console.log("We have now table for only 2 persons");
while (Q_16_1.guests.length != 2) {
    Q_16_1.guests.pop();
}
console.log(Q_16_1.guests);

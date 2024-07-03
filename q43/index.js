"use strict";
function make_great(magicians) {
    return magicians.map((magician) => magician + " Great");
}
function show_magicians(magicians) {
    magicians.forEach((magician) => console.log(`${magician} is a magician!`));
}
const originalMagicians = ["Dynamo", "Andreas", "Monica"];
const greatMagicians = make_great([...originalMagicians]);
console.log("Original magicians:");
show_magicians(originalMagicians);
console.log("\nGreat magicians:");
show_magicians(greatMagicians);

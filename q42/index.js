"use strict";
function show_magicians(magicians) {
    magicians.forEach((magician) => console.log(`${magician}`));
}
function make_great(magicians) {
    return magicians.map(magician => {
        return magician + " Great";
    });
}
show_magicians(make_great(["Dynamo", "Andreas", "Monica"]));

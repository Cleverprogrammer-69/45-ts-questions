"use strict";
function describe_city(city, country = "Pakistan") {
    return `${city} is in ${country}`;
}
console.log(describe_city("Lahore"));
console.log(describe_city("Peshawar"));
console.log(describe_city("Paris", "France"));

"use strict";
let usernames1 = ["user123", "abdullah917", "jones23", "maria10", "admin"];
usernames1.map(user => {
    if (user == "admin")
        console.log(`Hello admin, would you like to see a status report?`);
    else
        console.log(`Hello ${user}, thank you for logging in again.`);
});

"use strict";
let guests = ["Roach", "Ahad", "Mac", "John"];
console.log("Mac Can't make it to dinner so we are removing him");
for (const guest of guests) {
    if (guest == "Mac") {
        guests.splice(2, 1, "Julius");
    }
}
guests.map((guest) => console.log(`${guest}! You're invited to dinner tonight.`));
console.log("Q_15 end");

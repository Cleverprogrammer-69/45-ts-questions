
export let guests: string[] = ["Roach", "Ahad", "Mac", "John"];

  console.log("We found a bigger table")
  guests.unshift("Markrov")
  guests.splice(guests.length/2, 0, "Kim Jhon")
  guests.push("Donald")

  guests.map((guest) =>
    console.log(`${guest}! You're invited to dinner tonight.`)
  );
  console.log("Q_16 end")


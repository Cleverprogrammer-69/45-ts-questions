let current_users = ["user123", "abdullah917", "jones23","maria10","admin"] //current_users can contain only lowercase unique names
let new_users = ["user123", "abdullah917", "Abdullah917", "amina34"];
new_users.map(newUser=>{
    if(current_users.includes(newUser.toLowerCase()))console.log("username is already in use, Enter new username.")
    else console.log("username is available.")
})
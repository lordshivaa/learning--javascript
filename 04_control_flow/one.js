// if

const isUserLoggedIn = true
const temperature = 41


// if (temperature < 50) {
//     console.log("less than 50");
// }


// <, >, <=, >=, ==, !=, ===, !==

const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

const balance = 1000

// if (balance < 500) {
//     console.log("less than");
// } else if (balance < 750) {
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow t buy course");
}

// && -> if both condition is true
// || -> if any one condition is true

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}


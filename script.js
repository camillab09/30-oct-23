// Script tag i HTML for å linke javascript.
// Variabler, let/const
// Operators, +, -, *, /
// Comparison operators, ===, <, >, >=, <=, !==
// Data typer - string/tekst, tall/numbers, arrays, booleans, objects.

// Conditionals.

// IF / ELSE / ELSE IF

const x = 2;

/* if (x < 3) {
  console.log("X er mindre enn 3");
} else if (x !== 4) {
  console.log("X er IKKE 4");
} else if (x === 8) {
  console.log("X er lik 8")
} else {
  console.log("X er ikke mindre enn 3, og x er ikke lik 4");
} */

// Logical operators , AND && og OR ||
const userName = "Anders";
const userAge = 18;
// Sjekke at bruker heter Anders OG bruker er over 18
if (userName === "Anders" || userAge >= 18) {
  console.log("Bruker heter Anders, eller er over 18");
} else {
  console.log("Bruker heter ikke Anders, og er ikke 18+");
}

// Truthy / Falsey
const userName = undefined;
const userAge = 1;
const acceptedEULA = false;

if (!acceptedEULA) {
  console.log("Has not accepted");
} else {
  console.log("Has accepted");
}
// Ternary
const userAge = 18;
// Sett drink variabelen til "Øl" hvis userAge er 18+, og til "Saft" hvis ikke
/* let drink;
if (userAge >= 18) {
  drink = "Øl";
} else {
  drink = "Saft";
}
console.log(drink); */
const drink = userAge >= 18 ? "Øl" : "Saft";
console.log(drink);

// template literal
const userName = "Timmy";
const userAge = 17;
const userGreat = true;

// "Good day Timmy! You are/aren't great. You are 19, which is/isn't old enough"
const userGreeting = `Good day ${userName}! You ${
  userGreat ? "are" : "aren't"
} great. You are ${userAge}, which is${
  userAge >= 18 ? "is" : "isn't"
} old enough.`;
console.log(userGreeting);

if (userName && userAge >= 18 && userGreat) {
  console.log("You are logged in! YAY!");
} else {
  console.log(
    "Either you don't have a username, you're not great, or you're under 18"
  );
}

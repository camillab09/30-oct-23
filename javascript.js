//
// tekst i javascript skal alltid i double quotes "tekst her"
// nummer skal bare skrives rett frem, skal ikke "pakkes inn", kalles ofte
// integers, int, floats (floats refererer til flytende nummer, tall med desimaler)
//brukt . istedet for , ved desimaler
// boolean er enten true or false
//ingen innpakning
//array: en samling av verdier
//const names = ["Camilla", "Kristian", "Adrian", "Henry", "Andreas", "Tran"]
// object
//const user = {username: "Lamp2"}
//{key: "value"} kan legge inn flere, man kan neste objects eks
//const userInfo = {username: "Lamp2", userage: 30, userEmail: "lamp@email.com", userAdress: {street: "Gategaten 2", postCode: "5000"}}

//operators
//operasjoner som kan gjøres på tall
//+,-,*,/
//const x = 5
//const y = 10
//const z = x + y
//console.log(z)
//increment og decrement
//let lives = 3
//lives = lives - 1
//shorthand operators
//lives -= 1
//lives += 1
//lives ++ //incrementer med 1 for hver gang
//lives -- //decrementer med 1 for hver gang
//console.log(lives)
// console.log("Velkommen tilbake, " + username + ". Du er" + userage + "år gammel")
//template literals- lage en sting som inneholder f.eks en variabel
//const greeting = `Velkommen tilbake,${username}. Du er ${userage} år gammel. `
//console.log(greeting)
// console.log(`Hei ${user}`)
//comparison operator >st;rre enn, <mindre enn =lik som. == loosely equals, === strictly equals.
//bruk ALLTID ===
//for å sjekke om noe er ulikt, bruk !==
//console.log(5 > 4)

//const a = 1 + 3;
//const b = 5;
//const c = a + b;
//console.log(c);

//Write an IF/ELSE conditional statement that checks that userName isn't
//empty(""), that the user age is 18+, and that userIsBlocked is false.

//(HINT: Use the && (logical AND) to check all 3 in one IF statement)

//If all of these conditions are true, change the userIsLoggedIn variable to true
//and the goToPage variable to "/home" then console.log a welcome message.

//If any of the conditions for logging in are not met, console.log an error
//message.

//Try changing the values of the variables to make sure your IF/ELSE conditional
//can handle all cases correctly

/*let userName = "";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

if ((userName && userAge >= 18) || !userIsBlocked) {
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log(`Welcome!`);
} else {
  console.log(`Error`);
} */

/*Make a variable called userTitle and set the content equal to "Mr." if userMale 
is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 
this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working.
******************************************************************************/

const userMale = false;
const userTitle = userMale ? "Mr" : "Mrs.";
console.log(userTitle);
//lives -= 1
//lives += 1
//lives ++ //incrementer med 1 for hver gang
//lives -- //decrementer med 1 for hver gang
//console.log(lives)
//your code here
let cars = 5;
cars++;
console.log(cars);
let people = 2;
people++;
people++;
people--;
people -= 1;
people += 1;
console.log(people);
const a = 1 + 3;
const b = 5;
const c = a + b;
console.log(c);
const y = 5;
const x = 3;
const z = y * x;
console.log(z);
const q = 10;
const w = 2;
const e = q / w;
console.log(e);
let userName = "";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";
// your code here
if (userName && userAge >= 18 && !userIsBlocked) {
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log(`Welcome!`);
} else {
  console.log(`Error`);
}

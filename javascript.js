
// tekst i javascript skal alltid i double quotes "tekst her"
// nummer skal bare skrives rett frem, skal ikke "pakkes inn", kalles ofte
// integers, int, floats (floats refererer til flytende nummer, tall med desimaler)
//brukt . istedet for , ved desimaler
// boolean er enten true or false
//ingen innpakning 
//array: en samling av verdier
const names = ["Camilla", "Kristian", "Adrian", "Henry", "Andreas", "Tran"]
// object
const user = {username: "Lamp2"}
//{key: "value"} kan legge inn flere, man kan neste objects eks
const userInfo = {username: "Lamp2", userage: 30, userEmail: "lamp@email.com", userAdress: {street: "Gategaten 2", postCode: "5000"}}

//operators
//operasjoner som kan gjøres på tall
//+,-,*,/
const x = 5
const y = 10
const z = x + y
console.log(z)
//increment og decrement
let lives = 3
lives = lives - 1
//shorthand operators
lives -= 1
lives += 1
lives ++ //incrementer med 1 for hver gang
lives -- //decrementer med 1 for hver gang
console.log(lives)
// console.log("Velkommen tilbake, " + username + ". Du er" + userage + "år gammel")
//template literals- lage en sting som inneholder f.eks en variabel
const greeting = `Velkommen tilbake,${username}. Du er ${userage} år gammel. `
console.log(greeting)
// console.log(`Hei ${user}`)
//comparison operator >st;rre enn, <mindre enn =lik som. == loosely equals, === strictly equals.
//bruk ALLTID ===
//for å sjekke om noe er ulikt, bruk !==
console.log(5 > 4)
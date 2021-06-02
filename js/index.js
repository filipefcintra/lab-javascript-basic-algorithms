// Iteration 1: Names and Input

let hacker1 = "Vinícius";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Filipe";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  let counter1 = hacker1.length;
  console.log(`The driver has the longest name, it has ${counter1} characters`);
} else if (hacker1.length < hacker2.length) {
  let counter2 = hacker2.length;
  console.log(`It seems that the navigator has the longest name, it has ${counter2} characters.`);
} else {
  let counter3 = hacker1.length;
  console.log(`Wow, you both have equally long names, ${counter3} characters!`);
};


// Iteration 3: Loops

let hacker1Separated = hacker1.toUpperCase().split('').join(' ');

console.log(hacker1Separated);

let splitString = hacker2.split("");

let reverseArray = splitString.reverse();

let joinArray = reverseArray.join("");

console.log(joinArray);


let newArray = [hacker1, hacker2];
let arrayAjust = newArray.sort();

if (arrayAjust[0] === hacker1 && hacker1 !== hacker2) {
  console.log(`The driver's name goes first`)
} else if (arrayAjust[0] === hacker2 && hacker1 !== hacker2) {
  console.log(`Yo, the Navigator's goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
};
 

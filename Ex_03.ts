// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// step01:
let person_Name: string = "Andrew Thomas"
console.log(person_Name.toLowerCase());

// step02:
console.log(person_Name.toUpperCase());

// step03:

let titleCaseName: string = person_Name
  .split(' ')
  .map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase())
  .join(' ');

console.log(titleCaseName);
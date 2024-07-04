// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let Guest_Name2: string [] = ["Sameer", "Haris", "Hamza", "Sufiyan", "Areeb", "Insha" ]
console.log("Table is not available, I can invite only 2 person for dinner. \n");

// remove last 4 elements
let guest1 = Guest_Name2.pop();
console.log(`Sorry Mr.${guest1}, You're not invited!`)

let guest2 = Guest_Name2.pop();
console.log(`Sorry Mr.${guest2}, You're not invited!`)

let guest3 = Guest_Name2.pop();
console.log(`Sorry Mr.${guest3}, You're not invited!`)


let guest4 = Guest_Name2.pop();
console.log(`Sorry Mr.${guest4}, You're not invited!`)

for(let i = 0; i < Guest_Name2.length; i++){
  console.log(`Mr.${Guest_Name2[i]}, You're still Invited!`)
}

Guest_Name2.pop();
Guest_Name2.pop();
console.log(`\n ${Guest_Name2}`);
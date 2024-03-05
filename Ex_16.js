"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let Guest_Name = ["Sameer", "Haris", "Hamza", "Sufiyan"];
console.log(Guest_Name);
console.log('We have 3 more people to invite on dinner \n');
// Add friends at beginning
Guest_Name.unshift("Obaid");
console.log(Guest_Name);
// Add friends at middle
Guest_Name.splice(3, 0, "Faiz");
console.log(Guest_Name);
// Add friends at last
Guest_Name.push("Huraira");
console.log(Guest_Name);
for (let i = 0; i < Guest_Name.length; i++) {
    console.log(`Mr.${Guest_Name[i]}! You are invite to dinner`);
}

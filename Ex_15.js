"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guest_Name = ["Sameer", "Haris", "Hamza", "Sufiyan", "Laraib"];
console.log(`Due to some personal reason, Mr. ${guest_Name[2]} can't come to my dinner`);
guest_Name[2] = "Yasir";
console.log(`New list of my friends who are coming:`);
for (let i = 0; i < guest_Name.length; i++) {
    console.log(`${i + 1}.${guest_Name[i]}`);
}

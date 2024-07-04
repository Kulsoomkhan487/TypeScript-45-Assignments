// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

// Empty array case
const emptyuser_name:string[]= [];

// Non Empty array 
let user_names: string[] = ["Admin", "Haris","Sameer","Huzaifa", "Admin","Hamza"];

// functional case
function greetuser(user_names: string[]): void{
if(user_names.length === 0){
  console.log("We need to find some users!");
  return;
}
for (let i in user_names){
  if (user_names[i] === 'Admin'){
    console.log("Hello admin, would you like to see a status report?");
  }else {
    console.log(`Hello ${user_names[i]}, thankyou for logging in again`)
  }
}
}console.log("For non empty usernames \n")
greetuser(user_names)

// empty array to user_names
user_names = [];
console.log(`\n\n for empty user\n`)
greetuser(user_names)
export{}
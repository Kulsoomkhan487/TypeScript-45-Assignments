// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guest_naMe: string[] = ["Sameer", "Haris", "Hamza", "Sufiyan", "Laraib"]
console.log(`I am inviting ${guest_naMe.length} number of friends to my dinner which are following \n`)
for(let i = 0; i < guest_naMe.length; i++){
  console.log(`${i + 1}. ${guest_naMe[i]}`)
}


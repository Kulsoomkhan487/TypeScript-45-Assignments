// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Array of magician names
let magiciansNames = ["David Blaine", "Criss Angel", "Harry Houdini", "Dynamo", "Shin Lim"];
function show_magicians(magicians) {
    for (const item of magicians) {
    }
}
function make_great(magicians) {
    const great_magicians = magicians.map(magician => `The Great ${magician}`);
    return great_magicians;
}
// the array to add "the great" to each magician's name:
const great_magiciansNames = make_great(magiciansNames);
//  the function to show the original magicians names:
console.log("Original Magicians:\n");
show_magicians(magiciansNames);
// the function to show the greatmagicians's names:
console.log("\nGreat Magicians:\n~");
show_magicians(great_magiciansNames);
export {};

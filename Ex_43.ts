// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// / Array of magician names
let magiciansNames: string[] = ["David Blaine", "Criss Angel", "Harry Houdini", "Dynamo", "Shin Lim"];

function show_magicians(magicians: string[]): void{
for (const item of magicians){
  console.log(item);
}
}
function make_great(magicians: string[]): string[]{
  const great_magicians: string[] = magicians.map(magician => `The Great ${magician}`);
  return great_magicians;
}

// Modify the array to add"the great" to each magician's name
const great_MagiciansNames: string[] = make_great(magiciansNames);

// call the function to show the original magicians name
console.log("\nOriginal Magicians:\n");
show_magicians(magiciansNames);
  
// call the function to show the great magicians name
console.log("\nGreat Magicians:\n")
show_magicians(great_MagiciansNames)

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magiciansNames: string[] = ["David Blaine", "Criss Angel", "Harry Houdini", "Dynamo", "Shin Lim"];
function show_magicians(magicians: string[]): void{
for (const item of magicians){
  console.log(item)
}
}
show_magicians(magiciansNames);
"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let magiciansNames = ["David Blaine", "Criss Angel", "Harry Houdini", "Dynamo", "Shin Lim"];
function show_magicians(magicians) {
    for (const item of magicians) {
        console.log(item);
    }
}
show_magicians(magiciansNames);

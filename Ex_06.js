// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// step01:
let person_name = "\t Allen Saunders \n";
console.log("name with whitespace:", person_name);
// step02:
let strippedname = person_name.trim();
console.log("name with stripped:", strippedname);
export {};

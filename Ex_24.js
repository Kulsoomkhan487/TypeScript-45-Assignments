// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Equality and Inequality
let my_Name = "Anaya"; //true
console.log(my_Name == "Anaya");
let my_name = "Anaya"; //true   
console.log(my_Name !== "anaya");
// Lower case function
let Friend_name = "Urooj";
console.log(Friend_name == "urooj"); //false
// Numerical Test
let my_Number = 10;
console.log(my_Number == 10); //true
console.log(my_Number !== 10); //false
console.log(my_Number > 6); //true
console.log(my_Number < 6); //false
console.log(my_Number >= 6); //true
console.log(my_Number <= 6); //false
// "and && " and "or || " operators:
let num1 = 8;
let num2 = 12;
console.log(num1 > 7 && num2 < 14); // true
let num3 = 5;
let num4 = 12;
console.log(num3 > 7 || num4 < 14); // true
// • Test whether an item is in a array
let myarray = ["Ali", 2, 13, "Hamza"];
let mystring = "Muhammad Raza";
console.log(Array.isArray(myarray)); //true
// Test whether an item is not in a array
console.log(Array.isArray(mystring)); //false
export {};

// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

const make_shirt = (size: string, message: string): void =>{
console.log(`Size:${size}, Message: ${message}`);

}
// call the function with variables (size and message)
let size: string = "Large"
let message: string = "The length of the collar is 46 cm."
make_shirt(size,message);

// directly call the function
make_shirt(" Medium","The length of the collar is 42 cm.")
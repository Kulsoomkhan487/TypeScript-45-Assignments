// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeshirt(size = "large", message = "I love Typescript.") {
    return console.log(`Size: ${size}, message: ${message}`);
}
// large shirt with default message
makeshirt();
// Medium shirt with default message
makeshirt("Medium");
// Small shirt with default message
makeshirt("Small");
export {};

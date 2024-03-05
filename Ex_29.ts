// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits: string[] = ["Apple", "Mango", "Banana"];

if(favorite_fruits.includes("Banana")){
  console.log("I really like bananas!")
}

if(favorite_fruits.includes("Apple")){
  console.log("Apples are dilicious!")
}

if(favorite_fruits.includes("Mango")){
  console.log("I enjoy Mangoes!")
}

if(favorite_fruits.includes("grapes")){
  console.log("I enjoy Grapes!")
}

if(favorite_fruits.includes("Orange")){
  console.log("Oranges are dilicious!")
}

// check specific fruits using independent if statements
let a = favorite_fruits.includes("Apple");
console.log(a)

let b = favorite_fruits.includes("Grapes");
console.log(b)

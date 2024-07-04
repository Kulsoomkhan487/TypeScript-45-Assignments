// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// version 1
console.log("1st version where align color is Green")
let aLien_CoLor = "Green"
if(aLien_CoLor === "Green"){
  console.log("the player earned 5 points");
}else if(aLien_CoLor === "Yellow"){
  console.log("the player earned 10 points");
}else if(aLien_CoLor === "Red"){
  console.log("the player earned 15 points");
}else{
  console.log("unknown alien color")
}

// version 2
console.log("2nd version where align color is Yellow");
if (aLien_CoLor = "Yellow")
  if(aLien_CoLor === "Green"){
    console.log("the player earned 5 points");
  }else if(aLien_CoLor === "Yellow"){
    console.log("the player earned 10 points");
  }else if(aLien_CoLor === "Red"){
    console.log("the player earned 15 points");
  }else{
    console.log("unknown alien color")
  }

  // version 3
  console.log("3rd version where align color is red")
  if(aLien_CoLor = "Red")
  if(aLien_CoLor === "Green"){
    console.log("the player earned 5 points");
  }else if(aLien_CoLor === "Yellow"){
    console.log("the player earned 10 points");
  }else if(aLien_CoLor === "Red"){
    console.log("the player earned 15 points");
  }else{
    console.log("unknown alien color")
  }
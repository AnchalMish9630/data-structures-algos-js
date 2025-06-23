function greetName1(name){
    console.log("Namaste" + " " +name)    // function is doing console 
}
greetName1("Anchal")

// returning the value from the funtion 

function greet(name){
    return("Namaste" + " " +name)  // function is returning the value 
}
const greetName = greet("KZ");
console.log(greetName);

// JavaScript will overwrite the first one with the second one, 
// because functions declared with the same name will not coexist — the last one wins.


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

















const github_api= "https://github.com/AnchalMish9630"
const user = fetch(github_api);
console.log(user);


const cart=["shirt", "dhoti","kurta"]
const pr = createOrder (cart);
pr.then(function(){
   console.log("print", cart)
})

function createOrder (cart){
    const pr = new Promise((resolve, reject)=>{
        if(!validCart(cart)){
            const err=new Error("Not valid")
            reject(err)
        }
        const orderId = "1233"
        if(orderId){
            resolve(orderId)
        }
    })
    return pr;

}

function validCart(cart){
    return true
}


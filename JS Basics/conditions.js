// // 1. Check if a person is eligible to vote or not

// function elegibility(age) {
//     if (age >= 18) {
//         return "Eligible to vote";
//     } else {
//         return "Not eligible";
//     }
// }

// const personToVote = elegibility(28);
// console.log(personToVote);


// // 2. Voting eligibility with input validation:
// //    - If age < 1         => Invalid input
// //    - If age < 18        => Not eligible
// //    - If age >= 18       => Eligible

// function elegibilityV1(age) {
//     if (age < 1) {
//         return "Invalid input, age is " + " " + age;
//     } else if (age < 18) {
//         return "Not eligible, age is " + " " + age;
//     } else {
//         return "Eligible, age is" + " " + age;
//     }
// }

// const personToVote1 = elegibilityV1(23);
// console.log(personToVote1);










console.log("hello");
function createUser(user,price){
    debugger
    this.user=user;
    this.price=price;
}
createUser.prototype.increment = function(){
    debugger
    price++
};


// Even if you accidentally use the wrong casing (protoType instead of prototype), the JavaScript engine doesn't complain — it just silently creates a new property named protoType.
// Meanwhile, when you do createUser.prototype, you're accessing the actual built-in prototype, which is separate and untouched by your typo


createUser.prototype.print = function(){
    console.log(`Print price: ${this.price}`)
};

const chai= createUser("as",24)
const tea= createUser("asdf",20);
console.log(chai);

chai.print();


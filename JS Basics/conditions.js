// 1. Check if a person is eligible to vote or not

function elegibility(age) {
    if (age >= 18) {
        return "Eligible to vote";
    } else {
        return "Not eligible";
    }
}

const personToVote = elegibility(28);
console.log(personToVote);


// 2. Voting eligibility with input validation:
//    - If age < 1         => Invalid input
//    - If age < 18        => Not eligible
//    - If age >= 18       => Eligible

function elegibilityV1(age) {
    if (age < 1) {
        return "Invalid input, age is " + " " + age;
    } else if (age < 18) {
        return "Not eligible, age is " + " " + age;
    } else {
        return "Eligible, age is" + " " + age;
    }
}

const personToVote1 = elegibilityV1(23);
console.log(personToVote1);

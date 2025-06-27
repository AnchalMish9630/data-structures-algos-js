// 🔰 Pattern 1: Left-aligned triangle with (i) stars per row, starting from 0 stars
// Output:
// (blank)
//  *
//  * *
//  * * *
//  * * * *

for (let i = 0; i < 5; i++) {
    let star = ""; // 🔁 Reset `star` string on each new row (i)
    for (let j = 0; j < i; j++) { // ▶ j runs from 0 up to (i-1) => runs i times
        // First time: i=0 → j<0 → ❌ inner loop won’t run
        // i=1 → j=0 → runs once
        // i=2 → j=0,1 → runs twice
        // and so on...
        star = star + " " + "*"; // ⏬ Append "* " each time j loop runs
    }
    console.log(star); // ✅ Print final star string for current row
}



// 🔰 Pattern 2: Left-aligned triangle with (i + 1) stars per row
// Output:
//  *
//  * *
//  * * *
//  * * * *
//  * * * * *

for (let i = 0; i < 5; i++) {
    let star = ""; // 🔁 Reset `star` string for new row
    for (let j = 0; j < i + 1; j++) { // ▶ j loop runs (i + 1) times
        // i=0 → j=0 → runs once
        // i=1 → j=0,1 → runs twice
        // i=2 → j=0,1,2 → runs 3 times
        // and so on...
        star = star + " " + "*"; // ⏬ Build star line step-by-step
    }
    console.log(star); // ✅ Print built-up row of stars
}





let n=5

for (let i = 1; i <= 5; i++) {
    let num = "";
    for (let j = 1; j <= n+1-i; j++) {
        num = num + " " + (j )

    }
    console.log(num)
}



// when i and j starts from 1 

for (let i = 1; i <= 5; i++) {
    let num = "";
    for (let j = 1; j <=i; j++) {
        num = num + " " + (i )

    }
    console.log(num)
}


let num = 5
for (let i = 0; i < num; i++) {
    let row = "";
    for (let j = 0; j < num-i ; j++) {
        row = row + " " + (j+1)

    }
    console.log(row)
}


let num = 5
for (let i = 0; i < num; i++) {
    let row = "";
    for (let j = 0; j < num-i ; j++) {
        row = row + " " + "*"

    }
    console.log(row)
}





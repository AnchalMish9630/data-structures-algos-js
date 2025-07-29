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
    console.log(star); // ✅ Print stars for current row
}



console.log("\n----------------\n");


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
    console.log(star);
}



console.log("\n----------------\n");


// 🔰 Pattern 3: Inverted Number Triangle using decreasing j range (j starts at 1)
// Output:
//  1 2 3 4 5
//  1 2 3 4
//  1 2 3
//  1 2
//  1
let n = 5;

for (let i = 1; i <= 5; i++) {
    let num = "";
    for (let j = 1; j <= n + 1 - i; j++) {
        num = num + " " + j;
    }
    console.log(num);
}



console.log("\n----------------\n");


// 🔰 Pattern 4: Number Triangle with repeated row number
// Output:
//  1
//  2 2
//  3 3 3
//  4 4 4 4
//  5 5 5 5 5
for (let i = 1; i <= 5; i++) {
    let num = "";
    for (let j = 1; j <= i; j++) {
        num = num + " " + i;
    }
    console.log(num);
}



console.log("\n----------------\n");


// 🔰 Pattern 5: Inverted Number Triangle (starting from 1)
// Output:
//  1 2 3 4 5
//  1 2 3 4
//  1 2 3
//  1 2
//  1
let num = 5;
for (let i = 0; i < num; i++) {
    let row = "";
    for (let j = 0; j < num - i; j++) {
        row = row + " " + (j + 1);
    }
    console.log(row);
}



console.log("\n----------------\n");


// 🔰 Pattern 6: Inverted Star Triangle
// Output:
//  * * * * *
//  * * * *
//  * * *
//  * *
//  *
for (let i = 0; i < num; i++) {
    let row = "";
    for (let j = 0; j < num - i; j++) {
        row = row + " " + "*";
    }
    console.log(row);
}




//      *    
//     ***   
//    *****  
//   ******* 
//  *********
//  *********     
//   *******    
//    *****   
//     ***  
//      * 



// Function to print the top half of a diamond (pyramid shape)
function printloop(n) {
   for (let i = 0; i < n; i++) {
      let row = ""
      
      // Add leading spaces
      for (let j = 0; j < n - (i + 1); j++) {
         row = row + " "
      }

      // Add stars for current row
      for (let k = 0; k < (2 * i + 1); k++) {
         row = row + "*"
      }

      // Add trailing spaces (optional for symmetry)
      for (let j = 0; j < n - i - 1; j++) {
         row = row + " "
      }

      console.log(row)
   }
}

// Function to print the bottom half of a diamond (inverted pyramid)
function printloop2(n) {
   for (let i = 0; i < n; i++) {
      let row = ""

      // Add leading spaces
      for (let j = 0; j < i; j++) {
         row = row + " "
      }

      // Add stars for current row
      for (let k = 0; k < (2 * n - (2 * i + 1)); k++) {
         row = row + "*"
      }

      // Add trailing spaces (optional for symmetry)
      for (let j = 0; j < n - i; j++) {
         row = row + " "
      }

      console.log(row)
   }
}

// Call both functions to print full diamond pattern (with center row repeated)
printloop(5);
printloop2(5);



function print(n) {
   let space = 2 * (n - 1);
   for (let i = 0; i < n; i++) {
      let row = "";
      for (let j = 1; j <= i + 1; j++) {
         row = row + j;
      }
      for (let k = 0; k < space; k++) {
         row = row + "_"
      }
      for (let k = i + 1; k >= 1; k--) {
         row = row + k
      }
      console.log(row)
      space = space - 2
   }

}
print(5)


// Console
//  1        1
//  12      21
//  123    321
//  1234  4321
//  1234554321






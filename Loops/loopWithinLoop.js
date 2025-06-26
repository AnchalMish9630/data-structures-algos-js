// Pattern 1: Standard nested loop with fixed range
// Outer loop runs i = 0 to 2 (3 times)
// Inner loop runs j = 0 to 2 (3 times for each i)

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log("i: " + i + "    j: " + j);
    }
}

/*
📤 Console Output:
i: 0    j: 0
i: 0    j: 1
i: 0    j: 2
i: 1    j: 0
i: 1    j: 1
i: 1    j: 2
i: 2    j: 0
i: 2    j: 1
i: 2    j: 2
*/



// Pattern 2: Inner loop depends on outer loop variable
// Outer loop runs i = 0 to 2
// Inner loop runs from j = 0 to j < i → runs i times

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i; j++) {
        console.log("i: " + i + "    j: " + j);
    }
}

/*
📈 Inner Loop Iterations:
i = 0 → 0 times
i = 1 → j = 0       → 1 time
i = 2 → j = 0, 1    → 2 times

📤 Console Output:
i: 1    j: 0
i: 2    j: 0
i: 2    j: 1
*/

// Pattern 3: Inner loop always runs 4 times (0 to 3)
// Outer loop runs i = 0 to 2
// Inner loop runs j = 0 to 3

for (let i = 0; i < 3; i++) {
    for (let j = 0; j <= 3; j++) {
        console.log("i: " + i + "    j: " + j);
    }
}

/*
📈 Inner Loop Iterations:
Each time, j = 0, 1, 2, 3 → 4 times

📤 Console Output:
i: 0    j: 0
i: 0    j: 1
i: 0    j: 2
i: 0    j: 3
i: 1    j: 0
i: 1    j: 1
i: 1    j: 2
i: 1    j: 3
i: 2    j: 0
i: 2    j: 1
i: 2    j: 2
i: 2    j: 3
*/



// Pattern 4: Inner loop runs 'i' times, counting down
// Outer loop runs i = 0 to 3
// Inner loop starts from j = i to 1 (j > 0)

for (let i = 0; i < 4; i++) {
    for (let j = i; j > 0; j--) {
        console.log("i: " + i + "    j: " + j);
    }
}

/*
📉 Inner Loop Iterations:
i = 0 → 0 times
i = 1 → j = 1
i = 2 → j = 2, 1
i = 3 → j = 3, 2, 1

📤 Console Output:
i: 1    j: 1
i: 2    j: 2
i: 2    j: 1
i: 3    j: 3
i: 3    j: 2
i: 3    j: 1
*/

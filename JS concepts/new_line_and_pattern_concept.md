
# ⭐ JavaScript Pattern Printing & New Line Concept

## 💡 Doubt: Will the `k` loop go to a new line?

### ❓ Code Snippet:

```js
let num = 5;
for (let i = 0; i < num; i++) {
    let row = "";

    // Prints spaces before stars (to shift stars to the right)
    for (let j = 0; j < num - (i + 1); j++) {
        row = row + " ";
    }

    // Appends stars after spaces
    for (let k = 0; k < i + 1; k++) {
        row = row + "*";
    }

    // Print the complete row on one line
    console.log(row);
}
```

### 🧠 Explanation:

- The **`k` loop does NOT print to a new line**.
- JavaScript only moves to a new line when `console.log()` or `\n` is used.
- Here, both the `j` loop (spaces) and `k` loop (stars) are just **building the same `row` string**.
- Finally, `console.log(row)` prints the **entire line once per `i`**.

### ✅ Output:

```
    *
   **
  ***
 ****
*****
```

Each row consists of:
- `num - i - 1` spaces
- `i + 1` stars

---

## 📘 Summary of Pattern Types & New Line Concept

| 🔢 Pattern Type         | 💡 Inner Loop Condition     | ✨ Output Direction | 🧾 New Line Behavior |
|------------------------|-----------------------------|---------------------|----------------------|
| Right-Aligned Triangle | `j < num - i - 1`, `k <= i` | Right side aligned  | Only `console.log()` creates new line |
| Left-Aligned Triangle  | `j <= i`                    | Left side aligned   | Each row printed at end of `i` loop |
| Inverted Left-Aligned  | `j < i`, `i--` in outer loop| Decreasing stars    | Same – one row per `i` loop |

---

### 🧪 Tip for Testing:
Try adding this inside the `k` loop to observe it in action:

```js
console.log("building:", row);
```

You’ll notice **each `k` adds to the same line**, not a new line.

---

Happy Coding! 💻✨

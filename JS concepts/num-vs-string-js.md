
# 🧠 JavaScript: Number vs String in Pattern Printing

Understanding when JavaScript treats values as **numbers** or **strings** is crucial for pattern questions and debugging.

---

## ✅ How to Know: Number vs String

### 🧠 Rule 1: If **any operand is a string**, `+` means **string concatenation**.

```js
"2" + 2   // → "22"
2 + "2"   // → "22"
```

### 🧠 Rule 2: If **both operands are numbers**, `+` means **mathematical addition**.

```js
2 + 2   // → 4
```

---

## 🔍 How to Know What `num` Is?

| Declaration         | Initial Value     | Treated As  |
|---------------------|------------------|--------------|
| `let num = 0;`      | Number            | Number       |
| `let num = "";`     | Empty string      | String       |

---

## 🧪 Examples

### ➤ Treated as **Number**

```js
let num = 0;

for (let i = 0; i < 3; i++) {
    num += 2;
}

console.log(num); // 6
```

### ➤ Treated as **String**

```js
let num = "";

for (let i = 0; i < 3; i++) {
    num += 2;
}

console.log(num); // "222"
```

---

## 📊 Summary Table

| Pattern Type            | Expression Used           | Output Looks Like | Why it Works That Way                            |
|-------------------------|----------------------------|--------------------|--------------------------------------------------|
| Repeating same number   | `num += (i + 1)`           | `22`, `333`        | `(i+1)` is constant per row                      |
| Increasing number series| `num += " " + (j + 1)`     | `1 2 3`            | `(j+1)` changes in each loop iteration           |
| Number Addition         | `num = num + (i + 1)`      | `4`, `6`, etc.     | Works only if `num` is a number                  |
| Misleading Addition     | `num = "" + 2 + 2`         | `"22"`             | First `""` makes it a string, then concatenation |

---

## ⚠️ Gotcha Example: JavaScript is Left-to-Right

```js
"" + 5 + 5   // → "55"
5 + 5 + ""   // → "10"
```

### Why?
- `"" + 5` → `"5"` → `"5" + 5` → `"55"`
- `5 + 5` → `10` → `10 + ""` → `"10"`

---

## ✅ Best Practice

| Goal               | Declare Variable As     | Why                              |
|--------------------|--------------------------|-----------------------------------|
| Pattern printing   | `let str = ""`           | You want to build a string        |
| Mathematical sum   | `let sum = 0`            | You want numeric calculation      |

---

> ✨ Tip: If your output looks weird like `"22"` instead of `4`, **check if your variable is a string!**




// Find even odd element using   "filter" inbuilt method


const arr = [2, 3, 4, 5, 2, 1, 4, 5, 3, 2, 4, 3, 7, 8, 8, 9, 9, 6, 5]
arr.filter(item => item % 2 === 0)
console.log(arr)


// Search an element using inbuilt method "indexOf" 

console.log(arr.indexOf(3));
console.log(arr.indexOf(98));

// Console
//  1
// -1


// Count negative using filter

const arr1 =[2,-9,17,0,1,-10,-4,8]

const negative=arr1.filter(item => item<0).length 
// will return an aray then find length(will contain only 3 elements)
console.log(negative)  


// Count negative using reduce method ]

const arr3 =[2,-9,17,0,1,-10,-4,8]
const result = arr3.reduce((acc, curr) =>
   curr < 0 ? acc+1 : acc, 0
)
console.log(result);


// Find maximum number using reduce 
const arr4 = [2, -9, 17, 0, 1, -10, -4, 8]

if (arr4.length === 0) {
   console.log("Array is empty")
}
else {
   const result = arr4.reduce((acc, curr) =>
      acc < curr ? acc = curr : acc, -Infinity
   )
   console.log(result);
}



// Find max and min both using reduce method

const arr5 = [2, -9, 17, 0, 1, -10, -4, 8]

if (arr5.length === 0) {
   console.log("Array is empty")              // if no element then return msg for empty array.
}
else {
   const result = arr5.reduce((acc, curr) => {  
    //   console.log(acc,curr)                           
 // acc is an object that is conatine min and max: {
                                                //   "max": 2,
                                                //   "min": 2
                                                //  } 

      return {
         min : acc.min > curr ? acc.min = curr : acc.min,
         max : acc.max < curr ? acc.max = curr : acc.max
      };
   },
      { max: -Infinity,min: Infinity }
   )
   console.log(result.min, result.max);
}


//                                   arr.reduce((acc, curr) => {
//                                   acc = { min: ..., max: ... }
//                                   curr = current number from array
//                                   }, { min: Infinity, max: -Infinity });
//                                    🤔 Ab aapka doubt:
// Agar min: aur max: keys hain, to phir andar comparison mein acc.min aur acc.max kyun likha hai?


//                                     Final Answer:
//                                     min: aur max: hum return object ke keys define karne ke liye likhte hain
//                                     acc.min aur acc.max hum existing value access karne ke liye likhte hain
//                                     🔁 Toh acc.min ka matlab hai → object ke andar se min value nikaalna
//                                     Aur min: ka matlab hai → ek naye object me key banani
// and vo return object result hoga bad me result.keys (min/max) krke us key ki value fetch kra denge




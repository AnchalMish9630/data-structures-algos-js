// search any elementinside array

let arr = [4, 2, 0, 10, 8, 40]

function search(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        if (k === arr[i])
            return i;
    }
    return -1;
}

let searchResult = search(arr, 8);
console.log(searchResult);
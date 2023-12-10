//  Search an Element in an array

// using linear search algorith.

function elementSearch(arr, val) {
    let length = arr.length;
    for(let i = 0; i < length; i++) {
        if(val == arr[i]) {
            return i;
        }
    }
    return -1;
}
let arr = [1,2,3,4,5];
let val = 5;
let resutlElement = elementSearch(arr, val);
console.log(resutlElement);
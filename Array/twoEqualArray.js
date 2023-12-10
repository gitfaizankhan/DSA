//  Check if two arrays are equal or not


// in this problem we have used sort() for sorting.
// stack for storing temp data for compare with element.
function twoEqualArray(arr1, arr2, n) {
    let arr = [];

    arr1.sort((a,b) =>{
        return a-b;
    });
    arr2.sort((a,b) =>{
        return a-b;
    });

    for(let i = 0; i < n; i++) {
        arr.push(arr1[i]);
        let length = arr.length;
        let tempData = arr[length-1];
        if(arr2[i] == tempData) {
            arr.pop();
        }
    }
    return arr.length == 0?"Equal":"Not Equal";
}
let N = 5
let A = [ 1, 2, 5, 4, 0];
let B = [ 2, 4, 5, 0, 1];
let result = twoEqualArray(A, B, N);
console.log(`Array1: [ 1, 2, 5, 4, 0] and [ 2, 4, 5, 0, 1] Are:`, result);
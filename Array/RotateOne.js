// Cyclically rotate an array by one

// first solutions

// function rotate(arr, n) {
//     let data = arr.pop();
//     arr.unshift(data);
//     return arr;
// }


// second solution;

function rotate(arr, n){
    let num = [];
    num[0]  = arr[n-1];
    for(let i =0; i < n-1; i++) {
        num[i+1]  = arr[i]
    }
    return num;
}


let result = rotate([1,2,3,4,5,6], 6);
console.log(result);
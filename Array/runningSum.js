function runningSum(arr) {
    let n = arr.length;
    
    for(let i = 1; i < n; i++) {
        arr[i] = arr[i] + arr[i-1];
    }
    return arr;
}

let result = runningSum([3, 1, 2, 10, 1]);
console.log(result);
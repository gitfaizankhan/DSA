function nextGreatest(arr, n) {
    let greater = arr[n-1];
    arr[n-1] = -1;
    for(let i = n-2; i >= 0; i--) {
        let num = arr[i];
        arr[i] = greater;
        if(num > greater) {
            greater = num;
        }
    }
    return arr;
}

// Test the function
const arr = [16, 17, 4, 3, 5, 2];
const n = arr.length;
const output = nextGreatest(arr, n);
console.log(output.join(' ')); // Output: 17 5 5 5 2 -1

function minElement(arr, n) {
    let min = arr[0];
    for(let i = 1; i < n; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let result = minElement([5,6,2,9,-2], 5);
console.log(result);
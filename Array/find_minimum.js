function find_minimum(arr, n) {
    let min = Number.MAX_VALUE;
    for(let i = 0; i < n; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let minimum = find_minimum([5, 6, 2, 9, 2], 5);
console.log(minimum);
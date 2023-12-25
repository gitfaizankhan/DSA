function getMinMax(arr, n) {
    let minmax = [];
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    for(let i = 0; i < n; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }

        if(arr[i] > max) {
            max = arr[i];
        }
    }
    minmax[0] = min;
    minmax[1] = max;
    return minmax;
}


let minmax = getMinMax([3, 2, 1, 56, 10000, 167], 6);
console.log(minmax);
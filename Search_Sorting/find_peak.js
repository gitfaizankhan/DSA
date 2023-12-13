function find_peak(arr) {
    let n = arr.length;

    if (n == 1) {
        return 0;
    }
    if(arr[0] >= arr[1]){
        return arr[0];
    }

    if(arr[n-1] >= arr[n-2]) {
        return arr[n-1];
    }

    for(let i =0; i < n; i++) {
        if(arr[i] >= arr[n-1] && arr[i] >= arr[i+1]) {
            return arr[i];
        }
    }
    return 0;
}

let result = find_peak([1,5,2,1,6,8,2,7, 2, 1, 3, 5, 6, 4]);
console.log(result);

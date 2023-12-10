var bubbleSort = function(arr, n) {
    for(let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] < key) {
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = key;
    }
    return arr;
}

let result = bubbleSort([2,1,4,3,5], 5);
console.log(result);
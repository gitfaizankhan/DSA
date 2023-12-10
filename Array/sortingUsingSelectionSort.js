function sortingUsingSelectionSort(arr) {
    let n = arr.length;
    
    for(let i = 0; i < n-1; i++) {
        let max_idx = i;
        for(let j = i+1; j < n; j++) {
            if(arr[j] > arr[max_idx]) {
                max_idx = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[max_idx];
        arr[max_idx] = temp;
    }
    return arr;
}

let result = sortingUsingSelectionSort([1,2,3,4,5]);
console.log(result);
function selection_sort(arr){
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

let result = selection_sort([3,5,1,6,2,8,4,9,2]);
console.log(result)
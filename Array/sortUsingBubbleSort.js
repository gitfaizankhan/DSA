function sortingUsingBubbleSort(arr) {
    let n = arr.length;
    for(let i = 0; i < n-1; i++) {
        for(let j = 0; j < n-i; j++) {
            if(arr[j] < arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

let result = sortingUsingBubbleSort([4,3,2,5,1]);
console.log(result);
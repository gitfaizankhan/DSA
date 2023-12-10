function searchInSort(arr, n, k) {
    let low = 0, high = n-1;
    while(low <= high) {
        let mid = Math.floor((low + high)/2);
        if(arr[mid] == k) {
            return 1;
        } else if(k > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid -1;
        }
    }
    return -1;
}

let result = searchInSort([1,2,3,4,5,6], 6, 6);
console.log(result);
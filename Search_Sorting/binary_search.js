function binary_search(arr, target) {
    let low = 0;
    let high = arr.length-1;

    while(low <= high) {
        let mid = Math.floor((low+high)/2);
        if(arr[mid] == target) {
            return mid;
        }
        if(arr[mid] > target) {
            high = mid - 1;
        }

        if(arr[mid] < target) {
            low = mid + 1;
        }
    }
    return -1;
}

let result = binary_search([-1,0,3,5,9,12], 9);
console.log(result);
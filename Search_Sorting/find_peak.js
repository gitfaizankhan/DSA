function find_peak(arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if ((mid === 0 || arr[mid] >= arr[mid - 1]) && (mid === arr.length - 1 || arr[mid] >= arr[mid + 1])) {
            return arr[mid];
        } else if (mid > 0 && arr[mid - 1] > arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    // This line is added to handle the case where the array is empty.
    return undefined;
}

let result = find_peak( [1,2,1,3,5,6,4]);
console.log(result);

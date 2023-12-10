// Find minimum and maximum element in an array.

/**
 * Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array.
 *  Input:
    N = 6
    A[] = {3, 2, 1, 56, 10000, 167}
    Output: 1 10000
    Explanation: minimum and maximum elements of array are 1 and 10000.
 */

function minAndMax(arr, n) {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    let result = [];

    for(let i = 0; i < n; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    result[0] = min;
    result[1] = max;
    return result;
}


let result = minAndMax([3, 2, 1, 56, 10000, 167], 6);
console.log(result);
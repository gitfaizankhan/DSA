/**
 *  Move all negative elements to end
    Given an unsorted array arr[] of size N having both negative and positive integers. 
    The task is place all negative element at the end of array without changing the order of positive element and negative element.

    
    Example 1:
    Input : N = 8, arr = [1, -1, 3, 2, -7, -5, 11, 6 ]
    Output : 1  3  2  11  6  -1  -7  -5

 *
 */

function segregateElements(arr, n) {
    let temp = [];
    for(let i = 0; i < n; i++) {
        if(arr[i] >= 0) {
            temp.push(arr[i]);
        }
    }

    for(let i = 0; i < n; i++) {
        if(arr[i] < 0) {
            temp.push(arr[i]);
        }
    }

    for(let i = 0; i < n; i++) {
        arr[i] = temp[i];
    }
    return arr;
}
let N = 8; 
let arr = [0, 1, -1, 3, 2, -7, -5, 11, 6];
let result = segregateElements(arr, N);
console.log(result);
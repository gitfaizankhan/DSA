/**
 *  Binary Array Sorting
 *  Given a binary array A[] of size N. The task is to arrange the array in increasing order.
    Note: The binary array contains only 0  and 1.

    Example 1:
    Input: 
    n = 5
    arr = [1, 0, 1, 1, 0]

    Output: 
    0 0 1 1 1

    Explanation: After arranging the elements in increasing order, elements will be as [0, 0, 1, 1, 1].
 */


function binarySort(A, N){
    let arr = [];
    for(let i = 0; i < N; i++){
        if(A[i] == 0){
            arr.push(A[i]);
        }
    }

    for(let i = 0; i < N; i++){
        if(A[i] == 1){
            arr.push(A[i]);
        }
    }

    for(let i = 0; i < N; i++){
        A[i] = arr[i]
    }
    return A;
}


let result = binarySort([1, 0, 1, 1, 0], 5)
console.log(result);
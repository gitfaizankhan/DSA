var bubbleSort = function(arr) {
    let n = arr.length;

    for(let i = 0; i < n-1; i++) {
        for(let k = 0; k < n-i; k++) {
            if(arr[k] < arr[k+1]) {
                let temp = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = temp;
            }
        }
    }
    return arr
}

let result  =  bubbleSort([5,2,4,1,3]);
console.log(result);
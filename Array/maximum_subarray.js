function maximun_subarray(arr) {
    let n = arr.length;
    let max_sum = Number.MIN_VALUE;
    let max_end = 0;
    for(let i = 0; i < n; i++) {
        max_end = max_end+arr[i];
        if(max_sum < max_end) {
            max_sum = max_end;
        }
        if(max_end < 0){
            max_end = 0;
        }
    }
    return max_sum;
}

let result = maximun_subarray([5,2,-4,-5, 3,-1,2,3,1]);
console.log(result);
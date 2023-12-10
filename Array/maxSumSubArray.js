function maxSubArray(arr) {
    let n = arr.length;
    let sum = 0, max_sum = Number.MIN_VALUE;

    for(let i = 0; i < n; i++) {

        max_sum = max_sum + arr[i];
        if(max_sum > sum) {
            sum = max_sum;
        }
        if(max_sum < 0) {
            max_sum = 0;
        }
    }
    return sum;
}

let result = maxSubArray([5, 2, -4, -5, -1, 2, 3]);
console.log(result);
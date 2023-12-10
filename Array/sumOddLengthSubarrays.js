function sumOddLengthSubarrays(arr) {
    let n = arr.length;
    let sum = 0;
    for(let i = 0; i < n; i++) {
        for(let j = i; j < n; j+=2) {
            for(let k = i; k <=j; k++) {
                sum = sum + arr[k]
            }
        }
    }
    return sum;
}

let result = sumOddLengthSubarrays([1,4,2,5,3]);
console.log(result);
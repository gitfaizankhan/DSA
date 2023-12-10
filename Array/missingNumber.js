// Missing number

function missingNumber(arr, n){
    let num = n * (n + 1) / 2;
    var sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return num - sum;
}

let result = missingNumber([1,2,4,5], 5);
console.log(result);
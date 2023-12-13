function two_sum(nums, target) {
    let n = nums.length;
    let arr = [2];
    for(let i = 0; i < n-1; i++) {
        let num1 = nums[i];
        for(let j = i+1; j < n; j++) {
            let num2 = nums[j];
            if((num1+num2) === target) {
                arr[0] = i;
                arr[1] = j;
                return arr;
            }
        }
    }
}

let result = two_sum([2,7,11,15], 9);
console.log(result);
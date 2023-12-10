function print_subArray(nums) {
    let n = nums.length;

    for(let i = 0; i < n; i++) {
        for(let j = i; j < n; j++) {
            let arr = [];
            let count = 0;
            for(let k = i; k <= j; k++) {
                arr[count] = nums[k];
                count++;
            }
            console.log(arr);
        }
    }
}

print_subArray([1,2,3,4,5]);
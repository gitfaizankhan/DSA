var getConcatenation = function(nums) {
    let length = nums.length;
    let arr = new Array(2*length);

    for(let i = 0; i < length; i++) {
        arr[i] = arr[i+length] = nums[i];
    }
    return arr;
}
let nums = [1,3,2,1];
let concatenatedArray = getConcatenation(nums);
console.log(concatenatedArray);
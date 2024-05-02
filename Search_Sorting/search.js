var search = function(nums, target) {
    let low = 0;
    let high = nums.length-1;
    while(low < high) {
        let mid = low + Math.floor((high-low)/2);
        if(target == nums[mid]){
            return mid;
        } else if(target > nums[mid]){
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}
let searchIdx = search([-1,0,3,5,9,12], 9);
console.log(searchIdx);
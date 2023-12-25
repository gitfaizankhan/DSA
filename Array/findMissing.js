var findMissing = function(arr, n) {
    let commDiff = Math.floor((arr[n-1] - arr[0])/n);
    
    let low = 0;
    let high = n-1;

    while(low < high){
        let mid = Math.floor((low+high)/2);

        if(arr[mid] != arr[0]+mid*commDiff){
            high = mid;
        } else {
            low = mid+1;
        }
    }
    return arr[0]+commDiff*low;
}


let missingNumber = findMissing([2, 4, 8, 10, 12, 14], 6);
console.log(missingNumber);
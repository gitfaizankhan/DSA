function maximumWealth(arr) {
    let n = arr.length;
    let maxWealth = Number.MIN_VALUE;
    
    for(let i = 0; i < n; i++) {
        let max = 0;
        for(let j = 0; j < arr[i].length; j++) {
            max = max + arr[i][j];
        }
        if(max > maxWealth) {
            maxWealth = max;
        }
    }
    return maxWealth;
}

let result = maximumWealth([[1,2,3],[3,2,1]]);
console.log(result);
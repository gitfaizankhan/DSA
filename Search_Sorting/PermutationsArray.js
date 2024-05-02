let permutations = function (a, b, k) {
    if(a.length !== b.length) {
        return false;
    }

    a.sort((x, y) => {
        return x-y;
    });
    b.sort((x, y)=>{
        return y-x;
    });
    let count = 0;
    for(let i = 0; i < a.length; i++) {
        if((a[i]+b[i]) >= k){
            count++;
        }
    }
    return count === a.length?true:false;
} 

// let isArrayPermutations = permutations([2, 1, 3], [7, 8, 9], 10);
// let isArrayPermutations = permutations([1, 2, 2, 1], [3, 3, 3, 4], 5);
// console.log(isArrayPermutations)
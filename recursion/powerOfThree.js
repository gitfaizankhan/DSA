class Solution{
    isPowerOfThree(n) {
        if(n === 1) return true;
        if(n <= 0 || n % 3 !== 0) return false;
        return this.isPowerOfThree(n/3);
    }
}

let solutio = new Solution();
console.log(solutio.isPowerOfThree(3));
console.log(solutio.isPowerOfThree(6));
console.log(solutio.isPowerOfThree(9));
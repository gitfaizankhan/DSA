class Solution {
    isPowerOfTwo(n) {
        if(n === 1) return true;
        if(n <= 0 || n % 2 !== 0) return false;
        return this.isPowerOfTwo(n/2);
    }
}

let solutio = new Solution();
console.log(solutio.isPowerOfTwo(1));
console.log(solutio.isPowerOfTwo(24));
console.log(solutio.isPowerOfTwo(32));
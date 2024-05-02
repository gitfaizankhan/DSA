class Solution{
    isPowerOfFour(n) {
        if(n === 1) return true;
        if(n <= 0 || n % 4 !== 0 ) return false;
        return this.isPowerOfFour(n / 4);
    }
}

let solutio = new Solution();
console.log(solutio.isPowerOfFour(1));
console.log(solutio.isPowerOfFour(4));
console.log(solutio.isPowerOfFour(8));
console.log(solutio.isPowerOfFour(16));
console.log(solutio.isPowerOfFour(20));
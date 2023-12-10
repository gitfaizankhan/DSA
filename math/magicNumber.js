function magicNumber(number) {
    // let number = 6; 
    let ans = 0;
    let base = 5;
    while(number > 0) {
        let last = number & 1;
        number = number >> 1;
        ans += last * base;
        base = base * 5;
    }
    console.log(ans);
} 


magicNumber(2);
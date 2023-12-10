function customersWealth(accounts) {
    let No_Of_Acc = accounts.length;
    
    let richestCusWealth = Number.MIN_VALUE;

    for(let i = 0; i < No_Of_Acc; i++) {
        let wealth = 0; 
        for(let j = 0; j < accounts[i].length; j++) {
            wealth = wealth + accounts[i][j];
        }
        if(wealth > richestCusWealth) {
            richestCusWealth = wealth;
        }
    }
    return richestCusWealth;
}

let cusWealth = customersWealth([[1, 5], [7, 3], [3, 5]]);
console.log(cusWealth);
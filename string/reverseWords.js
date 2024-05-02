var reverseWords = function(str) {
    let strArray = str.split(/\s+/);
    let low = 0;
    let high = strArray.length;
    while(low < high) {
        [strArray[low], strArray[high]] = [strArray[high], strArray[low]];
        low++;
        high--;
    }
    return strArray.join(" ").trim();
}

let reverseWordsString = reverseWords("the sky is blue");
console.log(reverseWordsString);
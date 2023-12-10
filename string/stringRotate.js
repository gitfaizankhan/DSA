function areRotation (s1, s2){
    let l1 = s1.length, l2 = s2.length;

    if(l1 != l2) {
        return false;
    }

    let s3 = s1 + s1;

    if(s3.includes(s2)) {
        return true;
    }
    return false;
}

let result = areRotation("for", "rfo");
console.log(result);
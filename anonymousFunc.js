let func = function (str1, substr1){

    let res = [];
    let newStr = substr1.concat('#', str1);
    console.log(newStr);
    res[0] = 0;
    for(let i=1; i<newStr.length; i++){
        let j = res[i-1];
        while(j>0 && (newStr.charAt(i)!==newStr.charAt(j))){
            j = res[j-1];
        }
        if(newStr.charAt(i) === newStr.charAt(j)){
            j++;
        }
        res[i] = j;
    }
    console.log(res);
    let result = [];

    for(let i=0; i<res.length; i++){
        if(res[i] === substr1.length){
            result.push(i-2*res[i]);
        }
    }
    if(result.length === 0){
        return [-1];
    }
    return result;
}

let result1 = func("malayalam", "ay");
console.log(result1);
let result2 = func("malayalam", "al");
console.log(result2);
let result3 = func("aaaaaa", "aaa");
console.log(result3);
let result4 = func("aaaaaa", "aba");
console.log(result4);

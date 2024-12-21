function solution(arr) {
    let maxNum = Math.max(...arr);
    let commonMultipleNum = maxNum;
    while(true){
        if(arr.every(num => {return commonMultipleNum % num === 0})) break;
        commonMultipleNum += maxNum;
    }
    var answer = commonMultipleNum;
    return answer;
}
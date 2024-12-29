function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++){
        answer.push(multiplyMatric(arr1[i], arr2));
    }
    return answer;
}

function multiplyMatric(x, y){
    const result = [];
    for(let i = 0; i < y[0].length; i++){
        let sum = 0;
        for(let j = 0; j < x.length; j++){
            sum += x[j] * y[j][i]
        }
        result.push(sum);
    }
    return result;
}


// 2,3,2   5,4,3
// 4,2,4 * 2,4,1
// 3,1,4   3,1,1
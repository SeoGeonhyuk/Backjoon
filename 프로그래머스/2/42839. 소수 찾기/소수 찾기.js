function solution(numbers) {
    var answer = 0;
    const sortedNumbers = numbers.split('').sort((a, b) => b - a);
    const numberArray = new Array(10).fill(0);
    sortedNumbers.forEach((num) => {
        numberArray[parseInt(num)] += 1;
    });
    
    const maxNum = parseInt(sortedNumbers.join(''));
    const dp = new Array(maxNum + 1).fill(true);
    dp[0] = false;
    dp[1] = false;
    for(let i = 2; i <= maxNum; i++){
        if(dp[i]){
            for(let j = 2; j <= Math.sqrt(i); j++){
                if(i % j === 0) {
                    dp[i] = false;
                    break;
                }
            }
            if(dp[i]){
                for(let j = i + i; j <= maxNum; j += i){
                    if(dp[j]) dp[j] = false;
                }
                
                const iString = '' + i;
                const numberArrayDp = [...numberArray];
                
                for(let j = 0; j < iString.length; j++){
                    numberArrayDp[parseInt(iString[j])] -= 1;
                    if(numberArrayDp[parseInt(iString[j])] < 0) {
                        dp[i] = false;
                        break;
                    }
                    
                }
            }
        }
    }
    for(let i = 2; i <= maxNum; i++){
        if(dp[i]) answer += 1;
    }
    
    return answer;
}
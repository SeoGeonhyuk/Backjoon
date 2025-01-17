function solution(x, y, n) {
    var answer = -1;
    const dp = Array.from(new Array(y + 1), (x) => -1);
    let possibleRoutes = [x];
    dp[x] = 0;
    while(possibleRoutes.length > 0) {
        const afterPossibleRoutes = [];
        for(let i = 0; i < possibleRoutes.length; i++){
            const [plusX, multiply2X, multiply3X] = [possibleRoutes[i] + n, possibleRoutes[i] * 2, possibleRoutes[i] * 3];
            if(dp[plusX] === -1 && plusX <= y) {
                dp[plusX] = dp[possibleRoutes[i]] + 1;
                afterPossibleRoutes.push(plusX)
            }
            if(dp[multiply2X] === -1 && multiply2X <= y) {
                dp[multiply2X] = dp[possibleRoutes[i]] + 1;
                afterPossibleRoutes.push(multiply2X)
            }
            if(dp[multiply3X] === -1 && multiply3X <= y) {
                dp[multiply3X] = dp[possibleRoutes[i]] + 1;
                afterPossibleRoutes.push(multiply3X);
            }
        }
        possibleRoutes = afterPossibleRoutes;
    }
    return dp[y];
}


// x => x + n, x * 2, x * 3

    // while(possibleRoutes.length > 0){
    //     const x = possibleRoutes.pop();
    //     if(x > y) continue;
    //     else if(x === y) {
    //         answer = dp.get(x);
    //         break;
    //     }
    //     else {
    //         const beforeCount = dp.get(x);
    //         if(!dp.has(x + n)) {
    //             dp.set(x + n, beforeCount + 1);
    //             possibleRoutes.push(x + n);
    //         }
    //         if(!dp.has(x * 2)) {
    //             dp.set(x * 2, beforeCount + 1);
    //             possibleRoutes.push(x * 2);
    //         }
    //         if(!dp.has(x * 3)) {
    //             dp.set(x * 3, beforeCount + 1);
    //             possibleRoutes.push(x * 3);
    //         }
    //     }
    // }
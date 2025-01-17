// function solution(x, y, n) {
//     var answer = -1;
//     const dp = Array.from(new Array(y + 1), (x) => -1);
//     let possibleRoutes = [x];
//     dp[x] = 0;
//     while(possibleRoutes.length > 0) {
//         const afterPossibleRoutes = [];
//         for(let i = 0; i < possibleRoutes.length; i++){
//             const [plusX, multiply2X, multiply3X] = [possibleRoutes[i] + n, possibleRoutes[i] * 2, possibleRoutes[i] * 3];
//             if(dp[plusX] === -1 && plusX <= y) {
//                 dp[plusX] = dp[possibleRoutes[i]] + 1;
//                 afterPossibleRoutes.push(plusX)
//             }
//             if(dp[multiply2X] === -1 && multiply2X <= y) {
//                 dp[multiply2X] = dp[possibleRoutes[i]] + 1;
//                 afterPossibleRoutes.push(multiply2X)
//             }
//             if(dp[multiply3X] === -1 && multiply3X <= y) {
//                 dp[multiply3X] = dp[possibleRoutes[i]] + 1;
//                 afterPossibleRoutes.push(multiply3X);
//             }
//         }
//         possibleRoutes = afterPossibleRoutes;
//     }
//     return dp[y];
// }

// DP로 풀 수 있는 방법이 있는 거 같다.
// 아니 나는 위의 해결법도 DP라고 생각했는데, DP는 0부터 y까지 전부 탐색하고 이를 일정한 점화식으로 구현해야 한다고 한다.
// 무슨 조건이 이렇게 빡세?
// DP 코드는 다음과 같았다.
function solution(x, y, n) {
    const dp = new Array(y + 1).fill(Infinity);
    dp[x] = 0;
    
    for(let i = x; i <= y; i++) {
        if(dp[i] === Infinity) continue;
        
        if(i + n <= y) dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
        if(i * 2 <= y) dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
        if(i * 3 <= y) dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
    }
    
    return dp[y] === Infinity ? -1 : dp[y];
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
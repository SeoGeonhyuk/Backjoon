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

// DP로 풀 수 있는 방법이 있는 거 같다.
// 아니 나는 위의 해결법도 DP라고 생각했는데, 내가 쓴 방법은 BFS에 가깝고 DP는 0부터 y까지 전부 탐색하고 이를 일정한 점화식으로 구현해야 한다고 한다.
// 무슨 조건이 이렇게 빡세?
// DP 코드는 다음과 같았다.
// 근데 확실히 해결법이 되게 명확하고 보기 쉬운거 같다.
// 일관된 점화식을 짜보려고 노력해봐야 할 거 같다.
// 특히 나는 x를 1씩 증가시키는 사고 방식이 정말 익숙하지 않은 거 같다...
// function solution(x, y, n) {
//     const dp = new Array(y + 1).fill(Infinity);
//     dp[x] = 0;
    
//     for(let i = x; i <= y; i++) {
//         if(dp[i] === Infinity) continue;
        
//         if(i + n <= y) dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
//         if(i * 2 <= y) dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
//         if(i * 3 <= y) dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
//     }
    
//     return dp[y] === Infinity ? -1 : dp[y];
// }

// x => x + n, x * 2, x * 3

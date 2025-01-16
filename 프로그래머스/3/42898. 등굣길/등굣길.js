// 이건 DP를 어느 정도 활용하긴 했지만 결과적으로 BFS 방식이라고 한다.
// 테스트 케이스와 정확성 테스트는 다 맞았지만, 효율성 테스트는 시간 초과가 떴다.
// DP를 활용해 현재 시점에서 항상 최댓값을 구해서 미래에 이전 것만 활용해보도록 하자.
// DP는 어려운 것 같다.
// function solution(m, n, puddles) {
//     var answer = 0;
//     const map = Array.from(Array(n), () => Array(m).fill(0))
//     map[0][0] = 1;
//     puddles.forEach(([x, y]) => {
//         map[y - 1][x - 1] = -1;
//     });
//     const possiblePaths = [[0, 0, 0]];
//     while(possiblePaths.length > 0) {
//         const [y, x, count] = possiblePaths.pop();
//         if(y === n - 1 && x === m - 1) {
//             if(map[y][x] === 0 || map[y][x] === count) {
//                 map[y][x] = count;
//                 answer += 1;
//             }
//             else if(map[y][x] > count) {
//                 map[y][x] = count;
//                 answer = 1;
//             }
//         }
//         else {
//             checkPossiblePath(y + 1, x, count, map, possiblePaths);
//             checkPossiblePath(y, x + 1, count, map, possiblePaths);
//         }
//     }
//     return answer % 1000000007;
// }

// function checkPossiblePath(y, x, count, map, possiblePaths) {
//     if(map.length > y && map[0].length > x && map[y][x] > -1) {
//         if(!map[y][x]) {
//            map[y][x] = count + 1;
//            possiblePaths.push([y, x, map[y][x]]);
//         }
//         else if(map[y][x] > 0 && map[y][x] > count) {
//             map[y][x] = count + 1;
//             possiblePaths.push([y, x, map[y][x]]);
//         }
//     }
// }

// 일단 직진은 가장 빠른 루트이므로, [0][i], [i][0]은 무조건 답이 정해져있다.
// 골인 지점은 두 개의 포인트로 둘러쌓여 있다.
// 반대로 말하면 해당 두 개의 포인트에 최저값으로 올 수 있는 경로들만 더한다면, 그것이 최저 경로인 것이다.
// 이것을 일반화 시켜 본다면....
// 특정 포인트는 해당 포인트에 위치할 수 있는 최저값과 해당 포인트로 갈 수 있는 루트 이 두개를 보관하고 있어야 한다.
// 이 두개를 활용해 다음 값에 최저값과 루트 경로를 구할 수 있을 것이다.
// 현재 위치의 최저값과 경로 수 => 이전 위치 1의 최저값과 이전 위치 2의 최저값을 비교한다.
// 만약 이전 위치 1의 최저값이 더 크다면, 이전 위치 1의 최저값 + 1과 경로가 현재 위치의 최저값과 경로 수가 된다.
// 그 반대면 마찬가지다.
// 만약 이전 위치 1의 최저값과 이전 위치 2의 최저값이 같다면, 공통 최저값 + 1과 이전 위치 1의 경로 + 이전 위치 2의 경로가 현재 위치의 최저값과 경로 수가 된다.
function solution(m, n, puddles) {
    var answer = 0;
    const map = Array.from(Array(n), () => Array(m).fill(0))
    for(let i = 0; i < m; i++) {
        map[0][i] = [i, 1];
    }
    for(let i = 1; i < n; i++) {
        map[i][0] = [i, 1];
    }
    puddles.forEach(([x, y]) => {
        map[y - 1][x - 1] = [-1, 0];
        if(y - 1 === 0) {
            for(let i = x; i < m; i++) map[y - 1][i] = [-1, 0];
        }
        else if(x - 1 === 0) {
            for(let i = y; i < n; i++) map[i][x - 1] = [-1, 0];
        }
    });
    for(let i = 1; i < n; i++){
        for(let j = 1; j < m; j++) {
            if(map[i][j][0] !== -1) {
                if(map[i - 1][j][0] === -1 && map[i][j - 1][0] === -1) map[i][j] = [-1, 0];
                else if(map[i - 1][j][0] === -1) map[i][j] = [map[i][j - 1][0] + 1, map[i][j - 1][1] % 1000000007];
                else if(map[i][j - 1][0] === -1) map[i][j] = [map[i - 1][j][0] + 1, map[i - 1][j][1] % 1000000007]
                else if(map[i - 1][j][0] < map[i][j - 1][0]) map[i][j] = [map[i - 1][j][0] + 1, map[i - 1][j][1] % 1000000007];
                else if(map[i - 1][j][0] > map[i][j - 1][0]) map[i][j] = [map[i][j - 1][0] + 1, map[i][j - 1][1] % 1000000007];
                else map[i][j] = [map[i][j - 1][0] + 1, (map[i - 1][j][1] + map[i][j - 1][1]) % 1000000007];
            }
        }
    }
    if(map[n - 2][m - 1][0] === -1) return (map[n - 1][m - 2][1]) % 1000000007;
    else if(map[n - 1][m - 2][0] === -1) return (map[n - 2][m - 1][1]) % 1000000007;
    else return (map[n - 2][m - 1][1] + map[n - 1][m - 2][1]) % 1000000007;
}
// 이후 문제를 풀어서 접근해봤는데, 1000000007을 활용해 나머지를 계산하는 부분에서 자바스크립트가 최대수를 처리하지 못해 에러가 발생한다는 사실을 알았다.
// 그래서 그냥 모든 케이스에 한 번씩 나머지를 구하는 과정을 적용했더니 모두 통과했다.
// DP의 원리를 이제서야 깨달은 거 같다.



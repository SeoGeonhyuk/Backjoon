function solution(maps) {
    // var answer = 0;
    // const visitedMap = new Map();
    // answer = DFS(maps, 0, 0, answer + 1, visitedMap);
    var answer = 0;
    answer = BFS(maps, 0, 0);
    return answer;
}

// 모든 케이스는 다 맞았으나, 효율성 테스트에서 탈락
// 아마도 재귀를 사용하는 DFS 특성상 BFS 보다 속도가 느리기 때문에 탈락을 하는 것으로 추정
// 개 헛고생...
// BFS는 재귀를 안쓴다고 한다.
// function DFS(maps, x, y, answer, visitedMap) {
//     if(x === maps[0].length - 1 && y === maps.length - 1) {
//         return answer;
//     }
//     else {
//         let right = answer;
//         let left = answer;
//         let bottom = answer;
//         let top = answer;
//         if((!visitedMap.has(`${x + 1},${y}`) && x + 1 <= maps[0].length - 1 && maps[y][x + 1]) || visitedMap.get(`${x + 1},${y}`) > answer + 1) {
//             visitedMap.set(`${x + 1},${y}`, answer + 1);
//             right = DFS(maps, x + 1, y, answer + 1, visitedMap);
//         }
//         if((!visitedMap.has(`${x - 1},${y}`) && x - 1 >= 0 && maps[y][x - 1]) || visitedMap.get(`${x - 1},${y}`) > answer + 1) {
//             visitedMap.set(`${x - 1},${y}`, answer + 1);
//             left = DFS(maps, x - 1, y, answer + 1, visitedMap);
//         }
//         if((!visitedMap.has(`${x},${y + 1}`) && y + 1 <= maps.length - 1 && maps[y + 1][x]) || visitedMap.get(`${x},${y + 1}`) > answer + 1) {
//             visitedMap.set(`${x},${y + 1}`, answer + 1);
//             bottom = DFS(maps, x, y + 1, answer + 1, visitedMap);
//         }
//         if((!visitedMap.has(`${x},${y - 1}`) && y - 1 >= 0 && maps[y - 1][x]) || visitedMap.get(`${x},${y - 1}`) > answer + 1) {
//             visitedMap.set(`${x},${y - 1}`, answer + 1);
//             top = DFS(maps, x, y - 1, answer + 1, visitedMap);
//         }
//         const result = [right, left, bottom, top].filter((val) => val !== answer && val !== -1);
//         return result.length === 0 ? -1 : Math.min(...result);
//     }
// }

// BFS 방식으로 다시 짜보자
// 알아보니까 최단 거리를 구하는 거는 BFS 알고리즘이 더 효율적이라고 한다.
function BFS(maps, x, y) {
    const visitedMap = new Map([[`${x},${y}`, 1]]);
    const roads = [[x, y]];
    
    for(let i = 0; i < roads.length; i++) {
        const [lx, ly] = roads[i];
        if(!visitedMap.has(`${lx - 1},${ly}`) && lx - 1 >= 0 && maps[ly][lx - 1]) {
            roads.push([lx - 1, ly]);
            visitedMap.set(`${lx - 1},${ly}`, visitedMap.get(`${lx},${ly}`) + 1);
        }
        if(!visitedMap.has(`${lx + 1},${ly}`) && lx + 1 <= maps[ly].length - 1 && maps[ly][lx + 1]) {
            roads.push([lx + 1, ly]);
            visitedMap.set(`${lx + 1},${ly}`, visitedMap.get(`${lx},${ly}`) + 1);
        }
        if(!visitedMap.has(`${lx},${ly - 1}`) && ly - 1 >= 0 && maps[ly - 1][lx]) {
            roads.push([lx, ly - 1]);
            visitedMap.set(`${lx},${ly - 1}`, visitedMap.get(`${lx},${ly}`) + 1);
        }
        if(!visitedMap.has(`${lx},${ly + 1}`) && ly + 1 <= maps.length - 1 && maps[ly + 1][lx]) {
            roads.push([lx, ly + 1]);
            visitedMap.set(`${lx},${ly + 1}`, visitedMap.get(`${lx},${ly}`) + 1);
        }
    }
    return visitedMap.has(`${maps[0].length - 1},${maps.length - 1}`) ? visitedMap.get(`${maps[0].length - 1},${maps.length - 1}`) : -1;
}
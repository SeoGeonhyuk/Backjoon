function solution(n, computers) {
    var answer = 0;
    const visitMap = new Map();
    computers.forEach((computer, index) => {
        if(!visitMap.has(index)) {
            DFS(visitMap, computers, index);
            answer += 1;
        }
    });
    return answer;
}


function DFS(visitMap, computers, index) {
    visitMap.set(index, true);
    computers[index].forEach((c, index) => {
        if(c && !visitMap.has(index)) {
            DFS(visitMap, computers, index);
        }
    });
}

// 평범한 DFS 문제다.
// 방문하지 않은 정점들을 따로 표시해두고
// 하나의 정점을 접근함으로써 해당 정점과 연결된 모든 정점을 탐색하고 또 그 연결된 정점들을 반복문으로 조회해서
// 해당 정점과 연결된 다른 정점들을 탐색...
// 이를 반복하면 하나의 네트워크가 완성된다.
// 이후 남은 정점들을 가지고 다시 한 번 DFS를 하면 끝
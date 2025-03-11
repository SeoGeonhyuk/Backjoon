function solution(n, wires) {
    var answer = Number.POSITIVE_INFINITY;
    const graphMap = new Map();
    for(let i = 0; i < wires.length; i++) {
        const [v1, v2] = wires[i];
        if(!graphMap.has(v1)) graphMap.set(v1, []);
        if(!graphMap.has(v2)) graphMap.set(v2, []);
        graphMap.get(v1).push(v2);
        graphMap.get(v2).push(v1);
    }
    for(let i = 0; i < wires.length; i++) {
        const [v1, v2] = wires[i];
        answer = Math.min(answer, Math.abs(DFS(v1, v2, graphMap) - DFS(v2, v1, graphMap)));
    }
    return answer;
}

function DFS(start, except, graphMap) {
    const dfsArray = [...graphMap.get(start)];
    const visitedMap = new Map();
    visitedMap.set(start, true);
    visitedMap.set(except, true);
    let count = 0;
    while(dfsArray.length) {
        const node = dfsArray.pop();
        if(!visitedMap.get(node)) {
            count += 1;
            dfsArray.push(...graphMap.get(node));
            visitedMap.set(node, true);
        }
    }
    return count;
}

// 간선을 하나씩 빼면서 DFS를 돌리면 될 거 같습니다.
// 일단 각 종류의 귤을 Map으로 수집해서 개수를 추적하고, 이를 큰 값을 기준으로 sort 시키고 reverse 시키면 될듯?
// 그리고 reverse된 것을 반복문으로 순회하고, 0 이하가 될 떄까지 차감하면 자동으로 최소 종류가 나올 것이다.
function solution(k, tangerine) {
    var answer = 0;
    const tangerineMap = tangerine.reduce((acc, cur) => {
        if(!acc.has(cur)) acc.set(cur, 0);
        return acc.set(cur, acc.get(cur) + 1);
    }, new Map())
    const tangerineArray = [...tangerineMap].sort((a, b) => a[1] - b[1]).reverse();
    tangerineArray.every(tangerine => {
        if(k <= 0) return false;
        else {
            k -= tangerine[1];
            answer += 1;
            return true;
        }
    })
    return answer;
}


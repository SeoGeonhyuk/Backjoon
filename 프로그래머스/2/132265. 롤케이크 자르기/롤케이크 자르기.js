function solution(topping) {
    var answer = 0;
    const cakeMap = new Map();
    const cakeSet = new Set();
    const sliceCakeSet = new Set();
    topping.forEach((t) => {
        if(!cakeMap.has(t)) cakeMap.set(t, 0);
        cakeMap.set(t, cakeMap.get(t) + 1);
        cakeSet.add(t);
    });
    let cakeTopping = cakeSet.size;
    topping.some((t) => {
        sliceCakeSet.add(t);
        cakeMap.set(t, cakeMap.get(t) - 1);
        if(cakeMap.get(t) === 0) cakeTopping -= 1;
        if(sliceCakeSet.size > cakeTopping) return true;
        else if(sliceCakeSet.size === cakeTopping) answer += 1;
        return false;
    })
    return answer;
}

// Map 객체를 확인해서 전체 종류의 개수를 측정하고
// Set 문을 활용한다.
// 1:4 -> 3 -> 2 -> 1
// 2:2 -> 1
// 3:1 -> 0
// 4:1 -> 4

// Set의 사이즈보다 현재 남아있는 원소의 종류보다 클 경우 중지
// Set의 사이즈와 남아있는 종류의 크기가 같을 경우 +1
// Set의 사이즈보다 현재 남아있는 원소의 종류가 더 클 경우 계속 진행

// 남아있는 종류 2
// 1:2 -> 1
// 2:1 -> 0
// 3:1 -> 0
// 4:1
function solution(friends, gifts) {
    var answer = 0;
    const presentMap = new Map();
    const resultMap = new Map();
    const stateSet = new Set();
    friends.forEach((friend) => {
        presentMap.set(friend, new Map());
        resultMap.set(friend, 0);
    });
    gifts.forEach((gift) => {
        const giftArr = gift.split(' ');
        (presentMap.get(giftArr[0])).set(giftArr[1], (presentMap.get(giftArr[0]).get(giftArr[1]) || 0) + 1);
        stateSet.add(giftArr.sort().join(" "));
    });

    for(let i = 0; i < friends.length; i++){
        for(let j = i + 1; j < friends.length; j++){
            const friendArr = [friends[i], friends[j]];
            stateSet.add(friendArr.sort().join(" "));
        }
    }
    let maxNum = Number.NEGATIVE_INFINITY;
    stateSet.forEach((state) => {
        const stateArr = state.split(" ");
        if(((presentMap.get(stateArr[0]).get(stateArr[1])) || 0) > (presentMap.get(stateArr[1]).get(stateArr[0]) || 0)) {
            resultMap.set(stateArr[0], resultMap.get(stateArr[0]) + 1);
            if(maxNum < resultMap.get(stateArr[0])) maxNum = resultMap.get(stateArr[0]);
        }
        else if(((presentMap.get(stateArr[0]).get(stateArr[1])) || 0) < (presentMap.get(stateArr[1]).get(stateArr[0]) || 0) ) {
            resultMap.set(stateArr[1], resultMap.get(stateArr[1]) + 1);
            if(maxNum < resultMap.get(stateArr[1])) maxNum = resultMap.get(stateArr[1]);
        }
        else {
            const person1 = [...presentMap.get(stateArr[0]).values()].reduce((acc, cur) => {
                return acc + cur;
            }, 0);
            const resultPerson1 = [...presentMap.entries()].reduce((acc, [key, value]) => {
                if(key !== stateArr[0]) return acc - (value.get(stateArr[0]) || 0);
                else return acc;
            }, person1);
    
            const person2 = [...presentMap.get(stateArr[1]).values()].reduce((acc, cur) => {
                return acc + cur;
            }, 0);
            const resultPerson2 = [...presentMap.entries()].reduce((acc, [key, value]) => {
                if(key !== stateArr[1]) return acc - (value.get(stateArr[1]) || 0);
                else return acc;
            }, person2);
            if(resultPerson1 > resultPerson2) {
                resultMap.set(stateArr[0], resultMap.get(stateArr[0]) + 1);
                if(maxNum < resultMap.get(stateArr[0])) maxNum = resultMap.get(stateArr[0]);
            }
            else if(resultPerson1 < resultPerson2) {
                resultMap.set(stateArr[1], resultMap.get(stateArr[1]) + 1);
                if(maxNum < resultMap.get(stateArr[1])) maxNum = resultMap.get(stateArr[1]);
            }
        }
    });
    answer = maxNum === Number.NEGATIVE_INFINITY ? 0 : maxNum;
    return answer;
}
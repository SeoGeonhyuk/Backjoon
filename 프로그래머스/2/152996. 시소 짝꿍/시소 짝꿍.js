function solution(weights) {
    var answer = 0;
    const sortedWeights = weights.sort((a, b) => a - b);
    const weightCountMap = new Map();
    const multiplyArray = [2, 3, 4];
    const weightMap = new Map();
    for(let i = 0; i < sortedWeights.length; i++){
        for(let j = 0; j < multiplyArray.length; j++){
            if(!weightMap.has(sortedWeights[i] * multiplyArray[j])) weightMap.set(sortedWeights[i] * multiplyArray[j], new Set([sortedWeights[i]]));
            else weightMap.get(sortedWeights[i] * multiplyArray[j]).add(sortedWeights[i]);
        }
        weightCountMap.set(sortedWeights[i], (weightCountMap.get(sortedWeights[i]) || 0) + 1);
    }
    [...weightCountMap.values()].forEach((val) => {
        if(val >= 2) answer += Math.floor((val * (val - 1)) / 2);
    });
    [...weightCountMap.entries()].forEach((key) => {
        const presentWeightSet = new Set();
        for(let j = 0; j < multiplyArray.length; j++){
            if(weightMap.has(key[0] * multiplyArray[j])) [...weightMap.get(key[0] * multiplyArray[j]).values()].forEach((val) => {
                if(val > key[0]) presentWeightSet.add(val);
            });
        }
        [...presentWeightSet.values()].forEach((val) => answer += key[1] * weightCountMap.get(val));
    });
    return answer;
}

// 100: 2 => 1
// 180: 1 => 0
// 270: 1 => 0
// 360: [180, 360]
// 540: [180, 270]
// 810: [270]
// 
// function solution(weights) {
//     var answer = 0;
//     const sortedWeights = weights.sort((a, b) => a - b);
//     const multiplyArray = [1, 2, 3, 4];
//     const weightMap = new Map();
//     const pairSet = new Set();
//     for(let i = 0; i < sortedWeights.length; i++){
//         for(let j = 0; j < multiplyArray.length; j++){
//             if(!weightMap.has(sortedWeights[i] * multiplyArray[j])) weightMap.set(sortedWeights[i] * multiplyArray[j], [sortedWeights[i]]);
//             else weightMap.get(sortedWeights[i] * multiplyArray[j]).push(sortedWeights[i]);
//         }
//     }
//     [...weightMap.values()].forEach((arr) => {
//         if(arr.length >= 2){
//             const permutatedArr = permutation(0, arr);
//             permutatedArr.forEach(val => pairSet.add(val));
//         }
//     });
//     answer = pairSet.size
//     return answer;
// }

// function permutation(startIndex, arr){
//     const result = [];
//     if(startIndex === arr.length - 1) return [];
//     else {
//         for(let i = startIndex + 1; i < arr.length; i++){
//             result.push(`${arr[startIndex]}, ${arr[i]}`);
//         }
//         return result.concat(permutation(startIndex + 1, arr));
//     }
// }


// 해시 써서 모든 값을 누적시키고
// 100:2
// 180:1
// 270:1
// 360:1

// 100일때 100, 200
// 100:2
// 180:1
// 200:2
// 300:2
// 360:2
// 400:2
// 540:1

// p2 permutation을 사용하면 풀 수 있는 문제!
// 100: 100
// 180: 180
// 200: 100
// 270: 270
// 300: 100
// 360: 180, 360
// 400: 100
// 540: 180, 270
// 720: 180, 360
// 810: 270
// 1080: 270, 360

// Set를 활용해서 중복을 제거한다.
// 일단 내부에 같은 게 나올 경우 해당 조합의 경우의 수를 구하면 된다.
// 이 다음이 문제인데, 그것은 간단하다. 만약 종류 배열에 대해서 추가하면 될 것이다.

// 100, 180, 200, 270, 300, 360, 400, 540, 720, 810, 1080 
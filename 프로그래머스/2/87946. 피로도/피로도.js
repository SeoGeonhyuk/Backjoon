// function solution(k, dungeons) {
//     var answer = 0;
//     const dungeonMap = new Map();
//     const sortedDungeons = dungeons.sort((a, b) => {
//         if(a[0] !== b[0]) return b[0] - a[0];
//         return a[1] - b[1]
//     });
//     console.log(sortedDungeons);
//     sortedDungeons.forEach((dungeon) => {
//         if(!dungeonMap.has(dungeon[0])) dungeonMap.set(dungeon[0], []);
//         dungeonMap.get(dungeon[0]).push(dungeon[1]);
//     });
//     while(true) {
//         dungeonKeys = [...dungeonMap.keys()].sort((a, b) => b - a);
//         if(k < dungeonKeys[dungeonKeys.length - 1]) break
//         else {
//             for(let i = 0; i < dungeonKeys.length; i++){
//                 if(k >= dungeonKeys[i]){
//                     k -= dungeonMap.get(dungeonKeys[i])[0];
//                     answer += 1;
//                     break;
//                 }
//             }
//         }
//     }
//     return answer;
// }

// 가장 좋은 방법은 일단 최소 필요 코스트가 높은 순으로 정렬
// 그 사이에서 가장 작은 순으로 정렬
// 일단 k의 범위 안에서 가능한 key들을 수집하고 그 중에서 가장 높은 key를 수집
// 가장 높은 key 사이에서 가장 낮은 비용을 가진 아이 수용

// 1,2,3
// 1,3,2
// 3,1,2
// 3,2,1
// 2,1,3
// 2,3,1

// 하나씩 가져오면 되는데 이러면 slice를 써야 된다...(시간이 오래 걸림)
// 그러므로 반복문을 활용해서 start 지점을 만들어서 slice를 없애는 방식을 사용하자.

// 반복문으로 하나씩 뽑고
// 1234
// 1, [234] => (1, 2, [34]), (1, 3, [24]), (1, 4, [23])
// 2, [134] => 


function permutation(arr) {
    if(arr.length === 1)
        return [arr];
    else {
        const result = [];
        for(let i = 0; i < arr.length; i++) {
            const pArray = permutation([...arr.slice(0, i), ...arr.slice(i + 1)]);
            pArray.forEach((p) => {
                result.push([arr[i], ...p]);
            });
        }
        return result;
    }
}

function solution(k, dungeons){
    var answer = -1;
    const indexArray = [];
    for(let i = 0; i < dungeons.length; i++){
        indexArray.push(i);
    }
    const orderArray = permutation(indexArray);
    orderArray.forEach((order) => {
        let count = 0;
        let cloneK = k;
        order.every((o) => {
            if(cloneK >= dungeons[o][0]){
                cloneK -= dungeons[o][1];
                count += 1;
                return true;
            }
            else return false;
        });
        if(answer < count) answer = count;
    });
    return answer;
}


// 1234에 대한 것만 구하는 것을 목표로 해보자.
// [1] 
//     [2]
//         [3,4]
//         [4,3]
//     [3]
//         [2]
//             [4]
//     [4]
//         [2]
//         [3]
// [2]
// [3]
// [4]

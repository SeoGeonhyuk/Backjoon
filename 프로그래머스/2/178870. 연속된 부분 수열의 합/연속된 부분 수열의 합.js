// let partSequenceLength = Number.POSITIVE_INFINITY;
// function solution(sequence, k) {
//     var answer = [sequence.length - 1, 0]
//     const indexMap = new Map();
//     indexMap.set(0, sequence.length - 1);
//     indexMap.set(1, 0);
//     const sum = sequence.reduce((acc, cur) => {
//         return acc + cur;
//     }, 0);
//     twoPointer(sequence, 0, Math.floor((sequence.length - 1) / 2), sum, k, indexMap);
//     twoPointer(sequence, Math.floor((sequence.length - 1) / 2), Math.floor((sequence.length - 1) / 2), sum, k, indexMap);
//     twoPointer(sequence, Math.floor((sequence.length - 1) / 2), sequence.length - 1, sum, k, indexMap);
//     answer = [indexMap.get(0), indexMap.get(1)];
//     return answer;
// }

// function twoPointer(sequence, startIndex, lastIndex, sum, k, indexMap){
//     if(sum === k && partSequenceLength > lastIndex - startIndex) {
//         partSequenceLength = lastIndex - startIndex;
//         indexMap.set(0, startIndex);
//         indexMap.set(1, lastIndex);
//         return;
//     }
//     else if(sum === k && partSequenceLength === lastIndex - startIndex && indexMap.get(0) > startIndex){
//         indexMap.set(0, startIndex);
//         indexMap.set(1, lastIndex);
//         return;
//     }
//     else if(lastIndex > startIndex && sum > k) {
        
//     }
//     else return;
// }

// function solution(sequence, k) {
//     var answer = [sequence.length - 1, 0]
//     const indexMap = new Map();
//     const recordMap = new Map();
//     recordMap.set('0,6', true);
//     indexMap.set(0, sequence.length - 1);
//     indexMap.set(1, 0);
//     let startIndex = 0;
//     let lastIndex = 0;
//     const totalSum = sequence[0];
//     for(let i = 0; i < sequence.length; i++){
//         i
//     }
//     // const sum = sequence.reduce((acc, cur) => {
//     //     return acc + cur;
//     // }, 0);
//     // twoPointer(sequence, 0, sequence.length - 1, sum, k, indexMap, recordMap);
//     twoPointer(sequence, 0, 0, sequence[0], k, indexMap);
//     answer = [indexMap.get(0), indexMap.get(1)];
//     return answer;
// }

// function twoPointer(sequence, startIndex, lastIndex, sum, k, indexMap, isReverse){
//         while(lastIndex >= startIndex && lastIndex < sequence.length) {
//             if(sum >= k) {
//                 sum -= sequence[startIndex];
//                 startIndex += 1;
//             }
//             else if(sum < k){
//                 sum += sequence[lastIndex];
//                 lastIndex += 1;
//             }
//             else if(sum === k && partSequenceLength > startIndex - lastIndex) {
//                 partSequenceLength = startIndex - lastIndex;
//                 indexMap.set(0, startIndex);
//                 indexMap.set(1, lastIndex);
//             }
//         }
// }

// function twoPointer(sequence, startIndex, lastIndex, sum, k, indexMap, recordMap){
//     if(sum === k && partSequenceLength > lastIndex - startIndex) {
//         partSequenceLength = lastIndex - startIndex;
//         indexMap.set(0, startIndex);
//         indexMap.set(1, lastIndex);
//         return;
//     }
//     else if(sum === k && partSequenceLength === lastIndex - startIndex && indexMap.get(0) > startIndex){
//         indexMap.set(0, startIndex);
//         indexMap.set(1, lastIndex);
//         return;
//     }
//     else if(lastIndex > startIndex && sum > k) {
//         if(!recordMap.has(`${startIndex},${lastIndex - 1}`)) twoPointer(sequence, startIndex, lastIndex - 1, sum - sequence[lastIndex], k, indexMap, recordMap);
//         if(!recordMap.has(`${startIndex + 1},${lastIndex}`)) twoPointer(sequence, startIndex + 1, lastIndex, sum - sequence[startIndex], k, indexMap, recordMap);
//         if(!recordMap.has(`${startIndex + 1},${lastIndex - 1}`)) twoPointer(sequence, startIndex + 1, lastIndex - 1, sum - sequence[startIndex] - sequence[lastIndex], k, indexMap, recordMap);
//     }
//     else return;
// }

// 투포인터로 해결할 수 있지 않을까?
// 투 포인터를 활용하면 4가지의 경우의 수가 나온다
// 둘다 차감을 안했을 경우 !== 이건 제외
// 왼쪽만 차감을 했을 경우
// 오른쪽만 차감을 했을 경우
// 왼쪽, 오른쪽 다 차감을 했을 경우
// 일단 모든 시퀀스를 더했을 때를 구하고 재귀법으로 구하면된다.
// 투포인터로 해결할 수 있지 않을까?
// 투 포인터를 활용하면 4가지의 경우의 수가 나온다
// 둘다 차감을 안했을 경우 !== 이건 제외
// 왼쪽만 차감을 했을 경우
// 오른쪽만 차감을 했을 경우
// 왼쪽, 오른쪽 다 차감을 했을 경우
// 일단 모든 시퀀스를 더했을 때를 구하고 재귀법으로 구하면된다.


function solution(sequence, k) {
    var answer = [];
    let minLength = Number.POSITIVE_INFINITY;
    let startIndex = 0;
    let lastIndex = 0;
    let sum = sequence[0];
    let firstIndex = 0;
    while(startIndex < sequence.length) {
        if(sum === k && minLength > lastIndex - startIndex){
            answer = [startIndex, lastIndex];
            minLength = lastIndex - startIndex;
        }
        if(sum >= k){
            sum -= sequence[startIndex];
            startIndex += 1;
        }
        else if(sum < k && lastIndex < sequence.length){
            lastIndex += 1;
            sum += sequence[lastIndex];
        }
        else break;
    }
    return answer;
}
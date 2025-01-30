// function solution(name) {
//     var answer = 0;
//     const alphabetMap = new Map();
//     for(let i = 0; i < 26; i++){
//         alphabetMap.set(String.fromCharCode('A'.charCodeAt() + i), 'A'.charCodeAt() + i - 65)
//     }
//     const nameArr = name.split('');
//     const oneWayMap = new Map();
//     const reverseWayMap = new Map();
//     let startIndex = 0;
//     for(let i = 0; i < nameArr.length; i++){
//         if(nameArr[i] !== 'A') {
//             const nextCount = i - startIndex;
//             const alphabetCount = Math.min(alphabetMap.get(nameArr[i]), alphabetMap.get('Z') - alphabetMap.get(nameArr[i]) + 1);
//             oneWayMap.set(i, nextCount + alphabetCount);
//             startIndex = i;
//         }
//         else continue;
//     }
//     startIndex = nameArr.length - 1;
//     for(let i = nameArr.length - 1; i >= 0; i--){
//         if(nameArr[i] !== 'A') {
//             const nextCount = startIndex - i;
//             const alphabetCount = Math.min(alphabetMap.get(nameArr[i]), alphabetMap.get('Z') - alphabetMap.get(nameArr[i]) + 1);
//             reverseWayMap.set(i, nextCount + alphabetCount);
//             startIndex = i;
//         }
//         else continue;
//     }
//     startIndex = 0;
//     let isReverse = false;
//     for(let i = 0; i < nameArr.length; i++){
//         if(nameArr[i] !== 'A'){
//             if(!isReverse && oneWayMap.get(i) > startIndex + reverseWayMap.get(i) + 1) {
//                 isReverse = true;
//                 answer += startIndex + reverseWayMap.get(i) + 1;
//                 startIndex = i;
//             }
//             else if(isReverse && (nameArr.length) - startIndex + oneWayMap.get(i) + 1 < reverseWayMap.get(i)){
//                 isReverse = false;
//                 answer += nameArr.length - startIndex + oneWayMap.get(i) + 1;
//                 startIndex = i;
//             }
//             else {
//                 answer += isReverse ? reverseWayMap.get(i) : oneWayMap.get(i);
//                 startIndex = i;
//             }
//         }
//     }
//     return answer;
// }


// function solution(name) {
//     var answer = 0;
//     const alphabetMap = new Map();
//     for(let i = 0; i < 26; i++){
//         alphabetMap.set(String.fromCharCode('A'.charCodeAt() + i), 'A'.charCodeAt() + i - 65)
//     }
//     const nameArr = name.split('');
//     let startIndex = 0;
//     while(true){
//         answer += Math.min(alphabetMap.get(nameArr[startIndex]), alphabetMap.get('Z') - alphabetMap.get(nameArr[startIndex]) + 1);
//         nameArr[startIndex] = 'A';
//         let nextIndex = startIndex + 1;
//         while(nextIndex !== startIndex) {
//           if(nextIndex >= nameArr.length) nextIndex = 0;
//           if(nameArr[nextIndex] !== 'A') break;
//           if(nextIndex === startIndex) break;
//           else nextIndex++;
//         }
//         let nextIndex2 = startIndex - 1;
//         while(nextIndex2 !== startIndex) {
//             if(nextIndex2 < 0) nextIndex2 = nameArr.length - 1;
//             if(nameArr[nextIndex2] !== 'A') break;
//             if(nextIndex2 === startIndex) break;
//             else nextIndex2--;
//         }
//         if(nextIndex2 === startIndex && nextIndex === startIndex) break;
//         else {
//             let result1;
//             let result2;
//             let isBack = false;
//             if(nextIndex > startIndex) {
//                 result1 = nextIndex - startIndex;
//             }
//             else {
//                 result1 = nameArr.length - startIndex + nextIndex;
//             }
//             if(nextIndex2 > startIndex) {
//                 isBack = true;
//                 result2 = nameArr.length - 1 - nextIndex2 + startIndex;
//             }
//             else {
//                 result2 = startIndex - nextIndex2;
//             }
//             if(isBack && result1 >= result2) {
//                 answer += result2 + 1;
//                 startIndex = nextIndex2;
//             }
//             else if(!isBack && result1 >= result2) {
//                 answer += result2;
//                 startIndex = nextIndex2;
//             }
//             else {
//                 answer += result1;
//                 startIndex = nextIndex;
//             }
//         }
//     }
//     return answer;
// }




function solution(name) {
    const getCharMoves = char => {
        const diff = char.charCodeAt(0) - 'A'.charCodeAt(0);
        return Math.min(diff, 26 - diff);
    };
    
    // 상하 이동 (알파벳 변경) 계산
    let totalMoves = [...name].reduce((sum, char) => sum + getCharMoves(char), 0);
    
    // 좌우 이동 최소값 계산
    let minHorizontalMoves = name.length - 1;
    
    for(let i = 0; i < name.length; i++) {
        let next = i + 1;
        // 연속된 A 건너뛰기
        while(next < name.length && name[next] === 'A') {
            next++;
        }
        
        // 현재 위치에서의 좌우 이동 최소값 계산
        // 1) i까지 정방향으로 갔다가 뒤로 돌아가기
        // 2) 뒤에서부터 역방향으로 갔다가 다시 돌아가기
        // const moves = i + name.length - next + Math.min(i, name.length - next);
        const moves = Math.min(2 * i + name.length - next, i + (name.length - next) * 2)
        minHorizontalMoves = Math.min(minHorizontalMoves, moves);
    }
    
    return totalMoves + minHorizontalMoves;
}

// AAA
// JAZ
// AAAA
// JAZA
// 한 문자를 바꾸고 이때 선택의 기로에 놓이게 된다.
// 만약 첫 번째를 바꾸고 마지막거랑 다음거랑 비교하게 된다면?
// 다음거가 A라면 무시해도 된다.
// 이전거가 A라면 다음걸로 넘어가도 된다.
// 만약 둘다 A라면 4글자 이상인 경우에는 두번 건너띄어도 똑같다.
// 결과적으로 뒤로 가는 경우는 2번째 글자가 A이며, 전체 글자가 3개인 경우에만 유효하다.
// 하지만 JAAAAAAZAA 라면?
// 이런 경우에는 뒤로 넘어가는 게 이득이다.
// 일단 A가 아닌 경우의 알파벳과 인덱스를 수집한다.
// J: 0 Z: 7
// 위치에 대한 값을 만들어 줘야 할 거 같다.

// 일단 첫번째는 0부터 시작
// 그 다음 문자를 비교했을 때 다음 문자의 인덱스가 7이면, 커서를 비교한다.

// 그럼 단방향 커서와 역방향 커서를 둘 다 고려한다음, 그 결과 값 중 적게 나온 결과값을 취사 선택하면 되지 않을까?
// BBAAAAAABAA
// 역방향을 먼저 고려한다음 단방향을 고려하는 방식을 택하자

// BBBAAABB
// 
// 이런 경우에는 어떻게 하는 것이 나을까
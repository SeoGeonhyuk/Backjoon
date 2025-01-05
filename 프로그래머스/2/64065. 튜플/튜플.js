// 일단 배열화 시키고
// 배열의 길이에 따라 오름차 순으로 정렬한다.
// 새로운 숫자를 기준으로 배열의 원소를 추가하는 방식이면 충분하다.
function solution(s) {
    var answer = [];
    const numMap = new Map();
    const sortedS = s.substring(1, s.length - 2).replaceAll('{', '').replaceAll('},', ', ').split(', ').map((k) => k.split(',').map(Number)).sort((a, b) => a.length - b.length);
    // console.log(sortedS);
    sortedS.forEach((k) => {
        k.forEach((num) => {
            if(!numMap.has(num)) {
                numMap.set(num, true);
                answer.push(num);
            }
        });
    })
    return answer;
}

function solution(survey, choices) {
    const scoreBoard = {
        1: 3,
        2: 2,
        3: 1,
        5: 1,
        6: 2,
        7: 3
    }   
    var answer = '';
    const surveyCategorySet = new Set([]);
    const scoreMap = new Map();
    survey.forEach((s) => {
        const sArr = s.split('');
        sArr.forEach((k) => {
            scoreMap.set(k, 0);
        })
        surveyCategorySet.add(sArr.sort().join(""));
    });
    choices.forEach((choice, index) => {
        const s = survey[index];
        if(choice < 4) {
            scoreMap.set(s[0], scoreMap.get(s[0]) + scoreBoard[choice])
        }
        else if(choice > 4) scoreMap.set(s[1], scoreMap.get(s[1]) + scoreBoard[choice])
    })
    answer += decidePersonality("R", "T", scoreMap);
    answer += decidePersonality("C", "F", scoreMap);
    answer += decidePersonality("J", "M", scoreMap);
    answer += decidePersonality("A", "N", scoreMap);
    return answer;
}

function decidePersonality(first, second, scoreMap) {
    if((scoreMap.get(first) || 0) === (scoreMap.get(second) || 0)) return first;
    else if(scoreMap.get(first) > scoreMap.get(second)) return first;
    else return second
}

// Set 자료구조를 활용하고 정렬해서 어떠한 선택 유형이든 균일한 값을 보장하도록 만들자.
// 설문지의 점수를 확인할 때는 Map 자료 구조를 사용하자.
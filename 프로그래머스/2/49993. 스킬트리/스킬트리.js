function solution(skill, skill_trees) {
    var answer = 0;
    const skillMap = new Map();
    for(let i = 0; i < skill.length; i++){
        skillMap.set(skill[i], 1);
    }
    
    skill_trees.forEach((s) => {
        let count = 0;
        const copiedSkillMap = new Map(skillMap.entries());
        const skillTreeStack = [];
        for(let i = 0; i < s.length; i++){
            const c = s[i];
            if(skill[count] === c && skillTreeStack.length === 0) {
                skillTreeStack.push(c); 
                copiedSkillMap.set(c, 0);
                count += 1;
            }
            else if(skill[count] === c && skillTreeStack[0] === skill[count - 1]) {
                skillTreeStack.pop();
                skillTreeStack.push(c);
                copiedSkillMap.set(c, 0);
                count += 1;
            }
            else if(skill[count] !== c && copiedSkillMap.get(c)) {
                count = -1;
                break;
            }
            
        }
        if(count >= 0) answer += 1;
    })
    return answer;
}

// 아니 얕은 복사가 주소값도 복사하는 거다!
// 깊은 복사가 주소값을 제외하고 값을 이용해서 완전히 다른 객체로 만드는 거다! 착각하지 말자...
// 더 좋은 문자열 풀이 방법도 있었다.
// 속도도 이게 더 빠르고 좋은 영감이 될 거 같다.
// function solution(skill, skill_trees) {
//     return skill_trees
//         .map(tree => {
//             // 선행 스킬에 포함된 스킬들만 추출
//             return tree
//                 .split('')
//                 .filter(s => skill.includes(s))
//                 .join('');
//         })
//         .filter(filteredTree => {
//             // 추출된 스킬들이 skill의 순서와 일치하는지 확인
//             return skill.startsWith(filteredTree);
//         })
//         .length;
// }
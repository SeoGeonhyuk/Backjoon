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
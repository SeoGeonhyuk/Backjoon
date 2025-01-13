function solution(begin, target, words) {
    var answer = 0;
    const visitedMap = new Map([[begin, 0]]);
    const visitedWords = [begin];
    while(words.length > 0 && visitedWords.length > 0) {
        const visitedWord = visitedWords.pop();
        const restWords = [];
        for(let i = 0; i < words.length; i++){
            let possibleChange = 0;
            for(let j = 0; j < visitedWord.length; j++){
                if(visitedWord[j] !== words[i][j]) possibleChange += 1;
            }
            if(possibleChange === 1 && !visitedMap.has(words[i])) {
                visitedMap.set(words[i], visitedMap.get(visitedWord) + 1);
                visitedWords.push(words[i])
            }
            else restWords.push(words[i]);
        }
        words = restWords;
    }
    answer = visitedMap.get(target) || 0;
    return answer;
}
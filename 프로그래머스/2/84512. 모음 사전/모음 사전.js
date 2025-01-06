function solution(word) {
    var answer = 0;
    let startIndex = 0;
    const alphabetList = ['A', 'E', 'I', 'O', 'U'];
    const wordList = ['A', 'E', 'I', 'O', 'U'];
    const wordMap = new Map();
    while(startIndex <= 5 ** 5) {
        let word = wordList[startIndex];
        startIndex += 1;
        alphabetList.forEach((alphabet) => {
            if((word + alphabet).length < 6) wordList.push(word + alphabet);
        });
    }
    wordList.sort().some((w, index) => {
        if(w === word) {
            answer = index + 1;
            return true;
        }
        return false;
    });
    return answer;
}

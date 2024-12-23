function solution(n, words) {
    var answer = [];
    const spokeWords = new Map();
    let beforeWord = words[0][0];
    words.every((word, index) => {
        if(!spokeWords.has(word) && word[0] === beforeWord[beforeWord.length - 1]){
            spokeWords.set(word, true);
            answer = [ 0, 0 ];
            beforeWord = word;
            return true;
        }
        else{
            answer = [index % n + 1, parseInt(index / n + 1)];
            return false;
        }
    });
    return answer;
}
function solution(s) {
    var answer = 0;
    for(let i = 0; i < s.length; i++){
        // 문자열을 slice를 통해 합치고 싶을 때는 +를 활용하자.
        const rotatedSentence = s.slice(i) + s.slice(0, i);
        answer += checkRightSentence(rotatedSentence);
    }
    return answer;
}

function checkRightSentence(s) {
    const sentenceStack = [];
    [...s].forEach((c) => {
        if(sentenceStack.length && sentenceStack[sentenceStack.length - 1] === '[' && c === ']')
            sentenceStack.pop();
        else if(sentenceStack.length && sentenceStack[sentenceStack.length - 1] === '(' && c === ')')
            sentenceStack.pop();
        else if(sentenceStack.length && sentenceStack[sentenceStack.length - 1] === '{' && c === '}')
            sentenceStack.pop();
        else sentenceStack.push(c);
    });
    return sentenceStack.length ? 0 : 1;
}


// 배열을 이용하면 해결될 거 같긴 하다.
// 배열을 이용해서 해당 문자열이 올바른 괄호를 가지고 있는 문자열인지 체크하는 함수를 만들자.
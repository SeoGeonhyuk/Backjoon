function solution(n, s) {
    var answer = [];
    const maxVal = Math.floor(s / n);
    if(!maxVal) return [-1];
    answer = new Array(n).fill(maxVal);
    if(s % n) {
        let sub = s % n;
        for(let i = answer.length - 1; sub > 0; i--){
            answer[i] += 1;
            sub -= 1;
        }
    }
    return answer;
}

function solution(citations) {
    var answer = 0;
    var indexPoint = 0;
    const sortedCitations = citations.sort((a, b) => a - b);
    sortedCitations.forEach((citation, index) => {
        if(sortedCitations.length - index >= citation && index <= citation){
            indexPoint = index + 1;
            answer = citation;
        }
    });
    // 최적화 하는 거 힘들다...
    // 3ms 나오던 걸 1ms 미만으로 만들어봤다.
    // 하지만 문제를 풀면서 여러 가지 상황을 잘 고려하지 못했다는 느낌을 받았다. 앞으로는 여러 가지 상황을 선행적으로
    // 주석을 통해 고려해보는 연습을 해보면 좋을 거 같다.(문제는 하긴 했는데, 잘 안됐던건가...)
    if(answer === 0){
        for(let i = 1; i < sortedCitations[0]; i++){
            if(sortedCitations[0] - i >= 0 && sortedCitations.length >= i) answer = i;
            else break;
        }
    }
    else if(indexPoint && indexPoint < sortedCitations.length){
        for(let i = sortedCitations[indexPoint - 1] + 1; i < sortedCitations[indexPoint]; i++){
            if(sortedCitations[indexPoint] - i >= 0 && sortedCitations.length - indexPoint >= i) answer = i;
            else break;
        }
    }
    return answer;
}

    // 생각해보니까 공식으로 할 수 있을 듯?
    // sortedCitations.forEach((citation, index) => {
    //     let imports = 0;
    //     for(let i = 0; i < sortedCitations.length; i++){
    //         if(citation <= sortedCitations[i]) imports += 1;
    //     }
    //     if(sortedCitations.length - imports <= imports && imports >= citation) answer = citation;
    // });
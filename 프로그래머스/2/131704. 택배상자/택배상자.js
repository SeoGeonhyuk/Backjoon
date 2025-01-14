function solution(order) {
    var answer = 0;
    const maxNum = order.length;
    let index = 0;
    const secondContainer = [];
    for(let i = 1; i <= maxNum; i++) {
        if(index >= order.length) break;
        else if(order[index] !== i) {
            secondContainer.push(i);
        }
        else {
            answer += 1;
            index += 1;
            while(index <= order.length - 1 && secondContainer.length > 0) {
                if(order[index] === secondContainer[secondContainer.length - 1]) {
                    secondContainer.pop();
                    answer += 1;
                    index += 1;
                }
                else break;
            }
        }
    }
    return answer;
}



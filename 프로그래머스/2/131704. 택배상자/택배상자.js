function solution(order) {
    var answer = 0;
    // 이렇게 하면 틀리고
    // const maxNum = Math.max(...order);
    // 이렇게 하면 맞는다.
    // 왜 이러는 거지 하고 믿을 수 없는 눈으로 보고 있었는데, MDN 문서에 다음과 같이 작성되어 있다.
    // 그러나 전개 구문(...)와 apply는 모두 배열 요소를 함수 매개변수로 전달하려고 하기 때문에 배열에 요소가 너무 많으면 실패하거나 잘못된 결과를 반환합니다. 자세한 내용은 apply와 내장 함수 사용하기를 참조하세요. reduce 솔루션에는 이 문제가 없습니다.
    // 그렇다는 건 apply 구문에서 최대로 받을 수 있는 인자수의 개수가 넘었기 때문에 에러가 났다는 것이다....
    // 솔직히 억까 문제였다.
    // 추가적으로 MDN에서 인수 개수를 찾아보았다.
    // 하지만 이러한 방식으로 apply 를 사용하는 경우 주의해야 합니다. JavaScript 엔진의 인수 길이 제한을 초과하는 위험성에 대해 이해할 필요가 있습니다. 함수에 너무 많은(대략 몇 만개 이상) 인수를 줄 때의 상황은 엔진마다 다른데(예를 들어 JavaScriptCore의 경우 인수의 개수 제한은 65536), 상한이 특별히 정해져 있지 않기 때문입니다. 어떤 엔진은 예외를 던집니다. 더 심한 경우는 실제 함수에 인수를 전달했음에도 불구하고 참조할 수 있는 인수의 수를 제한하고 있는 경우도 있습니다(이러한 엔진에 대해 더 자세히 설명하면, 그 엔진이 arguments의 상한을 4개로 했다고 하면[실제 상한은 물론 더 위일 것입니다], 위 예제 코드의 전체 배열이 아니라 5, 6, 2, 3 만 apply 에 전달되어 온 것처럼 작동합니다).
    // 와 진짜 신박한 문제였다.
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



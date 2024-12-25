function solution(elements) {
    var answer = 0;
    const sortedElements = elements;
    const sumSet = new Set();
    sortedElements.forEach((element, index) => {
        let sum = element;
        sumSet.add(sum);
        for(let i = index + 1; i < sortedElements.length + index; i++){
            // console.log(element, sortedElements[i % sortedElements.length])
            sum += sortedElements[i % sortedElements.length];
            sumSet.add(sum);
        }
    });
    answer = sumSet.size
    return answer;
}
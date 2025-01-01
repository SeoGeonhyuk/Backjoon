function solution(numbers, target) {
    var answer = 0;
    answer = targetNumber(0, 0, numbers, target)
    return answer;
}

function targetNumber(present, index, numbers, target) {
    if(index === numbers.length)
        return present === target ? 1 : 0;
    else {
        return targetNumber(present + numbers[index], index + 1, numbers, target) + targetNumber(present - numbers[index], index + 1, numbers, target);
    }
}
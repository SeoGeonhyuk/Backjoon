function solution(numbers) {
    var answer = -1;
    const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.forEach((num) => {
        numArr[num] = 0;
    });
    answer = numArr.filter((num) => num !== 0).reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    return answer;
}
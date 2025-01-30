const scoreBoard = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6
}
function solution(lottos, win_nums) {
    var answer = [];
    const winMap = new Map();
    const lottoMap = new Map();
    win_nums.forEach((num) => {
        winMap.set(num, true);
    })
    let count = 0;
    lottos.forEach((num) => {
        if(winMap.get(num)) count += 1;
        lottoMap.set(num, (lottoMap.get(num) || 0) + 1);
    });
    answer = [scoreBoard[count + (lottoMap.get(0) || 0)], scoreBoard[count]];
    return answer;
}
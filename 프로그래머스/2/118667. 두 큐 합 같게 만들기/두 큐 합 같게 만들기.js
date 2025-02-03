function solution(queue1, queue2) {
    var answer = -2;
    let totalSumQueue1 = queue1.reduce((acc, cur) => {
        return acc + cur;
    }, 0)
    let totalSumQueue2 = queue2.reduce((acc, cur) => {
        return acc + cur;
    }, 0)
    let queue1Index = 0;
    let queue2Index = 0;
    let originalLegnth = queue1.length;
    while(totalSumQueue1 !== totalSumQueue2){
        if(totalSumQueue1 > totalSumQueue2 && queue1.length - queue1Index > 0){
            totalSumQueue1 -= queue1[queue1Index];
            totalSumQueue2 += queue1[queue1Index];
            queue2.push(queue1[queue1Index]);
            queue1Index += 1;
        }
        else{
            totalSumQueue2 -= queue2[queue2Index];
            totalSumQueue1 += queue2[queue2Index];
            queue1.push(queue2[queue2Index]);
            queue2Index += 1;
        }
        if(queue2.length > originalLegnth * 2 && queue1.length > originalLegnth * 2) break;
        if(queue2.length - queue2Index === 0 || queue1.length - queue1Index === 0) break;
    }
    answer = totalSumQueue1 === totalSumQueue2 ? queue1Index + queue2Index : -1;
    return answer;
}

// 6
// [1, 2, 1, 2]
//     1. 
// 14
// [1, 10, 1, 2]
//      1  2
// 17
// [1, 2, 1, 2, 1, 10]

// []



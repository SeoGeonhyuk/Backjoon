// 1


// 1
// 2 3

//  1 
// 2 6
// 3 4 5


// 1 -> 2 (1)
// 2 -> 3 (2)
// 3 -> 4 (3)
// 4 -> 5 (4)
// 5 -> 6 (5)
// 6 -> 7 (1)
// 7 -> 8 (1)
// 8 -> 9 (1)
// 9 -> 10 (1)
// 10 -> 11 (1) 
// 여기서부터 왼쪽
// 11 -> 12 (6)
// 12 -> 13 (5)
// 13 -> 14 (4)
// 14 -> 15 (3)
// 15 -> 16 (2)



// 여기서부터 오른쪽
// 16 -> 17 (3)
// 17 -> 18 (4)
// 18 -> 19 (1)
// 19 -> 20 (1)
// 20 -> 21 (5)

// 10 - 9 -> 1
// 15 - 12 -> 3
// 21 - 15 -> 6
// 28 - 18 -> 10

//             1
//            2        18
//           3          17
//          4            16
//         5              15
//        6                14
//       7  8  9  10  11 12 13


// -3 단위로 다음 삼각형의 높이가 결정된다.
// 내려갈때마다 i + 1 단위로 시작한다. 하 진짜 개어렵네
// 2 * i 단위로 다음 삼각형의 시작 위치가 결정된다.(i >= 0)
// n + 2 * i 단위로 위로 올라가는 것이 결정된다.


function solution(n) {
    let answerLength = 0;
    for (let i = 1; i <= n; i++) {
        answerLength += i;
    }
    var answer = new Array(answerLength);
    let startIndex = 0;
    let count = 0;
    let k = 1;
    while(n > 0) {
        ({ startIndex, k } = makeTriangle(answer, startIndex + 2 * count, 2 * count, n, k));
        count += 1;
        n -= 3;
    }
    return answer;
}
function makeTriangle(answer, startIndex, increment, height, k) {
    for(let i = 1; i < height; i++){
        answer[startIndex] = k;
        startIndex += increment + i;
        k += 1;
    }
    for(let i = 0; i < height; i++){
        answer[startIndex] = k;
        k += 1;
        if(i < height - 1) startIndex += 1;
    }
    for(let i = height - 1; i > 1; i--){
        startIndex -= i + increment + 1;
        answer[startIndex] = k;
        k += 1;
    }
    return { startIndex, k} ;
}

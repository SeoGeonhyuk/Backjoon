// function solution(n, a, b) {
//     let answer = 0n;
//     if (BigInt(a) % 2n === 0n) a = BigInt(a) - 1n;
//     if (BigInt(b) % 2n === 0n) b = BigInt(b) - 1n;
//     if (a === b) answer = 1n;
//     else {
//         if (BigInt(a) - BigInt(b) > 0n) answer = (BigInt(a) - BigInt(b)) / 2n + 1n; 
//         else answer = (BigInt(b) - BigInt(a)) / 2n + 1n;
//     }
    
//     return answer;
// }

function solution(n, a, b) {
    var answer = 0;
    while(n !== 1){
        if(a % 2 === 0) a -= 1;
        if(b % 2 === 0) b -= 1;
        if(a === b) {
            answer += 1;
            break;
        }
        else {
            a = parseInt(a / 2) + 1;
            b = parseInt(b / 2) + 1;
            console.log(a, b);
            answer += 1;
            n /= 2
        }
    }
    if(n === 1) return answer + 1;
    return answer;
}

// 홀수일 경우, 해당 경기에서의 첫 번째 참가자
// 짝수일 경우, 해당 경기에서의 두 번째 참가자
// 일단 홀수 + 짝수 더하고, 나누기 2를 하고 소수점을 없애면 모든 사람을 해당 경기의 첫 번째 참가자로 만들 수 있음
// 그럼 거기서 빼고 나누기 2를 하면 그게 바로 결투 횟수

// 그게 아니었다. 맞붙어지는 매치가 원하는 대로 이루어지지 않는다. 그리고 무엇보다. 바로 결


// 4명이 있을 경우 결투는 2번
// 8명이 있을 경우 결투는 3번
// 16명이 있을 경우 결투는 4번
// 16강일 경우에는 최대 16번까지
// 16번일 경우에는 8번 부여
// 3번 -> 1번 -> 
// 1, 2, 3, 4, 5, 6, 7, 8,
// 2, 5
// 1,2,3,4
// 1,3

// 1 9

// 1 5

// 1 3

// 1 2


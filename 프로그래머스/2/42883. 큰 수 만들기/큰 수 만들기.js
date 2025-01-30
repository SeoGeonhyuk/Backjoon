// function solution(number, k) {
//     var answer = '';
//     let count = 0;
//     const numArr = number.split('');
//     const numMap = new Map();
//     const stack = [];
//     for(let i = 1; i < numArr.length; i++){
//         for(let j = i - 1; j >= 0; j--){
//             if(!numMap.has(j) && numArr[i] > numArr[j]) {
//                 numMap.set(j, true);
//                 count += 1;
//             }
//             else if(numArr[j] > numArr[i]) break;
//             if(count === k) break;
//         }
//     }
//     if(count < k){
//         for(let i = numArr.length - 2; i >= 0; i--) {
//             for(let j = i + 1; j < numArr.length; j++) {
//                 if(!numMap.has(j) && numArr[i] > numArr[j]) {
//                     numMap.set(j, true);
//                     count += 1;
//                 }
//                 else if(numArr[j] < numArr[i]) break;
//                 if(count === k) break;
//             }
//             if(count === k) break;
//         }
//     }
//     for(let i = 0; i < numArr.length; i++){
//         if(!numMap.has(i)) answer = answer + numArr[i];
//     }
//     return answer;
// }

function solution(number, k) {
    var answer = '';
    const numArr = number.split('');
    const stack = [];
    for(let i = 0; i < numArr.length; i++){
        if(stack.length === 0) stack.push(numArr[i]);
        else if(stack[stack.length - 1] < numArr[i] && k > 0) {
            while(stack.length > 0 && k > 0 && stack[stack.length - 1] < numArr[i]) {
                stack.pop();
                k -= 1;
            }
            stack.push(numArr[i]);
        }
        else stack.push(numArr[i]);
    }
    answer = stack.slice(0, stack.length - k).join('');
    return answer;
}




// 1번 일단 마지막 원소보다 작다면 들어올 수 있다
// 2번 마지막 원소보다 들어오려는 원소가 크다면 count가 남은 전제하에 pop 후 들어올 수 있다.
// 3번 해당 규칙을 지켰음에도 count가 남았다면 거꾸로 다시 pop 후 push를 진행한다.

// 1
// 9
// 92
// 924
// 4
// 9
// 94
// 1
// 2
// 3
// 31
// 32
// 34

// 4
// 41
// 47
// 477
// 4772
// 4775
// 4775841
// 1

// 아니면 count가 남았으면 버리고 아니면 수용해야 한다
// 4
// 4
// 7
// 77
// 775
// 775841

// 근데만약 1921이라면?
// 1
// 9
// 92

// 1
// 9
// 92
// 94

// 1
// 2
// 3
// 31
// 32
// 3234


// 4
// 41
// 7
// 77
// 772
// 775
// 7752
// 775841

// 987654321

// 9
// 98
// 987
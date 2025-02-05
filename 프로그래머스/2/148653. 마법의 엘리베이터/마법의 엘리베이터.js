// function solution(storey) {
//     var answer = 0;
//     const storeyStr = ''+ storey;
//     if(storeyStr.length === 1) answer = Math.min(storey, 10 - storey + 1);
//     else {
//         let k = '';
//         let numberMap = new Map();
//         for(let i = 1; i < storeyStr.length; i++){
//             let presentNum = parseInt(k + storeyStr[i] + '0'.repeat(storeyStr.length - (i + 1)));
//             let presentCount = (numberMap.get(k + '0'.repeat(storeyStr.length - i)) || 0);
//             // k가 25이고 전체가 2556이라면
//             // k는 2559
//             numberMap.entries(([key, value]) => {
//                 if(key.startsWith(k)) {
//                     for(let j = 0; j < storeyStr.length - (k.length + 1); j++){
//                         numberMap.set(''+presentNum+'9'.repeat(j)+'0'.repeat(storeyStr.length - (k.length + 1 + j)), (numberMap.get(''+presentNum+'9'.repeat(j)+'0'.repeat(storeyStr.length - k.length - 1 - j)) || Number.POSITIVE_INFINITY) > value + Math.abs(key[i - 1] - parseInt(storeyStr[i])) ? value + Math.abs(key[i - 1] - parseInt(storeyStr[i])) :  numberMap.get(''+presentNum+'9'.repeat(j)+'0'.repeat(storeyStr.length - k.length - 1 - j)));
//                     }
//                 }
//             })
//             numberMap.set(''+presentNum), Math.min(presentCount + 1 + (10 - parseInt(storeyStr[i])), presentCount + parseInt(storeyStr[i])));
// //             for(let j = storeyStr.length - (i + 1); j > 0; j++){
                
// //             }

            
//             k += storeyStr[i];
//         }
//         answer = numberMap.get(storeyStr);
//     }
//     return answer;
//     // var answer = 0;
//     // const storeyStr = new String(storey);
//     // if(storeyStr.length === 1) answer = Math.min(storey, 10 - storey + 1);
//     // else{
//     //     const answerArr = [Math.min(parseInt(storeyStr[0]), 10 - parseInt(storeyStr[0]) + 1)];
//     //     for(let i = 1; i < storeyStr.length; i++){
//     //         answerArr.push(Math.min(answerArr[answerArr.length - 1] + parseInt(storeyStr[i]), answerArr[answerArr.length - 1] + (10 - parseInt(storeyStr[i]) + 1)));
//     //     }
//     //     console.log(answerArr);
//     //     answer = answerArr[answerArr.length - 1]
// }

//     return answer;
// }

// DP 문제인거 같은데
// 반대로 생각하는게 더 빠르지 않을까
// 예를 들어
// 16인 경우에는
// 10으로 가는 방법도 있지만
// 20으로 가는 방법도 있다.
// 20에서 16으로 가는 방법과
// 10에서 16으로 가는 방법 중 더 좋은 방법을 선택하면 될 거 같은데?
// 2554인 경우에는
// 3000으로 가는 방법과
// 2000으로 가는 방법이 있고
// 2500으로 가는 방법은
// 2000을 고를거고 그럼 7번
// 2500에서 2550으로 가는 방법은
// 2600에서 2550으로 가는방법과 2500에서 2550으로 가는 방법 중 2500을 고를 거고(12번)
// 2554로 가는 방법은 2550과 2560중 2550을 고를 거임(16번)
// 잘 풀었는데 나?

// 2000
// 2900
// 2990
// 2999


// 식을 다시 짜자
// 문자열의 길이를 n이고 i부터 시작한다고 했을 때(i = 0,1,2...)
// 문자열의 남은 길이는 n - (i + 1) 

// 4이고 0부터면 남은 문자의 개수를 3
// 4이고 1부터면 남은 문자의 개수는 2


// 2000
// 2900
// 2990
// 2999 이렇게 될 건데

// 2500
// 2590
// 2599

// 2564인 경우에는
// 3000으로 가는 방법과
// 2000으로 가는 방법이 있고
// 2500으로 가는 방법은
// 2000을 고를거고 그럼 7번
// 2560으로 가는 방법은
// 2500으로 가는 방법과
// 2600으로 가는 방법이 있고
// 그럼

// Math.min(i + k, i + 1 + (10 - k))

// length가 2이상인 경우에는

// 99인 경우에는
// 10에서 9로 가는게 더 빠르냐 9에서 10으로 가는게
// 10을 선택 현재 숫자 99
// 아 그럼 뒷 숫자를 반영해야 하는건가?
// 999인 경우에는?
// 당연히 1000으로 갈거고
// 888인 경우에는
// 98인 경우에는?

// 그럼 숫자를 따로 보관해 두는 건 어떻게 생각해?
// 99인 경우에는
// 9일때를 보자 당연히 90, 9다는 100, 2가(99) 나을거다.
// 그 다음 현재 숫자를 기억해둔다. 그러면 현재 숫자는 99가 될거고
// 그다음 숫자도 9이다. 생략
// 888인 경우에는?
// 8일때를 보자 당연히 800, 8번, 800 3번이 나올거다
// 내가 생각했을 때는 경우의 수를 기억하는게 중요하다.
// 99인 경우에는
// 90과, 90을 또 기억해둔다?
// 9인 경우에는 더 작은걸 자동으로 선택하기 때문에 99가 나올거
// 다른 숫자일 경우에는 기억해두고 같은 숫자일 때는 기억해 둘 필요가 없다.

// 999인 경우에는
// 아니면 좋은 생각
// 90도 기억하고 99도 기억한다.
// 999인 경우에는
// 900도 기억하고 990도 기억하고 999도 기억한다.
// 900인 경우에는
// 900, 990, 999
// 990인 경우에는
// 990, 999
// 999인 경우에는
// 999

// 199인 경우에는
// 100
// 99인 경우네는
// 200에서 99로 가는게 나은지
// 100에서 90으로 가는게 나은지 결정한다.
// 190, 199로 결정
// 196인 경우에는
// 199와 190중에서 더 큰걸 고르면 된다.


// 566
// 500으로 일단 잡고
// 600으로 가서 40을 빼는 게 좋은지 아니면 


// 9!으로 끝낼 수 있을 것이다.

// 888인 경우보자
// 8일때를 보자 당연히 800, 8번, 800 3번이 나올거다
// 800일 때는 
// 900인 경우의 수와 800인 경우의 수가 있다 당연히 900을 고른다.
// 880일 때는 8



// 16일 때는
// 10을 받고
// 6을 보며 10으로 갈지 20으로 갈지 결정
// 20으로 갈지 결정된다면 19추가
// 19에서 16빼기 3

// 2554에서
// 2000을 받고
// 5를 보며 2000으로 갈지 3000으로 갈지 결정
// 같은 숫자일 경우 똑같은 횟수를 보장하지만 모든 경우의 수 수집
// 2500, 2590, 2599
// 2550에서 결정
// 5도 같은 숫자이므로 여기서 경우의 수로 나뉨
// 2550, 2559
// 2554에서
// 2550으로 가는 가장 빠른 경우의 수는 2550임
// 2565
// 20으로 간다면,


// 10(1), 19(2)
// 16, 16

// 2000(2) 2990(4), 2999(4)
//
// 2500(7) 2590(8), 2599(8)
// 2550(12), 2559(14)
// 2554(16), 2554(19)

// Map객체를 계속 바꿀까 그럼 되잖음

// 986
// 900(2), 990(2), 999(2)
// 900, 990, 999
// 980은 3인게 확정될테고
// 980(3), 989(3)
// 986
// 980, 989
// 986(6)
// entries에서 startWith(99)인거 찾기


// Map 객체를 활용하면 되겠다.

// 980
// 900인 경우에는
// 900, 990, 999 다 수집해야 되고,
// 980인 경우에는
// 980, 989


function solution(storey) {
    var answer = 0;
    if(storey < 10) answer = Math.min(storey, 10 - storey + 1);
    else {
        let numberMap = new Map();
        const storeyStr = '' + storey;
        let k = '';
        for(let i = 0; i < storeyStr.length; i++){
            if(!numberMap.size){
                const storeyNum = parseInt(storeyStr[i]);
                let count = Math.min(storeyNum, 10 - storeyNum + 1);
                numberMap.set(storeyStr[i] + '0'.repeat(storeyStr.length - 1), count);
                for(let j = 1; j <= storeyStr.length - 1; j++){
                    numberMap.set(storeyStr[i] + '9'.repeat(j) + '0'.repeat(storeyStr.length - 1 - j), Math.min(storeyNum + 2, 10 - storeyNum + 1));
                }
            }
            else {
                const newNumberMap = new Map();
                [...numberMap.entries()].forEach(([key, value]) => {
                    for(let j = 0; j < storeyStr.length - i; j++){
                        if(j === 0){
                                                    newNumberMap.set(k + storeyStr[i] + '9'.repeat(j) + '0'.repeat(storeyStr.length - i - j - 1), (newNumberMap.get(k + storeyStr[i] + '9'.repeat(j) + '0'.repeat(storeyStr.length - i - j - 1)) || Number.POSITIVE_INFINITY) > value + Math.abs(parseInt(key[i]) - parseInt(storeyStr[i])) ? value + Math.abs(parseInt(key[i]) - parseInt(storeyStr[i])) : newNumberMap.get(k + storeyStr[i] + '9'.repeat(j) + '0'.repeat(storeyStr.length - i - j - 1)));
                        }
                        else {
                            if(!parseInt(key[i])){
                                newNumberMap.set(k + storeyStr[i] + '9'.repeat(j) + '0'.repeat(storeyStr.length - i - j - 1), (newNumberMap.get(k + storeyStr[i] + '9'.repeat(j) + '0'.repeat(storeyStr.length - i - j - 1)) || Number.POSITIVE_INFINITY) > value + Math.abs(parseInt(key[i]) - parseInt(storeyStr[i])) + 2 ? value + Math.abs(parseInt(key[i]) - parseInt(storeyStr[i])) + 2 : newNumberMap.get(k + storeyStr[i] + '9'.repeat(j) + '0'.repeat(storeyStr.length - i - j - 1)));
                                // console.log(1, newNumberMap);
                            }
                            else {
                                newNumberMap.set(k + storeyStr[i] + '9'.repeat(j) + '0'.repeat(storeyStr.length - i - j - 1), (newNumberMap.get(k + storeyStr[i] + '9'.repeat(j) + '0'.repeat(storeyStr.length - i - j - 1)) || Number.POSITIVE_INFINITY) > value + Math.abs(parseInt(key[i]) - parseInt(storeyStr[i])) ? value + Math.abs(parseInt(key[i]) - parseInt(storeyStr[i])) : newNumberMap.get(k + storeyStr[i] + '9'.repeat(j) + '0'.repeat(storeyStr.length - i - j - 1)));
                                // console.log(2, newNumberMap);
                            }
                        }
                    }
                })
                numberMap = newNumberMap;
            }
            // console.log(numberMap);
            k += storeyStr[i];
        }
        answer = numberMap.get(storeyStr);
    }
    return answer;
}



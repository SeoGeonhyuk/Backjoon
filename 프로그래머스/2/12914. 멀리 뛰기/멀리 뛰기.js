// function solution(n) {
//     const memo = new Map([[0, BigInt(1)], [1, BigInt(1)]]);
//     jumpHyojin(n, memo);
//     return memo.get(n) % BigInt(1234567);
// }

// function jumpHyojin(n, memo){
//     if(memo.has(n))
//         return memo.get(n);
//     else{
//         memo.set(n, BigInt(jumpHyojin(n - 1, memo)) + BigInt(jumpHyojin(n - 2, memo)));
//         return memo.get(n);
//     }
// }

function solution(n) {
    const memo = new Map([[0, BigInt(1)], [1, BigInt(1)]]);
    
    for(let i = 2; i <= n; i++) {
        memo.set(i, memo.get(i-1) + memo.get(i-2));
    }
    
    return memo.get(n) % BigInt(1234567);
}
// 재귀를 써야 하는 문제인 거 같다.
// 하지만 시간 초과가 떴으므로 메모이제이션을 한 번 써보자.

// Map 객체에 없을 때 있을 때
// 없을 때 -> 다시 해당 함수 실행
// 있을 때 찾아서 반환
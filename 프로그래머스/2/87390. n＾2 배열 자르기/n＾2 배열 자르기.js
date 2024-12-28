// function solution(n, left, right) {
//     var answer = [];
//     const numMap = new Map();
//     let count = 0;
//     for(let i = 1; i <= n; i++){
//         numMap.set(i, `${i * parseInt('1'.repeat(i))}`);
//     }
//     [...numMap.keys()].some((key) => {
//         answer.push(makeArray(key, n, numMap));
//         count += n;
//         if(count >= right + 1) return true;
//         return false;
//     })
//     return answer.flat().slice(left, right + 1);
// }

// function makeArray(key, n, numMap){
//     let array = [numMap.get(key).split('').map(Number)];
//     for(let i = key + 1; i <= n; i++){
//         array.push(i)
//     }
//     return array.flat();
// }


// 123
// 223
// 333

// 123 223 333

// 1234
// 2234
// 3334
// 4444

// 1234 2234 3334 4444


// 12345
// 22345
// 33345
// 44445
// 55555

// 12345 22345 33345 44445 55555

// 1234522345

// 1 1
// 2 22 
// 3 333
// 4 4444
// 5 55555
// 6 66666


// 123
// 223
// 333

// 1,1 => 1
// 1,2 => 2
// 2,1 => 2
// 2,2 => 2
// 1,3 => 3
// 2,3 => 3
// 3,1 => 3
// 3,2 => 3
// 3,3 => 3

//  1   2   3   2   2   3   3   3   3
// 1,1 1,2 1,3 2,1 2,2 2,3 3,1 3,2 3,3
//  0   1   2   3   4   5   6   7   8

// 3, 4, 5, 6
// 인덱스를 통해 몇 행에 있는지 예측 가능하다.

// 1에 있다면 % 3을 통해서 1이 나올 것이고 
// 2에 있다면 % 3을 통해서 2가 나올 것이고
// 3에 있다면 % 3을 통해서 0이 나온다. 반대로 말하면 나머지가 0인 경우에는 세 번째에 있는 것이다.


// 나누기를 통해 무슨 행에 있는지 알 수 있다.
// 5번째에 인덱스를 찾길 원한다면, 5 + 1을 해서 6을 만들고
// 나누기 3을 해서 2를 통해 2번째 행에 있다는 것을 알수 있고 %3을 통해 0이 나오면 3번째 행에 있다는 것을 알 수 있다.
// 그럼 열이 행보다 클경우에는 열을 따르고 그 외의 경우에는 행을 따르면 된다.


function solution(n, left, right) {
    var answer = [];
    for(let i = left; i <= right; i++){
        // const iPlus = i + 1;
        const y = Math.floor(i / n);
        let x = Math.floor(i % n);
        if(y >= x) answer.push(y + 1);
        else answer.push(x + 1);
    }
    return answer;
}
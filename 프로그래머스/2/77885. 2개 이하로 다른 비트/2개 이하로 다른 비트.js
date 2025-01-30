// function solution(numbers) {
//     var answer = [];
//     numbers.forEach(number => {
//         const numberBinary = number.toString(2);
//         const numberBinaryMap = new Map();
//         for(let i = 0; i < numberBinary.length; i++){
//             numberBinaryMap.set(numberBinary[i], (numberBinaryMap.get(numberBinary[i]) || 0) + 1);
//         }
//         let zeroCount = (numberBinaryMap.get('0') || 0);
//         let oneCount = (numberBinaryMap.get('1') || 0);
//         while(Math.abs(zeroCount - (numberBinaryMap.get('0') || 0)) + Math.abs(oneCount - (numberBinaryMap.get('1') || 0)) > 2 || Math.abs(zeroCount - (numberBinaryMap.get('0') || 0)) + Math.abs(oneCount - (numberBinaryMap.get('1') || 0)) === 0) {
//             number += 1;
//             zeroCount = 0;
//             oneCount = 0;
//             const numberBinary2 = number.toString(2);
//             for(let i = 0; i < numberBinary2.length; i++){
//                 if(numberBinary2[i] === '0') zeroCount += 1;
//                 else oneCount += 1;
//             }
//         }
        
//         answer.push(number);
//     })
//     return answer;
// }

// function solution(numbers) {
//     var answer = [];
//     numbers.forEach((number) => {
//         const numberBinary = number.toString(2);
//         let oneCount = 0;
//         for(let i = numberBinary.length - 1; i >= 0; i--){
//             if(numberBinary[i] === '0') break;
//             else oneCount += 1;
//         }
//         if(oneCount === 0) oneCount = 1;
//         answer.push(number + (2 ** (oneCount - 1)))
//     });
//     return answer;
// }


// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
function solution(numbers) {
  var answer = [];
  let c;
  numbers.forEach(v => {
    if (v < 2 || v % 2 === 0) {
        answer.push(v+1);
    } else {
        let c = 2;
        while(true) {
            if ((v + 1) % (c * 2) === 0) {
                c = c * 2;
            } else {
                break;
            }
        };
        answer.push(v + (c / 2));
    }
  });
  return answer;
}
//오른쪽부터 0을 만날때까지의 1의 개수를 활용해서 추적할 수 있을 것이다.
// '10'이라면 11
// '01이라면 10(2)' + 1
// '011이라면 100(3) 101(2)' + 2
// '0111이라면 1000(4) 1001(3) 1010(3) 1011(2)' + 4
// '01111이라면 10000(5), 10001(4), 10010(4), 10011(3), 10100(4), 10101(3), 10110(3), 10111(2)' +8
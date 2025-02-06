// function solution(sticker) {
//   var answer = Number.NEGATIVE_INFINITY;
//   const stickerArray = [{startIndex: 0, isEven: true, val: 0}, {startIndex: 1, isEven: false, val: 0}];
//   while(stickerArray.length){
//       const indexObject = stickerArray.pop();
//       if(indexObject.startIndex >= sticker.length){
//         if(indexObject.val > answer) answer = indexObject.val;
//         continue;
//       }
//       if(indexObject.startIndex === sticker.length - 1 && !indexObject.isEven){
//           stickerArray.push({isEven: false, startIndex: indexObject.startIndex + 1, val: indexObject.val + sticker[sticker.length - 1]});
//       }
//       else if(indexObject.startIndex === sticker.length - 1 && indexObject.isEven){
//         if(indexObject.val > answer) answer = indexObject.val;
//         continue;
//       }
//       else {
//           stickerArray.push({...indexObject, startIndex: indexObject.startIndex + 2, val: indexObject.val + sticker[indexObject.startIndex]});
//           stickerArray.push({...indexObject, startIndex: indexObject.startIndex + 3, val: indexObject.val + sticker[indexObject.startIndex + 1]});
//       }
//   }
//   return answer;
// }


function solution(sticker) {
    const n = sticker.length;
    if (n === 1) return sticker[0];
    if (n === 2) return Math.max(sticker[0], sticker[1]);
    
    // 첫 번째 스티커를 선택한 경우
    const dp1 = new Array(n).fill(0);
    dp1[0] = sticker[0];
    dp1[1] = sticker[0];
    for (let i = 2; i < n-1; i++) {
        dp1[i] = Math.max(dp1[i-1], dp1[i-2] + sticker[i]);
    }
    
    // 첫 번째 스티커를 선택하지 않은 경우
    const dp2 = new Array(n).fill(0);
    dp2[0] = 0;
    dp2[1] = sticker[1];
    for (let i = 2; i < n; i++) {
        dp2[i] = Math.max(dp2[i-1], dp2[i-2] + sticker[i]);
    }
    
    return Math.max(dp1[n-2], dp2[n-1]);
}

// function treverseArray(startIndex, sticker, val){
//     // console.log(startIndex, val);
//     if(startIndex >= sticker.length){
//         // console.log(val);
//         return val;
//     }
//     else if(startIndex + 1 === sticker.length) {
//         return val + sticker[startIndex];
//     }
//     else {
//         return Math.max(treverseArray(startIndex + 2, sticker, val + sticker[startIndex], treverseArray(startIndex + 3, sticker, val + sticker[startIndex + 1])))
//     }
// }


// 0을 선택하면? 2부터 시작해야해
// 1을 선택하면? 3부터 시작해야 해
// 2를 선택하면 4부터 시작해야 해
// 3을 선택하면 5부터 시작해야 해

// i를 선택한 미래와 i를 선택하지 않은 미래 두가지로 나뉘게끔 처리해볼까

// 0이 있고 1이 있음
// 0은 이제 2이후를 선택할 수 있고
// 1은 3이후를 선택할 수 있음
// 0은 2또는 3을 선택
// 2는 4를 선택할 수도 5를 선택할 수도 있음
// 이걸 BFS로 바꿀 수 있을거 같은데? 근데 두가지로 나누는게 좋을 듯 함 0을 선택하는 경우와 1을 선택하는 경우 둘다 0을 못쓰게 되는건 똑같지만,
// 14, 11, 10, 9, 6, 5, 3 , 2
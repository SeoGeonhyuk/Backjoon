// function solution(n, works) {
//     var answer = 0;
//     const sortedWorks = works.sort((a, b) => b - a);
//     let iterateCount = Math.floor(n / sortedWorks.length);
//     let leftWorks = n;
//     for(let i = 0; i < sortedWorks.length; i++){
//         if(sortedWorks[i] === 0) continue;
//         sortedWorks[i] -= iterateCount ? iterateCount : 1;
//         leftWorks -= iterateCount ? iterateCount : 1;
//         if(sortedWorks[i] < 0) {
//             leftWorks += -1 * sortedWorks[i];
//             sortedWorks[i] = 0;
//         }
//         if(i === sortedWorks.length - 1 && leftWorks > 0 && sortedWorks[0] > 0) {
//             i = -1;
//             iterateCount = 0;
//         }
//         if(leftWorks === 0) break;
//     }
    // answer = sortedWorks.reduce((acc, cur) => {
    //     return acc + cur ** 2;
    // }, 0)
    // return answer;
// }

function solution(n, works) {
  var answer = 0;
  const heap = [];

  for (let i = 0; i < works.length; i++) {
    heap.push(works[i]);
      let currentIndex = heap.length - 1;
      while (currentIndex > 0) {
        let parentIndex = Math.floor((currentIndex - 1) / 2);
        if (heap[parentIndex] < heap[currentIndex])
          [heap[parentIndex], heap[currentIndex]] = [
            heap[currentIndex],
            heap[parentIndex],
          ];
        currentIndex = parentIndex;
      }
  }

  while (n > 0) {
    const maxVal = heap[0] - 1;
    if(heap.length === 1) heap.pop();
    else heap[0] = heap.pop();
    n -= 1;
    let currentIndex = 0;
    if (heap.length > 1) {
      while (currentIndex < heap.length) {
        let left = currentIndex * 2 + 1;
        let right = currentIndex * 2 + 2;
        let largest = currentIndex;
        if (left < heap.length && heap[left] > heap[largest]) largest = left;
        if (right < heap.length && heap[right] > heap[largest]) largest = right;
        if (largest === currentIndex) break;
        [heap[currentIndex], heap[largest]] = [
          heap[largest],
          heap[currentIndex],
        ];
        currentIndex = largest;
      }
    }
    if (maxVal > 0) heap.push(maxVal);
    currentIndex = heap.length - 1;
    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      if (heap[parentIndex] < heap[currentIndex])
        [heap[parentIndex], heap[currentIndex]] = [
          heap[currentIndex],
          heap[parentIndex],
        ];
      currentIndex = parentIndex;
    }
  }
    console.log(heap);
  answer = heap.reduce((acc, cur) => {
    return acc + cur ** 2;
  }, 0);
  return answer || 0;
}


// 하나를 0이될때까지 감소시키는 것보다 전반적으로 하나씩 줄이는 것이 훨씬 더 이득이다.
// 라고 생각했는데 예외 케이스를 발견했다.
// [3, 1]에 2가 주어진다면
// [2, 0]보다 [1, 1]이 더 낫다.
// 이것을 보고 이 문제는 최대 힙을 써야 하는 문제라고 판단했다.



//          0
//    1             2
//  3      4      5     6
// 7 8    9 10  11 12 13 14

// 1 -> 0(1)
// 2 -> 0(1 + 1)
// 짝수면 + 1을 하면 될듯?
// 홀수일 경우
// Math.floor(index / 2)
// 짝수일 경우
// Math.floor(index / 2) - 1

// 3 -> 1(2)
// 4 -> 1(2 + 1)

// 5 -> 2(3)
// 6 -> 2(3 + 1)

// 7 -> 3(4)
// 8 -> 3(4 + 1)



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

// function solution(n, works) {
//     var answer = 0;
//     const heap = [];
    
//     for(let i = 0; i < works.length; i++) {
//         heap.push(works[i]);
//         if(heap.length > 1) {
//             let currentIndex = heap.length - 1;
//         while(currentIndex > 0) {
//             let parentIndex = Math.floor((currentIndex - 1) / 2);
//             if(heap[parentIndex] < heap[currentIndex]) [heap[parentIndex], heap[currentIndex]] = [heap[currentIndex], heap[parentIndex]];
//             currentIndex = parentIndex;
//             }
//         }
//     }
    
//     while(n > 0) {
//         const maxVal = heap.shift();
//         n -= 1;
//         if(maxVal > 0) heap.push(maxVal - 1);
//         let currentIndex = heap.length - 1;
//         if(heap.length > 1) {
//             while(currentIndex > 0) {
//             let parentIndex = Math.floor((currentIndex - 1) / 2);
//             if(heap[parentIndex] < heap[currentIndex]) [heap[parentIndex], heap[currentIndex]] = [heap[currentIndex], heap[parentIndex]];
//             currentIndex = parentIndex;
//             }
//         }
        
//     }
//     answer = heap.reduce((acc, cur) => {
//     return acc + BigInt(cur) ** 2n;
//     }, 0n);
//     return Number(answer);
// }

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


function solution(n, works) {
    class MaxHeap {
        constructor() {
            this.heap = [];
        }
        
        push(value) {
            this.heap.push(value);
            this.heapifyUp();
        }
        
        pop() {
            if (this.heap.length === 0) return null;
            if (this.heap.length === 1) return this.heap.pop();
            
            const max = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.heapifyDown();
            
            return max;
        }
        
        heapifyUp() {
            let currentIdx = this.heap.length - 1;
            while (currentIdx > 0) {
                const parentIdx = Math.floor((currentIdx - 1) / 2);
                if (this.heap[parentIdx] >= this.heap[currentIdx]) break;
                
                [this.heap[parentIdx], this.heap[currentIdx]] = 
                [this.heap[currentIdx], this.heap[parentIdx]];
                currentIdx = parentIdx;
            }
        }
        
        heapifyDown() {
            let currentIdx = 0;
            
            while (true) {
                const leftIdx = currentIdx * 2 + 1;
                const rightIdx = currentIdx * 2 + 2;
                let maxIdx = currentIdx;
                
                if (leftIdx < this.heap.length && 
                    this.heap[leftIdx] > this.heap[maxIdx]) {
                    maxIdx = leftIdx;
                }
                
                if (rightIdx < this.heap.length && 
                    this.heap[rightIdx] > this.heap[maxIdx]) {
                    maxIdx = rightIdx;
                }
                
                if (maxIdx === currentIdx) break;
                
                [this.heap[currentIdx], this.heap[maxIdx]] = 
                [this.heap[maxIdx], this.heap[currentIdx]];
                currentIdx = maxIdx;
            }
        }
    }
    
    const maxHeap = new MaxHeap();
    works.forEach(work => maxHeap.push(work));
    
    while (n > 0 && maxHeap.heap[0] > 0) {
        const maxWork = maxHeap.pop();
        maxHeap.push(maxWork - 1);
        n--;
    }
    
    return maxHeap.heap.reduce((acc, cur) => acc + cur * cur, 0);
}


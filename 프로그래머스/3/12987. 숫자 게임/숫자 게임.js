// function solution(A, B) {
//     var answer = 0;
//     var loseArray = [];
//     const sortedB = B.sort((a, b) => a - b);
//     for(let i = 0; i < A.length; i++){
//         if(A[i] < sortedB[i]) {
//             answer += 1;
//             loseArray.push(-1);
//         }
//         else {
//             loseArray.push(sortedB[i]);
//         }
//     }
//     for(let i = 0; i < A.length; i++){
//         if(sortedB[i] !== -1 && A[i] > sortedB[i]) {
//             let winnerIndex = -1;
//             for(let j = i; j < loseArray.length; j++){
//                 if(loseArray[j] >= A[i] && loseArray[j] !== A[j]) {
//                     winnerIndex = j;
//                     break;
//                 }
//                 else if(loseArray[j] > A[i] && loseArray[j] !== A[j]) {
//                     winnerIndex = j;
//                     break;
//                 }
//             }
//             if(winnerIndex !== -1){
//                 [sortedB[i], sortedB[winnerIndex]] = [sortedB[winnerIndex], sortedB[i]];
//                 if(sortedB[i] > A[i]) answer += 1;
//             }
//         }
//         else if(sortedB[i] !== -1 && A[i] === sortedB[i]) {
//             let winnerIndex = -1;
//             for(let j = i; j < loseArray.length; j++){
//                 if(loseArray[j] > A[i] && loseArray[j] !== A[j]) {
//                     winnerIndex = j;
//                     break;
//                 }
//             }
//             if(winnerIndex !== -1){
//                 [sortedB[i], sortedB[winnerIndex]] = [sortedB[winnerIndex], sortedB[i]];
//                 answer += 1;
//             }
//         }
//     }
//     return answer;
// }

// 어차피 지는 경우의 수라면 가장 낮은 값을 투입하는 것이 낫다.
// 일단 지는 경우의 수를 전부 수집하고
// 다시 한번 대결했을 때 지는 경우의 수를 만난다면, 그 지는 경우의 수가 이기는 수가 될때까지 값을 찾고 그 값과 인덱스를 바꾼다
// 어차피 지는 경우의 수라면 가장 낮은 값을 투입하는 것이 낫다.
// 일단 지는 경우의 수를 전부 수집하고
// 다시 한번 대결했을 때 지는 경우의 수를 만난다면, 그 지는 경우의 수가 이기는 수가 될때까지 값을 찾고 그 값과 인덱스를 바꾼다

function solution(A, B) {
    var answer = 0;
    A = A.sort((a, b) => a - b);
    const sortedB = B.sort((a, b) => a - b);
    let minHeap = new MinHeap(sortedB);
    let index = 0;
    while(index < A.length) {
        while(minHeap.top() && minHeap.top() <= A[index]) {
            minHeap.pop();
        }
        if(A[index] < minHeap.top()){
            minHeap.pop();
            answer += 1;
        }
        index += 1;
    }
    return answer;
}

class MinHeap {
    constructor(arr){
        if(arr) this.heap = arr;
        else this.heap = [];
    }
    
    push(ele){
        this.heap.push(ele);
        if(this.heap.length > 1) {
            let child = this.heap.length - 1;
            while(child > 0){
                const parent = Math.floor((child - 1) / 2);
                if(this.heap[parent] > this.heap[child]) {
                    [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]];
                    child = parent;
                }
                else break;
            }
        }
    }
    
    top() {
        if(this.heap.length) return this.heap[0];
        else return undefined;
    }
    
    pop() {
        if(this.heap.length === 1) return this.heap.pop();
        else if(this.heap.length === 0) return undefined;
        else {
            const popVal = this.heap[0];
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.pop();
            let parent = 0;
            while(parent < this.heap.length) {
                let left = parent * 2 + 1;
                let right = parent * 2 + 2;
                let largest = parent;
                if(left < this.heap.length && this.heap[left] < this.heap[largest]) {
                    largest = left;
                }
                if(right < this.heap.length && this.heap[right] < this.heap[largest]) {
                    largest = right;
                }
                if(parent === largest) break;
                [this.heap[parent], this.heap[largest]] = [this.heap[largest], this.heap[parent]];
                parent = largest;
            }
            return popVal;
        }
    }
}
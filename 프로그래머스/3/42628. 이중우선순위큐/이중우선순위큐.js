function solution(operations) {
    var answer = [];
    const translatedOperations = operations.map((operation) => {
        const splitedOperation = operation.split(' ');
        return [splitedOperation[0], Number(splitedOperation[1])];
    });
    const maxHeap = new MaxHeap();
    const minHeap = new MinHeap();
    const countMap = new Map();
    translatedOperations.forEach((operation) => {
        if(operation[0] === 'I'){
            maxHeap.heapPush(operation[1]);
            minHeap.heapPush(operation[1]);
        }
        else if(operation[0] + ' ' + operation[1] === 'D 1') {
            const maxVal = maxHeap.heapPop();
            const minArray = [];
            while(minHeap.heap.length > 0){
                const val = minHeap.heapPop();
                if(val === maxVal) break;
                minArray.push(val);
            }
            minArray.forEach((min) => {
                minHeap.heapPush(min);
            });
        }
        else if(operation[0] + ' ' + operation[1] === 'D -1') {
            const minVal = minHeap.heapPop();
            const maxArray = [];
            while(maxHeap.heap.length > 0){
                const val = maxHeap.heapPop();
                if(val === minVal) break;
                maxArray.push(val);
            }
            maxArray.forEach((max) => {
                maxHeap.heapPush(max);
            });
        }
    });
    // let maxVal = 0;
    // let minVal = 0;
    // while(maxHeap.heap.length > 0) {
    //     maxVal = maxHeap.heapPop();
    //     if(countMap.get(maxVal) > 0) break;
    //     else maxVal = 0;
    // }
    // while(minHeap.heap.length > 0) {
    //     minVal = minHeap.heapPop();
    //     if(countMap.get(minVal) > 0) break;
    //     else minVal = 0;
    // }
    answer = [maxHeap.heapPop(), minHeap.heapPop()];
    return answer;
}

class MaxHeap {
    constructor(){
        this.heap = [];
    }
    
    heapPush(val) {
        if(this.heap.length === 0) this.heap.push(val);
        else {
            this.heap.push(val);
            let currentIndex = this.heap.length - 1;
            while(currentIndex > 0) {
                let parentIndex = Math.floor((currentIndex - 1) / 2);
                if(this.heap[currentIndex] > this.heap[parentIndex]){
                    [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
                    currentIndex = parentIndex;
                }
                else break;
            }
        }
    }
    
    heapPop() {
        if(this.heap.length === 1) return this.heap.pop();
        else if(this.heap.length === 0) return 0;
        else {
            const maxVal = this.heap[0];
            this.heap[0] = this.heap.pop();
            let currentIndex = 0;
            while(currentIndex < this.heap.length) {
                let left = currentIndex * 2 + 1;
                let right = currentIndex * 2 + 2;
                let largest = currentIndex;
                if(left < this.heap.length && this.heap[left] > this.heap[largest]) largest = left;
                if(right < this.heap.length && this.heap[right] > this.heap[largest]) largest = right;
                if(largest === currentIndex) break;
                [this.heap[currentIndex], this.heap[largest]] = [this.heap[largest], this.heap[currentIndex]];
                currentIndex = largest;
            }
            return maxVal;
        }
    }
}

class MinHeap {
    constructor(){
        this.heap = [];
    }
    
    heapPush(val) {
        if(this.heap.length === 0) this.heap.push(val);
        else {
            this.heap.push(val);
            let currentIndex = this.heap.length - 1;
            while(currentIndex > 0) {
                let parentIndex = Math.floor((currentIndex - 1) / 2);
                if(this.heap[currentIndex] < this.heap[parentIndex]){
                    [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
                    currentIndex = parentIndex;
                }
                else break;
            }
        }
    }
    
    heapPop() {
        if(this.heap.length === 1) return this.heap.pop();
        else if(this.heap.length === 0) return 0;
        else {
            const minVal = this.heap[0];
            this.heap[0] = this.heap.pop();
            let currentIndex = 0;
            while(currentIndex < this.heap.length) {
                let left = currentIndex * 2 + 1;
                let right = currentIndex * 2 + 2;
                let smallest = currentIndex;
                if(left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
                if(right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
                if(smallest === currentIndex) break;
                [this.heap[currentIndex], this.heap[smallest]] = [this.heap[smallest], this.heap[currentIndex]];
                currentIndex = smallest;
            }
            return minVal;
        }
    }
}
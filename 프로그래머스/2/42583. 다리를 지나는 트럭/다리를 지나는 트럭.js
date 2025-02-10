class Queue {
  constructor() {
    this.storage = new Object();
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.rear - this.front;
  }

  enqueue(element) {
    this.storage[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    let removed = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;

    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
    }

    return removed;
  }
}

function solution(bridge_length, weight, truck_weights){
    var answer = 0;
    const bridgeQueue = new Queue();
    let index = 0;
    let count = 0;
    let bridgeWeight = 0;
    while(index < truck_weights.length){
        if(bridgeQueue.size() >= bridge_length){
            const val = bridgeQueue.dequeue();
            if(val) {
                bridgeWeight -= val;
                count += 1;
            }
        }
        if(bridgeWeight + truck_weights[index] <= weight){
                bridgeQueue.enqueue(truck_weights[index]);
                bridgeWeight += truck_weights[index];
                index += 1;
        }
        else bridgeQueue.enqueue(null);
        answer += 1;
    }
    while(count < truck_weights.length){
        if(bridgeQueue.size() >= bridge_length){
            const val = bridgeQueue.dequeue();
            if(val) {
                bridgeWeight -= val;
                count += 1;
            }
        }
        bridgeQueue.enqueue(null);

        answer += 1;
    }
    // while(index < truck_weights.length || (index >= truck_weights.length && bridgeQueue.storage[bridgeQueue.front])){
    //     if(index < truck_weights.length && bridgeWeight + truck_weights[index] <= weight && bridgeQueue.size() <= bridge_length){
    //         bridgeQueue.enqueue(truck_weights[index]);
    //         bridgeWeight += truck_weights[index];
    //         index += 1;
    //     }
    //     else {
    //         bridgeQueue.enqueue(null);
    //     }
    //     answer += 1;
    //     if(bridgeQueue.size() > bridge_length){
    //         const val = bridgeQueue.dequeue();
    //         if(val){
    //             bridgeWeight -= val;
    //         }
    //     }
    // }
    return answer;
}

// 문제를 완전히 잘못 읽었었다. 고정된 순서로 지나가는게 목적인건데 나는 순서를 최적화 해서 나오는 최소 시간을 구하는 문제인지 알았다.
// 이런 적은 최근 들어 없었는데, 지문이 너무 더러웠다...
// 그럼 큐 자료구조를 활용해서 쉽게 해결할 수 있을 것 같았고 그렇게 해서 문제를 풀었다.
// function solution(bridge_length, weight, truck_weights) {
//     var answer = 0;
//     const sortedTruckWeights = truck_weights.sort((a, b) => a - b);
//     let left = 0;
//     let right = sortedTruckWeights.length - 1;
//     const truckOrders = [];
//     while(left <= right){
//         if(left === right){
//             truckOrders.push(sortedTruckWeights[left]);
//             break;
//         }
//         if(sortedTruckWeights[right] + sortedTruckWeights[left] > weight){
//             truckOrders.push(sortedTruckWeights[right]);
//             right -= 1;
//         }
//         else if(sortedTruckWeights[right] + sortedTruckWeights[left] <= weight && bridge_length >= 2) {
//             const possibleTruckOrders = [];
//             let weightSum = sortedTruckWeights[right];
//             truckOrders.push(sortedTruckWeights[right]);
//             right -= 1;
//             while(left < right && possibleTruckOrders.length + 1 <= bridge_length - 1 && weightSum + sortedTruckWeights[left] <= weight){
//                 possibleTruckOrders.push(sortedTruckWeights[left]);
//                 weightSum += sortedTruckWeights[left]
//                 left += 1;
//             }
//             truckOrders.push(...possibleTruckOrders.reverse());
//         }
//     }
//     let bridgeWeightSum = 0;
//     let index = 0;
//     let bridgeTruckCount = 0;
//     while(index < truckOrders.length){
//         bridgeWeightSum += truckOrders[index];
//         bridgeTruckCount += 1;
//         if(bridgeWeightSum <= weight && bridge_length >= 2){
//             index += 1;
//             while(bridgeTruckCount + 1 <= bridge_length && bridgeWeightSum + truckOrders[index] <= weight){
//                 bridgeWeightSum += truckOrders[index];  
//                 bridgeTruckCount += 1;
//                 index += 1;
//             }
//         }
//     }
//     return answer;
// }

// 4일때 길이가 1이면 5초 뒤에 입성 가능
// 4일때 길이가 2이면 5초 뒤에 입성 가능
// 4일때 길이가 3이면 6초 뒤에 뒤에 차량 입성 가능
// 1개 일때 n초
// 그 다음 것이 2개 이상일 때 n * 2초


// 7, 6, 4, 5

// 10, 7, 5, 4, 6, 2
// 10, 7, 2, 6, 4, 5

// 10 (0, 2)
// 7 (3)
// 7, 2(4)
// 2, 6(5)
// 6, 4(6)
// 4, 5(7)
// 5(8)
// (9)

// 지나가는 건 어차피 마지막에 +1 만 하면 됨
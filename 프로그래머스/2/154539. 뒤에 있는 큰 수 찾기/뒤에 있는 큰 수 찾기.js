function solution(numbers) {
    const answer = [];
    const stack = [];
    
    for (let i = numbers.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= numbers[i]) {
            stack.pop();
        }
        
        answer.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
        stack.push(numbers[i]);
    }
    
    return answer.reverse();
}

// 2의 입장에서는 3을 찾음
// 3의 입장에서는 5를 찾음

// 2 -> 0, 3 -> 1, 2  , 5 -> 3

// Heap과 Map을 쓰면 어떨까
// 최대 힙으로 순서대로 담고
// Map을 통해 해당 값의 index가 앞에 있는지만 확인한다면?'


// 2 -> -1
// 6 -> 2랑 비교했을 때 -1
// 그리고 6으로 교체
// 3 -> 6랑 비교했을 때 6
// 5 -> 3, 6랑 비교했을 때 6
// 1 -> 5, 6랑 비교했을 때 5
// 9 -> 5, 6랑 비교했을 때 -1 
// 그리고 9로 교체
    
    
    // 최댓 값과 어레이 마지막으로 나눈다.
    
    // 2일 때 최댓값 2, 어레이 마지막 2
    // 6일 때 최댓값 6, 어레이 마지막 2
    // 3일 때 최댓값 6, 어레이 마지막 3
    // 5일 때 최댓값 6, 어레이 마지막 5 => 6
    // 1일 때 최댓값 6, 어레이 마지막 5 => 5
    // 9일 때 최댓값 9, 어레이 마지막 6 => -1


// 0, 1, 2, 3, 4, 5

// 1, 2, 3, 5, 6, 9

// 0, 1, 2, 3, 4, 5

// 9, 1, 5, 3, 6, 2

// 원래 0번째 인데 1번째에 있는 거라면, 
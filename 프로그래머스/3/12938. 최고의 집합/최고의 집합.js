// 하나를 크게 만드는 것보다. 고르게 만드는 것이 곱의 크기가 더 커진다.
// 산술-기하 평균 부등식에 대해서 배울 수 있었다.
// 전에랑 비슷한 문제를 풀어봤던 거 같은데, 그 방법을 떠오르지 못하고 결국 AI에게 수학 공식을 물어본게 아쉽다.
// 이것은 "산술-기하 평균 부등식(Arithmetic-Geometric Mean Inequality)" 또는 줄여서 AM-GM 부등식이라고 합니다.
// 이 부등식의 핵심은:

// n개의 양수의 산술평균은 항상 기하평균보다 크거나 같다
// 모든 수가 같을 때만 등호가 성립

// 수식으로는:
// (x₁ + x₂ + ... + xₙ)/n ≥ ⁿ√(x₁ × x₂ × ... × xₙ)
// 이 문제에 적용하면:

// 합이 일정할 때(S로 고정)
// 곱을 최대로 만들려면
// 모든 수들의 차이를 최소화해야 함
// 즉, 가능한 한 모든 수를 균등하게 만드는 것이 곱을 최대화하는 방법이 됩니다. 이것이 이 문제에서 나머지를 1씩 분배하는 것이 최적해가 되는 수학적 근거입니다.
function solution(n, s) {
    var answer = [];
    const maxVal = Math.floor(s / n);
    if(!maxVal) return [-1];
    answer = new Array(n).fill(maxVal);
    if(s % n) {
        let sub = s % n;
        for(let i = answer.length - 1; sub > 0; i--){
            answer[i] += 1;
            sub -= 1;
        }
    }
    return answer;
}

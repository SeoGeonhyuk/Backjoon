function solution(n, stations, w) {
    var answer = 0;
    let lastIndex = 1;
    stations.forEach((station, index) => {
        if(station - w - lastIndex > 0)  answer += Math.ceil((station - w - lastIndex) / (w * 2 + 1));
        lastIndex = station + w + 1;
        if(index === stations.length - 1 && n + 1 - lastIndex > 0) answer += Math.ceil((n + 1 - lastIndex) / (w * 2 + 1));
    });
    return answer;
}

// 뭐랄까 BFS로 쉽게 해결할 수 있을 거 같은 예감
// 2개 이상일 경우에는 앞에거는 앞만 신경쓰고 마지막 애가 양 뒤만 신경쓰면 된다.(대신 오름차순으로 정렬되어 있어야 함)


// 5의 위치에서 전파력이 1이라면
// 2번째 위치에 두는게 가장 베스트일 거임 (w * 2 + 1)

// 4의 위치에서 전파력이 1이라면
// 1번째 위치에 두는게 가장 베스트일 거임

// index가 0일 경우 1부터 남은칸까지 w를 활용해서 계산 가능 4 - w - 1을 w * 2 + 1을 활용해서 Math.ceil을 해서 구할 수 있다.
// index가 1이상 일경우 자신 바로 앞에 있는 전봇대가 어디까지 영향을 주는지 확인 한 후, 자신의 앞 부분 영향을 뺌
// 예를 들오 첫번째 5, 두번째가 10이면 10 - 5 - 1을 통해서 4칸만 채우면 된다는 것을 알 수 있음 w*2 + 1을 활용해서 Math.ceil을 해서 사이 값을 구할 수 있음

// 마지막 index일 경우에는 n - 마지막 영향 부분을 활용해서 구할 수 있다.

// 마지막 부분이 문제였음 n으로만 계산하니까 오차가 발생해서 n + 1을 통해서 문제를 해결했다.
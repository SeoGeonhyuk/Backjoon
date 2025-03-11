function solution(players, m, k) {
    var answer = 0;
    const servers = new Array(24).fill(0);
    let serverCount = 0;
    for(let i = 0; i < players.length; i++){
        serverCount -= servers[i];
        if((players[i] - m) - (serverCount * m) >= 0) {
            let serverIncreasement;
            if((players[i] - m) - (serverCount * m) === 0) serverIncreasement = 1;
            else serverIncreasement = ((players[i] - m) - (serverCount * m)) % m === 0 ? ((players[i] - m) - (serverCount * m)) / m + 1 : Math.ceil(((players[i] - m) - (serverCount * m)) / m);
            
            // console.log(i, Math.ceil((((players[i] - m) - (serverCount * m))) / m) + 1);
            // console.log(i, serverIncreasement);
            if(i + k < players.length) servers[i + k] += serverIncreasement;
            answer += serverIncreasement;
            serverCount += serverIncreasement;
        }
    }
    return answer;
}
// 문제를 또 잘못 읽은 건 아니고... 잘못 생각했다.
// 서버는 동시에 시간이 차감된다는 사실을 기억해야 한다.
// function solution(players, m, k) {
//     var answer = 0;
//     let machineQueue = [];
//     let startIndex = 0;
//     let serverCount = 0;
//     for(let i = 0; i < players.length; i++){
//         if(m + serverCount * m <= players[i]) {
//             const serverIncreasement = players[i] % (m + (serverCount * m)) === 0 ? (players[i] - (m + serverCount * m)) / m + 1 : Math.ceil((players[i] - (m + serverCount * m)) / m);
//             answer += serverIncreasement;
//             for(let j = 0; j < k; j++) machineQueue.push(0);
//             machineQueue.push(serverIncreasement);
//             serverCount += serverIncreasement;
//         }
//         if(machineQueue.length > startIndex) {
//             if(machineQueue[startIndex]) serverCount -= machineQueue[startIndex];
//             startIndex += 1;
//         }
//         console.log(i, startIndex, serverCount, machineQueue);
//     }
//     return answer;
// }

// 큐를 활용해서 처음에 0 값을 넣은 다음 하나씩 밀도록 하면 된다.
// 배열의 길이 - startIndex가 k를 넘도록 하면 안된다.
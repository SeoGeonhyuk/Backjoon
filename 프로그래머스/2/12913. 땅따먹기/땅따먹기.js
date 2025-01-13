function solution(land) {
    var answer = 0;
    let firstLand = land[0];
    for(let i = 1; i < land.length; i++) {
        land[i].forEach((l, index) => {
            const dp = [];
            firstLand.forEach((f, j) => {
                if(index !== j) dp.push(l + f);
            })
            land[i][index] = Math.max(...dp);
        });
        firstLand = land[i];
    }
    answer = Math.max(...firstLand);
    return answer;
}
function solution(want, number, discount) {
    var answer = 0;
    const discountMap = new Map();
    const wantMap = new Map();
    want.forEach((w, index) => {
        wantMap.set(w, number[index]);
    });
    for(let i = 0; i < discount.length - 9; i++){
            const saleMap = new Map();
            let isPossible = true;
            for(let j = i; j < i + 10; j++){
                if(j > discount.length - 1){
                    isPossible = false;
                    break;
                }
                if(!saleMap.has(discount[j])) saleMap.set(discount[j], 0);
                saleMap.set(discount[j], saleMap.get(discount[j]) + 1);
            }
            if(isPossible){
                const wantMapKeys = wantMap.keys();
                [...wantMapKeys].every((key) => {
                    if(saleMap.get(key) === undefined || wantMap.get(key) > saleMap.get(key)){
                        isPossible = false;
                        return false;
                    }
                    return true;
                });
            }
            if(isPossible) answer += 1;
    }
    return answer;
}

// 일단, 해당 개수가 있는지 부터 검색해야 한다.
// 그 다음 날짜를 찾는다.
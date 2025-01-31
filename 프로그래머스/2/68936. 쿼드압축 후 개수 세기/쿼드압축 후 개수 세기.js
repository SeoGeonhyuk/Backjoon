function solution(arr) {
    var answer = [];
    const countMap = new Map();
    countMap.set(0, 0);
    countMap.set(1, 0);
    quadTree(arr, 0, 0, arr.length, arr[0].length, countMap);
    answer = [countMap.get(0), countMap.get(1)];
    return answer;
}

function quadTree(arr, startM, startN, m, n, countMap){
    const startBlock = arr[startM][startN];
    let isPossibleQuad = false;
    for(let i = startM; i < m; i++){
        for(let j = startN; j < n; j++){
            if(arr[i][j] !== startBlock){
                isPossibleQuad = true;
                break;
            }
        }
    }
    if(!isPossibleQuad){
        countMap.set(startBlock, countMap.get(startBlock) + 1);
    }
    else {
    if(m - startM === 2 && n - startN === 2){
        let isPossibleQuad = false;
        let block = arr[startM][startN];
        for(let i = startM; i < m; i++){
            for(let j = startN; j < n; j++){
                if(block !== arr[i][j]) {
                    isPossibleQuad = true;
                    break;
                }
            }
        }
        if(isPossibleQuad) {
            for(let i = startM; i < m; i++){
                for(let j = startN; j < n; j++){
                    countMap.set(arr[i][j], countMap.get(arr[i][j]) + 1);
                }
            }
        }
        else countMap.set(block, countMap.get(block) + 1);
    }
    else {
        let topLeft = false;
        let topRight = false;
        let bottomLeft = false;
        let bottomRight = false;
        let topLeftEle = arr[startM][startN];
        let topRightEle = arr[startM][Math.floor((startN + n) / 2)];
        let bottomLeftEle = arr[Math.floor((startM + m) / 2)][startN];
        let bottomRightEle = arr[Math.floor((startM + m) / 2)][Math.floor((startN + n) / 2)];
        for(let i = startM; i < Math.floor((startM + m) / 2); i++){
            for(let j = startN; j < Math.floor((startN + n) / 2); j++){
                if(topLeftEle !== arr[i][j]){
                    topLeft = true;
                    break;
                }
            }
        }
        
        for(let i = startM; i < Math.floor((startM + m) / 2); i++){
            for(let j = Math.floor((startN + n) / 2); j < n; j++){
                if(topRightEle !== arr[i][j]){
                    topRight = true;
                    break;
                }
            }
        }
        for(let i = Math.floor((startM + m) / 2); i < m; i++){
            for(let j = startN; j < Math.floor((startN + n) / 2); j++){
                if(bottomLeftEle !== arr[i][j]){
                    bottomLeft = true;
                    break;
                }
            }
        }
        for(let i = Math.floor((startM + m) / 2); i < m; i++){
            for(let j = Math.floor((startN + n) / 2); j < n; j++){
                if(bottomRightEle !== arr[i][j]){
                    bottomRight = true;
                    break;
                }
            }
        }
        if(!topLeft){
            if(topLeftEle) countMap.set(1, countMap.get(1) + 1);
            else countMap.set(0, countMap.get(0) + 1);
        }
        else quadTree(arr, startM, startN, Math.floor((startM + m) / 2), Math.floor((startN + n) / 2), countMap);
        if(!topRight){
            if(topRightEle) countMap.set(1, countMap.get(1) + 1);
            else countMap.set(0, countMap.get(0) + 1);
            
        }
        else quadTree(arr, startM, Math.floor((startN + n) / 2), Math.floor((startM + m) / 2), n, countMap);
        if(!bottomLeft){
            if(bottomLeftEle) countMap.set(1, countMap.get(1) + 1);
            else countMap.set(0, countMap.get(0) + 1);
        }
        else quadTree(arr, Math.floor((startM + m) / 2), startN, m, Math.floor((startN + n) / 2), countMap);
        if(!bottomRight){
            if(bottomRightEle) countMap.set(1, countMap.get(1) + 1);
            else countMap.set(0, countMap.get(0) + 1);
        }
        else quadTree(arr, Math.floor((startM + m) / 2), Math.floor((startN + n) / 2), m, n, countMap);
    }
    }
}
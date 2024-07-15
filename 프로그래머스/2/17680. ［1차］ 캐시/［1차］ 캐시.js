function solution(cacheSize, cities) {
    var answer = 0;
    let cacheArray = [];
    for(let i = 0; i < cities.length; i++){
        const upperCityName = cities[i].toUpperCase();
        let isHit = cacheArray.indexOf(upperCityName);
        if(isHit === -1){
            cacheArray.unshift(upperCityName);
            if(cacheArray.length > cacheSize){
                cacheArray.pop();
            }
            answer += 5;
        }
        //찾은 경우
        else{
            cacheArray = cacheArray.slice(0, isHit).concat(cacheArray.slice(isHit + 1, cacheArray.length));
            cacheArray.unshift(upperCityName);
            answer += 1;
        }
    }
    return answer;
}
    
    
    
//recentlyRead는 queue형태로 구현
//recentlyRead가 나가는 경우는 오직 새로운 캐시가 나올 때 뿐이다.

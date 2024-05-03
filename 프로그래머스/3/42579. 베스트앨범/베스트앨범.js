class SaveIndex{
    constructor(max, index){
        this.max = max;
        this.index = index;
    }
}
//장르 별 해시테이블을 만들기 위한 클래스
class SaveListen{
    constructor(genre) {
        this.genre = genre;
        this.firstMax = new SaveIndex(-1, -1);
        this.secondMax = new SaveIndex(-1, -1);
        this.sum = 0;
    }
    pushPlay(playNum, index){
        this.sum += playNum;
        if(this.firstMax.max <= playNum){
            if(this.firstMax.max == playNum && this.firstMax.max >= this.secondMax.max){
                this.secondMax.max = this.firstMax.max;
                this.secondMax.index = index;
            }
            else{
                this.secondMax.max = this.firstMax.max;
                this.secondMax.index = this.firstMax.index;
                this.firstMax.max = playNum;
                this.firstMax.index = index;
            }
            
        }
        else if(this.secondMax.max < playNum){
                this.secondMax.max = playNum;
                this.secondMax.index = index;
        }
    }
    
}
function solution(genres, plays) {
    var answer = [];
    //장르 별 해시 테이블을 만들기 위한 saveGenres
    let saveGenres = {};
    //장르 별 들은 횟수를 위한 배열
    //sumList['classic'] = 300 ok
    let sumList = [];
    //장르 별 해시 테이블을 좀 더 쉽게 가져오기 위한 valListIndex
    //valListIndex['classic'] = '3000'여기서 3000은 장르별 총 노래 듣기 횟수를 나타낸다.
    let valListIndex = [];
    //장르 별 특정 노래의 들은 횟수를 쉽게 가져오기 위한 valListSum
    //valListSum[3000] = 'classic'
    //이것을 응용해서
    //saveGenres에서 firstMax와 secondMax를 통해 각 장르별 인기 노래 1위 2위를 구한다.
    let valListSum = [];
    for(let i = 0; i < genres.length; i++){
        if(saveGenres[genres[i]] === undefined){
            saveGenres[genres[i]] = new SaveListen(genres[i]);
            sumList[genres[i]] = 0;
        }
        saveGenres[genres[i]].pushPlay(plays[i], i);
        sumList[genres[i]] = saveGenres[genres[i]].sum;
    }
    for (let key in saveGenres){
        valListSum.push(saveGenres[key].sum)
        valListIndex[saveGenres[key].sum] = key;
    }
    valListSum.sort((a, b) => b - a);
    for(let i = 0; i < valListSum.length; i++){
        answer.push(saveGenres[valListIndex[valListSum[i]]].firstMax.index)
        if(saveGenres[valListIndex[valListSum[i]]].secondMax.index >= 0)
            answer.push(saveGenres[valListIndex[valListSum[i]]].secondMax.index)
    }
    return answer;
}
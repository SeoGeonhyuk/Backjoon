class SaveIndex{
    constructor(max, index){
        this.max = max;
        this.index = index;
    }
}
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
    let saveGenres = {};
    let sumList = [];
    let valList = [];
    let valList2 = [];
    for(let i = 0; i < genres.length; i++){
        if(saveGenres[genres[i]] === undefined){
            saveGenres[genres[i]] = new SaveListen(genres[i]);
            sumList[genres[i]] = 0;
        }
        saveGenres[genres[i]].pushPlay(plays[i], i);
        sumList[genres[i]] = saveGenres[genres[i]].sum;
    }
    for (let key in saveGenres){
        valList2.push(saveGenres[key].sum)
        valList[saveGenres[key].sum] = key;
    }
    valList2.sort((a, b) => b - a);
    for(let i = 0; i < valList2.length; i++){
        answer.push(saveGenres[valList[valList2[i]]].firstMax.index)
        if(saveGenres[valList[valList2[i]]].secondMax.index >= 0)
            answer.push(saveGenres[valList[valList2[i]]].secondMax.index)
    }
    console.log(answer);
    return answer;
}
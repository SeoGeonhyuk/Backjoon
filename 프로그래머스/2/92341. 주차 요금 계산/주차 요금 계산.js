class CarRecord {
    constructor(inHour, inMin){
        this.inHour = inHour;
        this.inMin = inMin;
        this.fee = 0;
        this.totalMin = 0;
    }
    calculateTotalMin(outHour, outMin){
        let resultHour = outHour - this.inHour;
        let resultMin = -1;
        if(outMin - this.inMin >= 0){
            resultMin = outMin - this.inMin;
        }
        else{
            resultHour -= 1;
            resultMin = outMin - this.inMin + 60;
        }
        return resultHour * 60 + resultMin;
    }
}

function calculateFee(totalMin, defaultTime, defaultFee, unitTime, unitFee){
        if(totalMin - defaultTime <= 0){
            return defaultFee;
        }
        else{
            return (Math.ceil((totalMin - defaultTime) / unitTime) * unitFee) + defaultFee;
        }
}

function solution(fees, records) {
    const answer = new Map();
    const recordMaps = new Map();
    for(let i = 0; i < records.length; i++){
        const recordElementArray = records[i].split(' ');
        if(!recordMaps.has(recordElementArray[1])){
            const inTimeArray = recordElementArray[0].split(':').map(Number);
            recordMaps.set(recordElementArray[1], new CarRecord(inTimeArray[0], inTimeArray[1]));
            if(!answer.has(recordElementArray[1])){
                answer.set(recordElementArray[1], 0);
            }
        }
        else{
            const outTimeArray = recordElementArray[0].split(':').map(Number);
            answer.set(recordElementArray[1], answer.get(recordElementArray[1]) + recordMaps.get(recordElementArray[1]).calculateTotalMin(outTimeArray[0], outTimeArray[1]));
            recordMaps.delete(recordElementArray[1]);
        }
    }
    if(recordMaps.size > 0){
        recordMaps.forEach((val, key, map) => {
            answer.set(key, answer.get(key) + val.calculateTotalMin(23, 59))
        })
    }
    answer.forEach((val, key, map) => {
        answer.set(key, calculateFee(val, fees[0], fees[1], fees[2], fees[3]))
    })
    const realAnswer = [...answer];
    realAnswer.sort((a, b) => a[0] - b[0]);
    return realAnswer.map((val) => val[1]);
}
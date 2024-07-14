// 파일 이름을 담을 수 있는 클래스를 제작한다.
class FileName {
    constructor(head, number, tail){
        this.head = head;
        this.number = number;
        this.tail = tail;
    }
}

function solution(files) {
    let splitFileArray = files.map((file) => {
        let head = null;
        let number = null;
        let tail = null;
        for(let i = 0; i < file.length; i++){
            if(Number.isInteger(parseInt(file[i]))){
                head = file.substring(0, i);
                const startNumberPosition = i;
                for(; Number.isInteger(parseInt(file[i])) !== false; i++){
                    
                }
                number = file.substring(startNumberPosition, i);
                tail = file.substring(i);
                break;
            }
        }
        return new FileName(head, number, tail);
    });
    var answer = splitFileArray.sort((a, b) => {
        if(a.head.toLowerCase() !== b.head.toLowerCase()){
            return a.head.localeCompare(b.head);
        }
        else if(parseInt(a.number) === parseInt(b.number)){
            return 0;
        }
        else{
            return parseInt(a.number) - parseInt(b.number);
        }
    }).map((file) => {
        return file.head + file.number + file.tail;
    });
    return answer;
}
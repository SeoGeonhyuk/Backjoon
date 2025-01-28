function solution(record) {
    var answer = [];
    const userMap = new Map();
    for(let i = 0; i < record.length; i++){
        const r = record[i];
        const [state, uid, nickName] = r.split(' ');
        if(state === "Enter") userMap.set(uid, nickName);
        else if(state === "Change") {
            userMap.set(uid, nickName);
            continue;
        }
        const message = state === "Enter" ? `${uid}님이 들어왔습니다.` : `${uid}님이 나갔습니다.`;
        answer.push(message);
    }

    for(let i = 0; i < answer.length; i++){
        const [uid, rest] = answer[i].split('님');
        answer[i] = userMap.get(uid) + '님' +rest;
    }
    return answer;
}
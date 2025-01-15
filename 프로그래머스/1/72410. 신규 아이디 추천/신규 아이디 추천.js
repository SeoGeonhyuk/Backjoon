function solution(new_id) {
    var answer = '';
    if(new_id.length === 0) answer = 'aaa';
    else {
        const b = new_id.toLowerCase().replace(/[~!@#$%^&*()=+\[{\]}:?,<>\/]/g, '').replace(/\.{2,}/g, '.').replace(/^\.|\.$/g, '') === '' ? 'a' : new_id.toLowerCase().replace(/[~!@#$%^&*()=+\[{\]}:?,<>\/]/g, '').replace(/\.{2,}/g, '.').replace(/^\.|\.$/g, '');
        if(b.length > 15) answer = b.slice(0, 15).replace(/\.$/g, '');
        else answer = b.length < 3 ? b + String(b[b.length - 1]).repeat(3 - b.length) : b;
    }
    return answer;
}
function solution(s) {
    if (s.length % 2 !== 0) return 0;

    const stack = [];

    for (const char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char); 
        }
    }

    return stack.length === 0 ? 1 : 0; 
}

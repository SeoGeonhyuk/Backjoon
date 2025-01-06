// function solution(word) {
//     var answer = 0;
//     let startIndex = 0;
//     const alphabetList = ['A', 'E', 'I', 'O', 'U'];
//     const wordList = ['A', 'E', 'I', 'O', 'U'];
//     while(startIndex <= 5 ** 5) {
//         let word = wordList[startIndex];
//         startIndex += 1;
//         alphabetList.forEach((alphabet) => {
//             if((word + alphabet).length < 6) wordList.push(word + alphabet);
//         });
//     }
//     wordList.sort().some((w, index) => {
//         if(w === word) {
//             answer = index + 1;
//             return true;
//         }
//         return false;
//     });
//     return answer;
// }
function solution(words) {
    return words.split('').reduce((r, c, i) => r + [781, 156, 31, 6, 1][i] * ['A', 'E', 'I', 'O', 'U'].indexOf(c) + 1, 0);
}
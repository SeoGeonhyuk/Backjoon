// function solution(people, limit) {
//     var answer = 0;
//     let sortedPeople = people.sort().reverse();
//     while(sortedPeople.length > 0){
//         let totalWeight = sortedPeople.pop();
//         if(sortedPeople.length){
//             for(let i = 0; i < sortedPeople.length; i++){
//                 if(totalWeight + sortedPeople[i] <= limit){
//                     totalWeight += sortedPeople[i];
//                     sortedPeople = sortedPeople.slice(0, i).concat(sortedPeople.slice(i + 1));
//                     break;
//                 }
//             }
//         }
//         answer += 1;
//     }
//     return answer;
// }

function solution(people, limit) {
    var answer = 0;
    let left = 0;
    let right = people.length - 1;
    const sortedPeople = people.sort((a, b) => a - b);
    while(left <= right){
        if(left === right){
            answer += 1;
            break;
        }
        else if(sortedPeople[left] + sortedPeople[right] <= limit){
            left += 1;
            right -= 1;
            answer += 1;
        }
        else{
            right -= 1;
            answer += 1;
        }
    }
    return answer;
}


// 50, 50, 50, 70, 80

// 50, 70, 80
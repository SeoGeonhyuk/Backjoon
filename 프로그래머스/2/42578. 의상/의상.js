
// AI한테 물어봤다. 훨씬 더 복잡한 방법이라고 한다.
// 보니까 확률 문제에 가까웠다. 넓게 봐서, 안 입는 경우를 그냥 포함시켜서 1 증감을 하고 계산하면 되는 것이었다.
function solution(clothes) {
    var answer = 0;
    const clothMap = new Map();
    clothes.forEach(cloth => {
        if(!clothMap.has(cloth[1])) clothMap.set(cloth[1], 1);
        clothMap.set(cloth[1], clothMap.get(cloth[1]) + 1);
    });
    answer = [...clothMap.entries()].reduce((acc,[key, value]) => {
        return acc * value;
    }, 1);
    return answer - 1;
}



// [] [얼굴, 상의, 하의]
// [얼굴], [상의, 하의]
// [상의], [얼굴, 하의]
// [하의], [얼굴, 상의]
// [] [얼굴, 상의, 하의, 겉옷]
// [얼굴], [상의, 하의, 겉옷]
// [상의], [얼굴, 하의, 겉옷]
// [하의], [얼굴, 상의, 겉옷]
// [겉옷], [얼굴, 상의, 하의]
// 뒤에 있는 세개의 배열을 또 나눈다!(다시 말해 배열의 길이가 2가 될때까지 나누면 된다!)
// [상의, 하의, 겉옷]
// [상의], [하의, 겉옷]
// [하의], [상의, 겉옷]
// [겉옷], [상의, 하의]
// [얼굴, 하의, 겉옷]
// [얼굴], [하의, 겉옷]
// [하의], [얼굴, 겉옷]
// [겉옷], [얼굴, 하의]
// [얼굴, 상의, 겉옷]
// [얼굴], [상의, 하의]
// [상의], [얼굴, 겉옷]
// [겉옷], [얼굴, 상의]
// [얼굴, 상의, 하의]
// [얼굴], [상의, 하의]
// [상의], [얼굴, 하의]
// [하의], [얼굴, 상의]

// 첫번째 시도
// 아니면, 종류 별로 따로 분리하면 되려나?
// 아이웨어들
// 얼굴들
// 생각해본 조합 방식 하지만 이건 코어 덤프가 떴다.(아마 계산할 요소들이 너무 많아서 생긴 문제인 거 같다.)
// 놀랍게도 이전에 한 번 마주했다가 못 풀었었는데, 지금은 테케 1번을 틀린 것을 제외하고 나머지는 다 맞았다.
// 문제는 성능이 문제지...
// 얼굴 => {얼굴}
// 얼굴 상의 => {얼굴, 상의, 얼굴상의}
// 얼굴 상의 하의 => {얼굴, 상의, 얼굴상의, 하의, 얼굴하의, 상의하의, 얼굴상의하의}
// 얼굴 상의 하의 겉옷 => {얼굴/, 상의/, 얼굴상의/, 하의/, 얼굴하의/, 상의하의/, 얼굴상의하의, 겉옷, 얼굴겉옷, 상의겉옷, 얼굴상의겉옷, 하의겉옷, 얼굴하의겉옷, 상의하의겉옷, 얼굴상의하의겉옷}
// 얼굴 상의 하의 겉옷 => {얼굴, 상의, 하의, 겉옷, 얼굴상의, 얼굴하의, 얼굴겉옷, 상의하의, 상의겉옷, 하의겉옷, 얼굴상의겉옷, 상의하의겉옷, 얼굴하의겉옷, 얼굴상의하의겉옷}

// function solution(clothes) {
//     var answer = 0;
//     const clothMap = new Map();
//     const kindList = [];
//     clothes.forEach(cloth => {
//         if(!clothMap.has(cloth[1])){
//             clothMap.set(cloth[1], 0);
//             kindList.forEach((kind) => {
//                 kindList.push(kind + ' ' + cloth[1]);
//             });
//             kindList.push(cloth[1]);
//         }
//         clothMap.set(cloth[1], clothMap.get(cloth[1]) + 1);
//     });
//     kindList.forEach((kind) => {
//         const kinds = kind.split(' ');
//         answer += kinds.reduce((acc, cur) => {
//             return acc * clothMap.get(cur);
//         }, 1);
//     });
//     return answer;
// }

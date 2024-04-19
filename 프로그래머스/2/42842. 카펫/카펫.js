//해당 문제는 브루트 포스 문제로 문제의 핵심은 어디 부분을 완전 탐색할 것이냐를 핵심으로 봄.ㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔ
//예를 들어 갈색 격자의 가로, 세로를 무작위로 3,3 부터 시작해서 4,3 4,4 이런 식으로 계산할 수 있다.
//하지만 이것은 본능적으로 비효율적이라고 생각했으므로 노란색 타일을 중심으로 완전 탐색을 생각해 봄.
//노란색 타일 기준의 브루트 포스는 간단합니다. 노란색 타일의 개수를 자연수로 나누면서 높이가 1일때의 노란색 타일의 모양, 높이가 2일때 노란색 타일의 모양을 생각해 보는 것입니다.
//그런 식으로 현재 노란색 타일의 개수를 가지고 나올 수 있는 모든 노란색 직사각형의 경우의 수를 구합니다.
function solution(brown, yellow) {
    let possibleHeights = []
    var answer = null;
    //이 과정에서 sqrt를 사용합니다. 왜냐하면 sqrt 수 이상으로 올라가면 나눴을 때 몫으로 정수 값이 나오지 않기 때문입니다.
    for(let i = 1; i <= Math.ceil(Math.sqrt(yellow)); i++){
        const divideResult = yellow / i;
        if(Number.isInteger(divideResult))
            //그렇게 구한 값을 바탕으로 노란색 타일의 가능한 경우의 수를 배열로 집어넣습니다.
            possibleHeights.push({width: divideResult, height: i});
    }
    //배열로 집어넣은 값을 이용해서 갈색 타일의 개수를 짜맞춥니다.
    //기본적으로 노란색 타일이 한 개일 때 가로, 세로의 길이는 3이 되고 노란색 타일의 가로 세로 길이가 1씩 증가할 때마다 갈색 타일의 필요 타일 개수도 1씩 증가합니다.
    //예를 들어 가로 1, 세로 1인 노란색 타일이 가로로 1개가 증가한다면 이때 이를 둘러싸기 위해서 필요한 갈색 타일의 가로 세로 길이는 4, 3이 됩니다. 왼쪽의 예시를 보면 됩니다.
    //아무튼 이 가로, 세로의 갈색 타일의 길이를 안다면 총 필요 갈색 타일의 수를 구할 수 있습니다.
    //공식은 2*(가로의 길이) + 2*(세로의 길이) - 4 = 갈색 타일의 개수가 됩니다.
    //이를 바탕으로 기존의 보았던 갈색 타일의 개수와 맞는 가로 세로 길이가 나올 때까지 반복문을 돌립니다.
    possibleHeights.some((val) => {
        if(brown === ((val.width + 2) * 2 + (val.height + 2) * 2 - 4)){
            answer = [val.width + 2, val.height + 2];
            return true;
        }
        return false;
    })
    //이때 나오는 시간복잡도는 O(n)입니다.
    return answer;
}
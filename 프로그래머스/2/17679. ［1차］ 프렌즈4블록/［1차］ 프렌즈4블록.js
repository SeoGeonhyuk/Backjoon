function solution(m, n, board) {
    var answer = 0;
    let boards = board.map((b) => b.split(''));
    while(true) {
        const removeBlocks = new Set();
        for(let i = 0; i < boards.length; i++){
            for(let j = 0; j < boards[0].length; j++){
                if(boards[i][j] && j + 1 < boards[0].length && i + 1 < boards.length && boards[i][j] === boards[i + 1][j] && boards[i][j] === boards[i][j + 1] && boards[i][j] === boards[i + 1][j + 1]) {
                    removeBlocks.add(`${i},${j}`);
                    removeBlocks.add(`${i + 1},${j}`);
                    removeBlocks.add(`${i},${j + 1}`);
                    removeBlocks.add(`${i + 1},${j + 1}`);
                }
            }
        }
        if(!removeBlocks.size) break;
        else {
            answer += removeBlocks.size;
            const removeBlocksArr = [...removeBlocks.keys()];
            removeBlocksArr.forEach((rB) => {
                const [y, x] = rB.split(',').map(Number);
                boards[y][x] = 0;
            });
            for(let i = 0; i < boards.length; i++){
                for(let j = 0; j < boards[0].length; j++){
                    if(!boards[i][j]) {
                            let height = i;
                            while(height > 0) {
                                [boards[height][j], boards[height - 1][j]] = [boards[height - 1][j], boards[height][j]]
                                height -= 1;
                            }
                        }
                    }
                }
            }
        }
    return answer;
}
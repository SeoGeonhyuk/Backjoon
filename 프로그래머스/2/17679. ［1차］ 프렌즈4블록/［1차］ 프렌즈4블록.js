function solution(m, n, board) {
   board = board.map(v => v.split(''));
   let answer = 0;
   
   while(true) {
       const willRemove = new Set();
       
       for(let i = 0; i < m-1; i++) {
           for(let j = 0; j < n-1; j++) {
               const current = board[i][j];
               if(current === 0) continue;

               
               if(current === board[i][j+1] && 
                  current === board[i+1][j] && 
                  current === board[i+1][j+1]) {
                   willRemove.add(`${i},${j}`);
                   willRemove.add(`${i},${j+1}`);
                   willRemove.add(`${i+1},${j}`);
                   willRemove.add(`${i+1},${j+1}`);
               }
           }
       }
       
       if(willRemove.size === 0) break;
       
       answer += willRemove.size;
       willRemove.forEach(pos => {
           const [i, j] = pos.split(',').map(Number);
           board[i][j] = 0;
       });
       
       for(let j = 0; j < n; j++) {
           for(let i = m-1; i > 0; i--) {
               if(board[i][j] === 0) {
                   for(let k = i-1; k >= 0; k--) {
                       if(board[k][j] !== 0) {
                           board[i][j] = board[k][j];
                           board[k][j] = 0;
                           break;
                       }
                   }
               }
           }
       }
   }
   
   return answer;
}
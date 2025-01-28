def solution(board, moves):
    after = []
    answer = 0
    for i in moves:
        cnt = 0
        try:
            while board[cnt][i-1] == 0:
                    cnt += 1
        except IndexError:
            continue
        after.append(board[cnt][i-1])
        board[cnt][i-1] = 0
        if len(after) > 1 and after[len(after)-2] == after[len(after)-1]:
            del after[-2:]
            answer += 2
    return answer
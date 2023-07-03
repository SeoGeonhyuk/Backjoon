import sys
sys.setrecursionlimit(1000000)
input = sys.stdin.readline
cnt = 0

def friend(s, yx, xI, yI):
    global cnt
    if s[yI][xI] == 'P':
        s[yI][xI] = 'Q'
        cnt += 1
    else:
        s[yI][xI] = 'Q'
    if xI + 1 < yx[1] and s[yI][xI + 1] != 'X' and s[yI][xI + 1] != 'Q':
        friend(s, yx, xI+1, yI)
    if xI - 1 >= 0 and s[yI][xI - 1] != 'X' and s[yI][xI - 1] != 'Q':
        friend(s, yx, xI-1, yI)
    if yI + 1 < yx[0] and s[yI + 1][xI] != 'X' and s[yI + 1][xI] != 'Q':
        friend(s, yx, xI, yI + 1)
    if yI - 1 >= 0 and s[yI - 1][xI] != 'X' and s[yI - 1][xI] != 'Q':
        friend(s, yx, xI, yI - 1)

yx = list(map(int, input().split()))
s = []
for i in range(yx[0]):
    k = list(input())
    s.append(k)
xI = 0
yI = 0
for i in range(yx[0]):
    for j in range(yx[1]):
        if s[i][j] == 'I':
            xI = j
            yI = i
            break
friend(s, yx, xI, yI)
if cnt == 0:
    print("TT")
else:
    print(cnt)

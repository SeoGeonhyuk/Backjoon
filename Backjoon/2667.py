import sys
sys.setrecursionlimit(1000000)
input = sys.stdin.readline
cnt = 0

def distribution(s, y, x, wh):
    if y < 0 or y >= wh or x < 0 or x >= wh:
        return;
    s[y][x] = '0';
    global cnt
    cnt += 1
    if x + 1 < wh and s[y][x + 1] == '1':
        distribution(s, y, x + 1, wh);
    if x - 1 >= 0 and s[y][x - 1] == '1':
        distribution(s, y, x - 1, wh);
    if y + 1 < wh and s[y + 1][x] == '1':
        distribution(s, y + 1, x, wh);
    if y - 1 >= 0 and s[y - 1][x] == '1':
        distribution(s, y - 1, x, wh)


wh = int(input())
s = []
s2 = []
for i in range(wh):
    k = input().rstrip()
    chars = [char for char in k]
    s.append(chars)
xI = 0
yI = 0
k = 0
for i in range(wh):
    for j in range(wh):
        if s[i][j] == '1':
            xI = j
            yI = i
            k += 1
            distribution(s, yI, xI, wh)
            s2.append(cnt)
            cnt = 0
s2.sort()
print(k)
for i in s2:
  print(i)

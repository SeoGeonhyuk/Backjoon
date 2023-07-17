import sys
input = sys.stdin.readline
cnt = int(input())
s = []
sum = 0
for i in range(cnt):
  k = int(input())
  if k == 0:
    sum -= s[-1]
    s = s[:-1]
  else:
    s.append(k)
    sum += k
sys.stdout.write(str(sum)+'\n')

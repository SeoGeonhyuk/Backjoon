import sys
input = sys.stdin.readline
cnt = int(input())
s = list(map(int, input().split()))
s.sort()
answer = 0
k = s[0]
for i in s:
  if answer == 0:
    answer += k
  else:
    k += i
    answer += k
print(answer)

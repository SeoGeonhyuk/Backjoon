import sys
input = sys.stdin.readline
cnt = list(map(int, input().split()))
name = {}
num = {}
for i in range(1, cnt[0]+1):
  s = input().rstrip()
  name[i] = s
  num[s] = i
answer = []
for i in range(cnt[1]):
  s = input().rstrip()
  if s.isdigit():
    answer.append(name[int(s)])
  else:
    answer.append(num[s])
for i in answer:
  print(i)

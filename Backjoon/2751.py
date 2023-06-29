import sys
input = sys.stdin.readline
s = []
cnt = int(input())
for i in range(cnt):
  k = int(input())
  s.append(k)
s.sort()
for i in s:
  print(i)

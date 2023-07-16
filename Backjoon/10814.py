from collections import defaultdict
cnt = int(input())
s = defaultdict(list)
for i in range(cnt):
  k = input().split()
  s[int(k[0])].append(k[1])
k = list(s.keys())
k.sort()
answer = []
for i in k:
  for j in s[i]:
    print(str(i), j)

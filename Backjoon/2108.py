from collections import defaultdict
import sys
input = sys.stdin.readline
cnt = int(input())
cnt2 = (cnt - 1) / 2
dicts = defaultdict(int)
s = set()
sums = 0
middle = 0
for i in range(cnt):
  k = int(input())
  dicts[k] += 1
  s.add(k)
  sums += k
s = list(s)
s.sort()
if len(s) == 1:
  print(s[0])
  print(s[0])
  print(s[0])
  print(0)
else:
  #산술평균
  print(round(sums/cnt))
  #중앙값
  for i in s:
    if cnt2 - dicts[i] < 0:
      print(i)
      break
    else:
      cnt2 -= dicts[i]
  #최빈값
  maxs = max(dicts.values())
  s2 = [x for x in s if dicts[x] == maxs]
  if len(s2) > 1:
    print(s2[1])
  else:
    print(s2[0])
  #범위
  if len(s) == 1:
    print(0)
  else:
    wow = max(s) - min(s)
    print(wow)

import heapq
import sys
s = []
cnt = int(input())
cnt2 = 0
for i in range(cnt):
  k = int(sys.stdin.readline())
  if k > 0:
    cnt2 += 1
    heapq.heappush(s, k)
  else:
    if cnt2 > 0:
      min = heapq.heappop(s)
      print(min)
      cnt2 -= 1
    else:
      print(0)

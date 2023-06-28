import heapq
import sys
input = sys.stdin.readline
plus = []
minus = []
heapq.heapify(plus)
heapq.heapify(minus)
cnt = int(input())
cnt2 = 0
for i in range(cnt):
  k = int(input())
  if k > 0:
    cnt2 += 1
    heapq.heappush(plus, k)
  elif k < 0:
    cnt2 += 1
    heapq.heappush(minus, -1 * k)
  else:   
    if len(minus) == 0 and len(plus) == 0:
      print(0)
    else:
      neverplus = 0
      neverminus = 0
      if len(plus) > 0:
        neverplus = heapq.heappop(plus)
      if len(minus) > 0:
        neverminus = heapq.heappop(minus)
      if neverminus <= neverplus and neverminus != 0:
        print(-1 * neverminus)
        heapq.heappush(plus, neverplus)
      elif neverminus > neverplus and neverplus != 0:
        print(neverplus)
        heapq.heappush(minus, neverminus)
      elif neverminus == 0:
        print(neverplus)
      elif neverplus == 0:
        print(-1*neverminus)

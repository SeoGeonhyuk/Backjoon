import sys
input = sys.stdin.readline
n = 10000
a = [False,False] + [True]*(n-1)
decimal = []
for i in range(2,n+1):
  if a[i]:
    decimal.append(i)
    for j in range(2*i, n+1, i):
        a[j] = False
cnt = int(input())
sx = []
sy = []
for i in range(cnt):
  k = int(input())
  x = k
  y = 0
  for j in decimal:
    if j > k:
      break
    else:
      if a[k - j]:
        if abs(x - y) > abs((k - j) - j):
          x = j
          y = k - j
  sx.append(x)
  sy.append(y)
for i, j in zip(sx, sy):
  print(i, j)

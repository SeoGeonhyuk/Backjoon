import sys
import math
input = sys.stdin.readline

s = [0 for i in range(0, 100001)]
s[1] = 1
s[2] = 2
s[3] = 3
roots = [1]
k = int(input())
if k >= 4:
  for i in range(4, k+1):
    if math.floor(math.sqrt(i)) == math.sqrt(i):
      roots.insert(0, i)
      s[i] = 1
    else:
      s[i] = 999
      for j in roots:
        s[i] = min(s[i], 1+s[i-j])
print(s[k])

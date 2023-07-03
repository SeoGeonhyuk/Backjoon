import sys
input = sys.stdin.readline
s = [0 for x in range(1000001)]
s[1] = 0
s[2] = 1
s[3] = 1
for i in range(1, 1000001):
  if i == 1:
    s[i] = 0
  elif i == 2:
    s[i] = 1
  elif i == 3:
    s[i] = 1
  elif i % 2 == 0 and i % 3 == 0:
    s[i] = min(1+s[i//2], 1+s[i//3])
  elif i % 2 == 0:
    s[i] = min(1+s[i//2], 1+s[i-1])
  elif i % 3 == 0:
    s[i] = min(1+s[i//3], 1+s[i-1])
  else:
    s[i] = 1+s[i-1]
k = int(input())
print(s[k])

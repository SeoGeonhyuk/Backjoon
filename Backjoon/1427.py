import sys
input = sys.stdin.readline

s = input().rstrip()
k = []
for i in s:
  k.append(int(i))
k.sort(reverse=True)
for i in k:
  print(i, end="")
print("")

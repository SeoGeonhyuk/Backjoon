import sys
input = sys.stdin.readline
s = []
cnt = int(input())
for i in range(cnt):
  order = input().split()
  if order[0] == "push":
    s.append(order[1])
  elif order[0] == "front":
    if len(s) >= 1:
      print(s[0])
    else:
      print(-1)
  elif order[0] == "back":
    if len(s) >= 1:
      print(s[-1])
    else:
      print(-1)
  elif order[0] == "size":
    print(len(s))
  elif order[0] == "empty":
    if len(s) == 0:
      print(1)
    else:
      print(0)
  elif order[0] == "pop":
    if len(s) >= 1:
      print(s[0])
      s.pop(0)
    else:
      print(-1)

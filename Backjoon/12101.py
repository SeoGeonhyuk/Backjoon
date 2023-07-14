s = [[] for i in range(0, 11)]
for i in range(1, 11):
  if i == 1:
    s[i].append("1")
  elif i == 2:
    s[i].append("1+1")
    s[i].append("2")
  elif i == 3:
    s[i].append("1+1+1")
    s[i].append("1+2")
    s[i].append("2+1")
    s[i].append("3")
  else:
    k = 1
    while k <= 3:
      u = i - k
      for j in s[u]:
        suhak = str(k)+ '+' + j
        s[i].append(suhak)
      k += 1
for i in range(1, 11):
  s[i].sort()
k = list(map(int, input().split()))
if k[1] > len(s[k[0]]):
  print(-1)
else:
  print(s[k[0]][k[1]-1])

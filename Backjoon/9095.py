cnt = int(input())
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
        suhak = str(k) + j
        s[i].append(suhak)
      k += 1
answer = []
for i in range(cnt):
  k = int(input())
  answer.append(len(s[k]))
for i in answer:
  print(i)

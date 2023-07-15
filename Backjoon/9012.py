n = int(input())
answer = []
for i in range(n):
  k = input().rstrip()
  cnt = 0
  s = []
  for i in k:
    if i == ')':
      try:
        s.remove('(')
      except:
        s.append(i)
        break
    else:
      s.append(i)
  if len(s) == 0:
    answer.append("YES")
  else:
    answer.append("NO")
for i in answer:
  print(i)

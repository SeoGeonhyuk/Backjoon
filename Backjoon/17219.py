k = list(map(int, input().split()))
dic = {}
for i in range(k[0]):
  u = input().split()
  dic[u[0]] = u[1]
answer = []
for i in range(k[1]):
  v = input()
  answer.append(dic[v])
for i in answer:
  print(i)

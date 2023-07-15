devil = "666"
n = int(input())
s = []
cnt = 666
while len(s) != n:
  if devil in str(cnt):
    s.append(cnt)
    cnt += 1
  else:
    cnt += 1
print(s[-1])

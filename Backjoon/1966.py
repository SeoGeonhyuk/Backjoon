cnt = int(input())
answer = []
for i in range(cnt):
  k = list(map(int, input().split()))
  s = list(map(int, input().split()))
  cnt2 = 0
  cnt3 = 1
  while True:
    maxs = max(s)
    j = s.pop(0)
    if j == maxs:
      if cnt2 == k[1]:
        break
      else:
        cnt3 += 1
        cnt2 += 1
    else:
      s.append(j)
      if cnt2 == k[1]:
        k[1] = len(s) - 1
        cnt2 = 0
      else:
        cnt2 += 1
  answer.append(cnt3)
for i in answer:
  print(i)

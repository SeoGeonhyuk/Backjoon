import sys
input = sys.stdin.readline
cnt = list(map(int, input().split()))
moneys = []
for i in range(cnt[0]):
  money = int(input())
  moneys.append(money)
count = 0
big = len(moneys) - 1
while cnt[1] != 0:
  if cnt[1] >= moneys[big]:
    count += cnt[1] // moneys[big]
    cnt[1] = cnt[1] % moneys[big]
  else:
    big -= 1
print(count)

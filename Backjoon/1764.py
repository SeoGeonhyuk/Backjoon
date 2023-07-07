import sys
input = sys.stdin.readline
cnt = list(map(int, input().split()))
hash = {}
answer = []
num = 0
for i in range(cnt[0]):
  k = input().rstrip()
  hash[k] = False
for i in range(cnt[1]):
  k = input().rstrip()
  try:
    if not hash[k]:
      num += 1
      answer.append(k)
  except:
    continue
print(num)
answer.sort()
for i in answer:
  print(i)

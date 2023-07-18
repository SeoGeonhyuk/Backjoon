import sys
input = sys.stdin.readline
cnt = list(map(int, input().split()))
big = 0
if cnt[0] != 0:
  big = 1
while cnt[1] > 0:
  big *= cnt[0] // cnt[1]
  cnt[0] -= cnt[0] // cnt[1]
  cnt[1] -= 1
print(big)

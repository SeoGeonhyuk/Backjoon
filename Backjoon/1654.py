###
메모리 최적화 및 구조에 신경쓸 것
도저히 메모리 최적화가 해결되지 않아 답지를 보았다.
그래도 깨달은 것: 또 다른 방식의 이분탐색 방법
자료구조를 바꿔서 다시 구현하는데 능숙해진 것 같다
###
import sys
def binarySearch(nums, mins, maxs, purpose):
  if mins > maxs:
    print(maxs)
    return
  cnt = 0
  mid = (mins + maxs) // 2
  for i in nums:
    cnt += i // mid
  if cnt < purpose:
    binarySearch(nums, mins, mid-1, purpose)
  else:
    binarySearch(nums, mid+1, maxs, purpose)

s = list(map(int, input().split()))
nums = []
maxs = 0
for i in range(s[0]):
  k = int(input())
  if k > maxs:
    maxs = k
  nums.append(k)
binarySearch(nums, 1, maxs, s[1])

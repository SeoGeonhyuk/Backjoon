def binarySearch(s, i, min, max):
  if min > max:
    return 0
  mid = (min + max) // 2
  if s[mid] == i:
    return 1
  elif s[mid] > i:
    return binarySearch(s, i, min, mid - 1)
  elif s[mid] < i:
    return binarySearch(s, i, mid + 1, max)
cnt = int(input(""))
s = list(map(int, input("").split()))
s.sort()
cnt2 = int(input(""))
s2= list(map(int, input("").split()))
for i in s2:
  if binarySearch(s, i, 0, len(s) - 1):
    print(1)
  else:
    print(0)

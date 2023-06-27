import sys
input = sys.stdin.readline
s = list(map(int, input().split()))
s2 = [1, 2, 3, 4, 5, 6, 7, 8]
s3 = [8, 7, 6, 5, 4, 3, 2, 1]
if s == s2:
  print("ascending")
elif s == s3:
  print("descending")
else:
  print("mixed")

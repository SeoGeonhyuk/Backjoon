import sys
input = sys.stdin.readline
k = list(map(int, input().split()))
print(pow(k[0], k[1], k[2]))

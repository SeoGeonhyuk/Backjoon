import sys

input_num = int(sys.stdin.readline())
cnt = int(input_num)
s = [0 for i in range(10001)]
for i in range(cnt):
    k = int(sys.stdin.readline())  # 입력 값을 정수로 변환
    s[k] += 1
for i in range(1, 10001):
  if s[i] > 0:
    for j in range(s[i]):
      print(i)

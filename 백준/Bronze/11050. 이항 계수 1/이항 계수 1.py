k = list(map(int, input().split()))
n = 1
count = 0
while count < k[1]:
  n *= k[0]
  k[0] -= 1
  count += 1
y = 1
for i in range(1, k[1] + 1):
  y *= i
print(n//y)
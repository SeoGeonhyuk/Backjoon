def gcd(a, b):
  if b == 0:
    return a
  else:
    return gcd(b, a%b)
k = list(map(int, input().split()))
gcds = 0
if k[0] > k[1]:
  gcds = gcd(k[0], k[1])
else:
  gcds = gcd(k[1], k[0])
common = k[0] * k[1] // gcds
print(gcds)
print(common)

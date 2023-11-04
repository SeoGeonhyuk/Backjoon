k = int(input(""))
s = []
for i in range(k):
  s.append(31**i)
str = input("")
hashVal = 0
start = 0
for i in str:
  hashVal += (ord(i) - 96) * s[start]
  start += 1
print(hashVal)
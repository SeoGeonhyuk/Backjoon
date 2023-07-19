s = int(input())
k = []
for i in range(s):
  j = input()
  k.append(j)

k = list(set(k))
sorted_list = sorted(k, key=lambda x: (len(x), x))

for i in sorted_list:
  print(i)

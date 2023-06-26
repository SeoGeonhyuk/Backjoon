cnt = int(input(""))
s = []
for i in range(cnt):
    word = input("")
    if word in s:
      continue
    else:
      s.append(word)
s.sort(key=len)
p = s[0]
s2 = []
for i in s:
  if len(p) != len(i):
    s2.sort()
    for j in s2:
      print(j)
    s2.clear()
    p = i
    s2.append(i)
  elif len(p) == len(i):
    s2.append(i)
    p = i
if len(s2) > 1:
  s2.sort()
  for i in s2:
    print(i)
else:
  print(s2[0])

import sys
k = list(map(int, sys.stdin.readline().split()))
s = []
todays = []
rest = 0
for j in range(k[1]):
  element = list(map(int, sys.stdin.readline().split()))
  for i in range(k[0]):
    if element[i] == 1:
      todays.append((j, i))
    elif element[i] == 0:
      rest += 1
  s.append(element)
days = 0
saveRest = -1
while rest > 0:
  todays2 = []
  for i in todays:
    if i[1] - 1 >= 0 and s[i[0]][i[1]-1] == 0:
      s[i[0]][i[1]-1] = 1
      todays2.append((i[0], i[1]-1))
      rest -= 1
    if i[1] + 1 < k[0] and s[i[0]][i[1]+1] == 0:
      s[i[0]][i[1]+1] = 1
      todays2.append((i[0], i[1]+1))
      rest -= 1
    if i[0] + 1 < k[1] and s[i[0]+1][i[1]] == 0:
      s[i[0]+1][i[1]] = 1
      todays2.append((i[0]+1, i[1]))
      rest -= 1
    if i[0] - 1 >= 0 and s[i[0]-1][i[1]] == 0:
      s[i[0]-1][i[1]] = 1
      todays2.append((i[0]-1, i[1]))
      rest -= 1
  # for i in range(k[1]):
  #   for j in range(k[0]):
  #     if s[i][j] == 1 and (i, j) not in todays:
  #       if j - 1 >= 0 and s[i][j-1] == 0:
  #         s[i][j-1] = 1
  #         todays.append((i, j-1))
  #         rest -= 1
  #       if j + 1 < k[0] and s[i][j+1] == 0:
  #         s[i][j+1] = 1
  #         todays.append((i, j+1))
  #         rest -= 1
  #       if i + 1 < k[1] and s[i+1][j] == 0:
  #         s[i+1][j] = 1
  #         todays.append((i+1, j))
  #         rest -= 1
  #       if i - 1 >= 0 and s[i-1][j] == 0:
  #         s[i-1][j] = 1
  #         todays.append((i-1, j))
  #         rest -= 1
  if saveRest == rest:
    days = -1
    break
  todays = todays2
  saveRest = rest
  days += 1
print(days)



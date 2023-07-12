import sys
input = sys.stdin.readline
cnt = int(input())
my_set = set()
all = set()
for i in range(1, 21):
  all.add(i)
for i in range(cnt):
  k = input().split()
  if k[0] == "add":
    my_set.add(int(k[1]))
  elif k[0] == "check":
    if int(k[1]) in my_set:
      print(1)
    else:
      print(0)
  elif k[0] == "remove":
    my_set2 = set()
    my_set2.add(int(k[1]))
    my_set = my_set.difference(my_set2)
  elif k[0] == "toggle":
    if int(k[1]) in my_set:
      my_set2 = set()
      my_set2.add(int(k[1]))
      my_set = my_set.difference(my_set2)
    else:
      my_set.add(int(k[1]))
  elif k[0] == "all":
    my_set = my_set.union(all)
  elif k[0] == "empty":
    my_set = set()

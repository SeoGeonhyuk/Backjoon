import sys
def DFST(DFS, DFSList, DFSListVisited, vertex):
  start = DFSList.pop(0)
  if not DFSListVisited[start]:
    DFS.append(start)
    DFSListVisited[start] = True
  for i in vertex[start]:
    if not DFSListVisited[i]:
      DFSList.append(i)
      DFST(DFS, DFSList, DFSListVisited, vertex)
input = sys.stdin.readline
s = list(map(int, input().split()))
vertex = {i: [] for i in range(s[0] + 1)}
for _ in range(s[1]):
    edge = list(map(int, input().split()))
    vertex[edge[0]].append(edge[1])
    vertex[edge[1]].append(edge[0])

for i in vertex.values():
    if len(i) > 1:
        i.sort()

BFS = []
BFSList = [s[2]]
BFSListVisited = [False] * (s[0] + 1)
BFSListVisited[s[2]] = True

while len(BFSList) != 0:
    start = BFSList.pop(0)
    BFS.append(start)
    for i in vertex[start]:
        if not BFSListVisited[i]:
            BFSListVisited[i] = True
            BFSList.append(i)

DFS = []
DFSList = [s[2]]
DFSListVisited = [False] * (s[0] + 1)
DFST(DFS, DFSList, DFSListVisited, vertex)
print(" ".join(map(str, DFS)))
print(" ".join(map(str, BFS)))

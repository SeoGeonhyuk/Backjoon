import sys
input = sys.stdin.readline
graphs = int(input())
s = [[] for i in range(0, graphs+1)]
edges = int(input())
for i in range(edges):
  edge = list(map(int, input().split()))
  s[edge[0]].append(edge[1])
  s[edge[1]].append(edge[0])
BFS = []
BFSList = [1]
BFSListVisited = [False] * (graphs + 1)
BFSListVisited[1] = True

while len(BFSList) != 0:
    start = BFSList.pop(0)
    BFS.append(start)
    for i in s[start]:
        if not BFSListVisited[i]:
            BFSListVisited[i] = True
            BFSList.append(i)
print(len(BFS)-1)

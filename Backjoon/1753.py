# import sys
# input = sys.stdin.readline
# s = list(map(int, input().split()))
# graph = []
# for i in range(s[0] + 1):
#     graph.append({})
# start = int(input())
# minimum = {key: 0 for key in range(1, s[0]+1)}
# right = []
# left = [x for x in range(1, len(graph))]
# for i in range(1, start+1):
#   left.remove(i)
#   right.append(i)
# for i in range(s[1]):
#     k = list(map(int, input().split()))
#     graph[k[0]][k[1]] = k[2]
# print(0)
# while len(left) != 0:
#     for i in right:
#         for key in graph[i]:
#             value = graph[i][key]
#             if key == left[0]:
#               if i == start:
#                 if minimum[left[0]] == 0:
#                   minimum[left[0]] = value
#                 else:
#                   if minimum[left[0]] > value:
#                     minimum[left[0]] = value
#               else:
#                 if minimum[left[0]] == 0:
#                   minimum[left[0]] = value + minimum[i]
#                 else:
#                   if minimum[left[0]] > value + minimum[i]:
#                     minimum[left[0]] = value + minimum[i]
#     if minimum[left[0]] == 0:
#         print("INF")
#         left.remove(left[0])
#     else:
#         print(minimum[left[0]])
#         right.append(left[0])
#         left.remove(left[0])

#구현 방식 자체는 똑같으나 이쪽은 우선순위 큐 자료구조를 사용했음 자료 구조에 대해서 더 연구할 필요가 있음
import heapq
import math
import sys
input = sys.stdin.readline
num_vertices, num_edges = map(int, input().split())
start_vertex = int(input())

adjacency_list = [[] for _ in range(num_vertices + 1)]
minimum = [math.inf] * (num_vertices + 1)
minimum[start_vertex] = 0

for _ in range(num_edges):
    u, v, weight = map(int, input().split())
    adjacency_list[u].append((v, weight))

priority_queue = [(0, start_vertex)]

while priority_queue:
    dist, curr_vertex = heapq.heappop(priority_queue)
    
    if dist > minimum[curr_vertex]:
        continue
    
    for next_vertex, weight in adjacency_list[curr_vertex]:
        new_dist = dist + weight
        
        if new_dist < minimum[next_vertex]:
            minimum[next_vertex] = new_dist
            heapq.heappush(priority_queue, (new_dist, next_vertex))

for vertex in range(1, num_vertices + 1):
    if minimum[vertex] == math.inf:
        print("INF")
    else:
        print(minimum[vertex])

def solution(priorities, location):
    cnt2 = 0
    cnt3 = 1
    while True:
        maxs = max(priorities)
        j = priorities.pop(0)
        if j == maxs:
            if cnt2 == location:
                break
            else:
                cnt3 += 1
                cnt2 += 1
        else:
            priorities.append(j)
            if cnt2 == location:
                location = len(priorities) - 1
                cnt2 = 0
            else:
                cnt2 += 1
    return cnt3
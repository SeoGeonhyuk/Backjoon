import math
def solution(progresses, speeds):
    good = []
    a = 0
    while(a < len(progresses)):
        day = math.ceil((100-progresses[a])/speeds[a])
        good.append(day)
        a += 1
        
    answer = []
    c = 0
    case = 0
    d= 0
    
    while(d < len(good)):
        if(good[c]>=good[d]):
            case += 1
        else:
            answer.append(case)
            case = 1
            c = d
        d += 1
    answer.append(case)
    
    return answer
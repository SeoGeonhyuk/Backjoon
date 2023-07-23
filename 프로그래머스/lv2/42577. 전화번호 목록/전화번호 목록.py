def solution(phone_book):
    answer = True
    dic = {}
    for i in phone_book:
        dic[i] = 1
    for j in phone_book:
        for i in range(len(j)):
            word = j[:i]
            try:
                if dic[word] == 1:
                    answer = False
                    return answer
            except:
                continue
    return answer
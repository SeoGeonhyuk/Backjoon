def solution(n):
    binary = format(n,'b')
    binary = str(binary)
    cnt = binary.count('1')
    cout = n
    while True:
        cout += 1
        bi = format(cout, 'b')
        bi = str(bi)
        if(bi.count('1') == cnt):
            break
    answer = cout
    return answer
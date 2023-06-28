import sys
input = sys.stdin.readline
#사람의 수 파티의 수 입력 받는다
#여기서 사람의 수를 입력 받은 것을 바탕으로 1부터 N까지 번호를 매기고 이 리스트는 진실을 모르는 사람들이라고 가정한다.
#진실을 아는 사람과 번호를 부여받을 때 부여 받은 번호에 해당되는 사람들을 진실을 모르는 사람들 리스트에서 삭제하고 진실을 아는 사람들이라는 리스트에 넣는다.
#일단 파티에 오는 사람들 중 진실을 모르는 사람들만 있는 파티에 넣고 입력받은 번호 또한 넣는다. 그리고 진실을 아는 사람들이 참석한 파티에 진실을 모르는 사람들이 있다면 그 진실을 모르는 사람들을 삭제한다.
#남은 진실을 모르는 사람들과 추가된 파티를 대조하여 만약 그 파티에 번호가 리스트에 있지 않다면 횟수를 감소시킨다.

#수정: 파티를 진행할 때 파티 멤버들을 서로 연결시킨다. 연결시킨 다음 만약 특정 멤버가 진실을 알고 있는 사람과 같이 있다면 그 자와 연결된 모든 사람을 knownPeople 끌고 간다.
#knownNum을 이용하여 파티를 다시 센다
def search(knownPeople, notKnown, i):
    s = set(knownPeople)  # set() 함수를 사용하여 사본 생성
    knownPeople.extend(notKnown[i])
    knownPeople = list(set(knownPeople))
    if set(knownPeople) == s:  # set() 함수를 사용하여 비교
        return
    else:
        for j in notKnown[i]:
            knownPeople.extend(notKnown[j])  # notKnown[j]를 knownPeople에 확장
            search(knownPeople, notKnown, j)
            knownPeople = list(set(knownPeople))  # 중복 제거

partysNum = []
people, partys = map(int, input().split())
count = partys
notKnown = [[x] for x in range(0, people+1)]
knownPeople = list(map(int, input().split()))
knownPeopleCount = knownPeople.pop(0)
danger = False

for i in range(partys):
    partyPeople = list(map(int, input().split()))
    partysNum.append(partyPeople[1:])
    for i in partyPeople[1:]:
        if i in knownPeople:
            danger = True
        notKnown[i].extend(list(partyPeople[1:]))
        notKnown[i] = list(set(notKnown[i]))
    if danger:
        for i in partyPeople[1:]:
            knownPeople.extend(notKnown[i])  # notKnown[i]를 knownPeople에 확장
            search(knownPeople, notKnown, i)
            knownPeople = list(set(knownPeople))  # 중복 제거
        danger = False

for i in partysNum:
    for j in i:
        if j in knownPeople:
            count -= 1
            break

print(count)


# for i in range(partys):
#   danger = False
#   partyPeople = list(map(int, input().split()))
#   for i in partyPeople[1:]:
#     if i in knownPeople:
#       #참석자들도 notKnown에서 Known으로 옮겨져야 한다
#       knownPeople.extend(list(partyPeople[1:]))
#       knownPeople = list(set(knownPeople))
#       notKnown = list(set(notKnown) - set(partyPeople[1:]))
#       danger = True
#       break
#   if danger == False:
#     count += 1
#     partysNum.append(partyPeople[1:])
# for i in partysNum:
#   for j in i:
#     if j in knownPeople:
#       knownPeople.extend(list(i))
#       knownPeople = list(set(knownPeople))
#       count -= 1
#       break
# print(count)

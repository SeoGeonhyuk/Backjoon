//
//  3003.cpp
//  backjoon
//
//  Created by Gun's macbook on 2022/09/01.
//

#include <iostream>
int realCnt(int num, int cnt){
    //개수를 맞추기 위한 함수
    if(num == cnt)
        return 0;
    else if(num > cnt)
        return (num - cnt);
    else
        return -1*(cnt - num);
}
int main(void) {
    // insert code here...
    int king = 0, queen = 0, rock = 0, vishop = 0, knight = 0, pone = 0;
    std::cin >> king >> queen >> rock >> vishop >> knight >> pone;
    king = realCnt(1, king);
    queen = realCnt(1, queen);
    rock = realCnt(2, rock);
    vishop = realCnt(2, vishop);
    knight = realCnt(2, knight);
    pone = realCnt(8, pone);
    std::cout << king <<" "<< queen <<" "<< rock <<" "<<vishop <<" "<< knight << " "<<pone << std::endl;
}


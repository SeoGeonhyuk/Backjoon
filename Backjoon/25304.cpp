//
//  25304.cpp
//  backjoon
//
//  Created by Gun's macbook on 2022/09/01.
//

#include <iostream>
int main(){
    int price;
    int num;
    std::cin >> price;
    std::cin >> num;
    int realPrice = 0;
    for(int i = 0; i < num; i++){
        int stockPrice, stockNum;
        std::cin >> stockPrice >> stockNum;
        realPrice += stockPrice*stockNum;
    }
    if(price == realPrice)
        std::cout << "Yes";
    else
        std::cout << "No";
}

////
////  main.cpp
////  e
////
////  11653
////
#include <iostream>
#include <set>
#include <vector>
#include <math.h>
#include <algorithm>
int main(){
    int cnt;
    std::cin >> cnt;
    if(cnt == 1)
        return 0;
    while(cnt > 1){
        for(int i = 2; i <= cnt; i++){
            if(cnt%i == 0){
                cnt /= i;
                std::cout << i << std::endl;
                break;
            }
        }
    }
}

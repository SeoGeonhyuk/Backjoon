////
////  main.cpp
////  e
////
////  1978
////
#include <iostream>
#include <set>
#include <vector>
#include <math.h>
#include <algorithm>
int main(){
    int cnt;
    bool check = false;
    int count = 0;
    std::vector<int> s;
    std::cin >> cnt;
    for(int i = 0; i < cnt; i++){
        int num;
        std::cin >> num;
        s.push_back(num);
    }
    for(auto i = s.begin(); i != s.end(); i++){
        if(*i == 1){
            continue;
        }
        if(*i == 2){
            count += 1;
            continue;
        }
        for(int j = 2; j < *i; j++){
            if(*i%j == 0){
                check = true;
                break;
            }
        }
        if(check){
            check = false;
            continue;
        }
        else
            count += 1;
    }
    std::cout << count << std::endl;
}

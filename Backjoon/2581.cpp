////
////  main.cpp
////  e
////
////  2581
////
#include <iostream>
#include <set>
#include <vector>
#include <math.h>
#include <algorithm>
int main(){
    int cnt;
    int cnt2;
    bool check = false;
    int count = -1;
    std::vector<int> s;
    std::vector<int> s2;
    std::cin >> cnt >> cnt2;
    for(int i = cnt; i <= cnt2; i++){
        if(i == 1){
            continue;
        }
        if(i == 2){
            s2.push_back(i);
            count += 1;
            continue;
        }
        for(int j = 2; j < i; j++){
            if(i%j == 0){
                check = true;
                break;
            }
        }
        if(check){
            check = false;
            continue;
        }
        else{
            s2.push_back(i);
            count += 1;
        }
    }
    int sum = 0;
    for(auto i = s2.begin(); i != s2.end(); i++){
        sum += *i;
    }
    std::sort(s2.begin(), s2.end());
    if(sum > 0)
        std::cout << sum << std::endl;
    if(s2.size() > 0)
        std::cout << s2[0] << std::endl;
    else
        std::cout << -1 << std::endl;
}

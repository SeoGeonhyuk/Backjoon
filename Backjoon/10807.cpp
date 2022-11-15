//
//  main.cpp
//  e
//
//  10807
//
#include <iostream>
#include <set>
#include <vector>
#include <algorithm>
int main(){
    int i = 0;
    std::vector<int> s;
    std::cin >> i;
    for(int j = 0; j < i; j++){
        int k = 0;
        std::cin >> k;
        s.push_back(k);
    }
    int count_num;
    std::cin >> count_num;
    std::cout << count(s.begin(), s.end(), count_num) << std::endl;
}

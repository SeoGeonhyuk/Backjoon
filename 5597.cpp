//
//  main.cpp
//  e
//
//  5597
//
#include <iostream>
#include <set>
#include <vector>
#include <algorithm>
int main(){
    std::vector<int> s;
    std::vector<int> s2;
    for(int j = 0; j < 28; j++){
        int k = 0;
        std::cin >> k;
        s.push_back(k);
    }
    for(int j = 1; j <= 30; j++){
        if(find(s.begin(), s.end(), j) == s.end())
            s2.push_back(j);
    }
    std::sort(s2.begin(), s2.end());
    for(auto i = s2.begin(); i != s2.end(); i++)
       std::cout << *i << std::endl;
}

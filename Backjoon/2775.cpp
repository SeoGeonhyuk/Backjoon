//
//  2775.cpp
//  e
//
//  Created by Gun's macbook on 2022/09/05.
//

#include <iostream>
#include <vector>
int residents(int k, int n){
    int sum = 0;
    if(k == 0)
        return n;
    else{
        for(int i = 1; i <= n; i++)
            sum += residents(k-1, i);
        return sum;
    }
}
int main(){
    int cnt;
    std::vector<int> rs;
    std::cin >> cnt;
    for(int i = 0; i < cnt; i++){
        int k;
        int n;
        std::cin >> k;
        std::cin >> n;
        rs.push_back(residents(k, n));
    }
    for (auto i = rs.begin(); i != rs.end(); i++)
        std::cout << *i << std::endl;
}

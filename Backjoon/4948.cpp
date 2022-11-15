////
////  main.cpp
////  e
////
////  4948
////
#include <iostream>
#include <set>
#include <vector>
#include <math.h>
#include <algorithm>
std::vector<int> s;
void countnum(int M, int N);
int main(){
    std::ios_base :: sync_with_stdio(false);
    std::cin.tie(NULL);
    std::cout.tie(NULL);
    int cnt = 1;
    std::vector<int> countNum;
    countnum(2, 123456*2);
    while(cnt > 0){
        std::cin >> cnt;
        if(cnt != 0){
            int count = 0;
            for(auto i = s.begin(); i != s.end(); i++){
                if(*i > cnt && *i <= cnt*2)
                    ++count;
            }
            countNum.push_back(count);
        }
    }
    for(auto i = countNum.begin(); i != countNum.end(); i++){
        std::cout << *i << '\n';
    }
    }
void countnum(int M, int N){
    bool check = false;
    if(M == 1){
        M += 1;
    }
    int nums[N+1];
    for(int i = M; i <= N; i++){
        nums[i] = i;
    }
    for(int i = M; i <= N; i++){
        if(nums[i] != 0){
            for(int j = 2; j <= sqrt(i); j++){
                if(i%j == 0){
                    nums[i] = 0;
                    check = true;
                    break;
                }
            }
            if(check == false){
                s.push_back(i);
            }
            for(long long c = pow(i, 2); c <= N; c+= i)
                nums[c] = 0;
            check = false;
        }
    }
}

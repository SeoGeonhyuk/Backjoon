////
////  main.cpp
////  e
////
////  1929
////
#include <iostream>
#include <set>
#include <vector>
#include <math.h>
#include <algorithm>
int main(){
    bool check = false;
    int M = 0;
    int N = 0;
    std::cin >> M >> N;
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
                std::cout << i << '\n';
            }
            for(long long c = pow(i, 2); c <= N; c+= i)
                nums[c] = 0;
            check = false;
            }
        }
    }

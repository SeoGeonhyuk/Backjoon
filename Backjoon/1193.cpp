//
//  1193.cpp
//  e
//
//  Created by Gun's macbook on 2022/09/02.
//

#include <iostream>
void count(int cnt){
    int a = 1;
    int b = 1;
    if(cnt == 1)
        std::cout << b << "/" <<a;
    else{
        int max_a = a;
        int max_b = b;
        while(cnt > 1){
            if(max_a > max_b){
                --a;
                b++;
                if(b > max_b)
                    max_b++;
            }
            else if(max_b > max_a){
                --b;
                a++;
                if(a > max_a)
                    max_a++;
            }
            else if(max_a == a){
                max_a++;
                a++;
            }
            else if(max_b == b){
                max_b++;
                b++;
            }
            --cnt;
        }
        std::cout << b << "/" <<a;
    }
}
int main(){
    int cnt;
    std::cin >> cnt;
    count(cnt);
}

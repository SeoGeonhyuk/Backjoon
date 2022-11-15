//
//  10250.cpp
//  e
//
//  Created by Gun's macbook on 2022/09/03.
//

#include <iostream>
#include <vector>
int roomnum(int height, int width, int number){
    if(number <= height)
        return number*100 + 1;
    else{
        int cnt =  1;
        while(height < number){
            number -= height;
            ++cnt;
        }
        return number*100 + cnt;
    }
}
int main(){
    int cnt;
    std::vector<int> wheres;
    std::cin >> cnt;
    for(int i = 0; i < cnt; i++){
        int height, width, number;
        std::cin >> height >> width >> number;
        wheres.push_back(roomnum(height, width, number));
    }
    for(auto i = wheres.begin(); i != wheres.end(); i++)
        std::cout << *i << std::endl;
}

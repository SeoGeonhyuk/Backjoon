//
//  main.cpp
//  e
//
//  10757
//
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
int main(){
    std::string s1 = "";
    std::string s2 = "";
    std::vector<int> ans;
    std::cin >> s1 >> s2;
    int high_length = 0;
    int low_length = 0;
    int sum = 0;
    int length = (s1.length() >= s2.length()) ? s1.length() : s2.length();
    if(length == s1.length()){
        high_length = s1.length() - 1;
        low_length = s2.length() - 1;
        for(int i = high_length; i >= 0; i--){
            if(low_length < 0){
                if((int)(s1[i]-'0'+sum) >= 10){
                    ans.push_back(0);
                    continue;
                }
                ans.push_back((int)(s1[i]-'0'+sum));
                sum = 0;
                continue;
            }
            s1[i] = s1[i] + sum;
            if((int)s1[i]-'0' == 10)
                sum = 1;
            sum = 0;
            if((int)(s1[i]-'0')+(int)(s2[low_length]-'0') >= 10){
                sum = 1;
                ans.push_back((s1[i]-'0')+(s2[low_length]-'0') - 10);
                --low_length;
                continue;
            }
            ans.push_back((int)(s1[i]-'0')+(int)(s2[low_length]-'0'));
            --low_length;
        }
    }
    else{
        high_length = s2.length() - 1;
        low_length = s1.length() - 1;
        for(int i = high_length; i >= 0; i--){
            if(low_length < 0){
                if((int)(s2[i]-'0'+sum) >= 10){
                    ans.push_back(0);
                    continue;
                }
                ans.push_back((int)(s2[i]-'0'+sum));
                sum = 0;
                continue;
            }
            s2[i] = s2[i] + sum;
            if((int)s2[i]-'0' == 10)
                sum = 1;
            else
                sum = 0;
            if((int)(s2[i]-'0')+(int)(s1[low_length]-'0') >= 10){
                sum = 1;
                ans.push_back((s2[i]-'0')+(s1[low_length]-'0') - 10);
                --low_length;
                continue;
            }
            ans.push_back((int)(s2[i]-'0')+(int)(s1[low_length]-'0'));
            --low_length;
        }
    }
    if(sum > 0)
        ans.push_back(sum);
    std::reverse(ans.begin(), ans.end());
    for(auto i = ans.begin(); i != ans.end(); i++)
        std::cout << *i << "";
    std::cout << "" << std::endl;
    return 0;
}

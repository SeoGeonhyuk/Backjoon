#include <iostream>
#include <string>
#include <stack>
using namespace std;
// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
bool solution(string s) {
    bool answer = true;
    stack<char> begins;
    stack<char> ends;
    if(s[0] == ')')
        return false;
    for(int i = 0; i < s.length(); i++){
        if(s[i] == '('){
            begins.push('(');
           // ++begin;
        }
        else if(s[i] == ')'){
            if(begins.empty())
                return false;
            ends.push(')');
            if(ends.top() == ')' && begins.top() == '('){
                ends.pop();
                begins.pop();
            }
        }
    }
    if(ends.empty() && begins.empty())
        return answer;
    else
        return false;
}
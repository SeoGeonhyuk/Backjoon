#include <iostream>
#include <vector>
using namespace std;

int main(){
    int zero[41] = {1, 0};
    int one[41] = {0 , 1};
    for(int i = 2; i < 41; i++){
        zero[i] = zero[i-2] + zero[i-1];
        one[i] = one[i-2] + one[i-1];
    }
    ios::sync_with_stdio(false);
    cout.tie(0);
    cin.tie(0);
    int count;
    vector<int> s;
    vector<pair<int, int>> zeroAndOne;
    cin >> count;
    for(int i = 0; i < count; i++){
        int a;
        cin >> a;
        s.push_back(a);
    }
    for(int i = 0; i < count; i++){
        cout << zero[s[i]] << " " << one[s[i]] << "\n";
    }
}

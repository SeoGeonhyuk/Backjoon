#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    string number;
    int setNum = 1;
    vector<int> originalPlasticNumbers = {1, 1, 1, 1, 1, 1, 2, 1, 1};
    vector<int> plasticNumbers = {1, 1, 1, 1, 1, 1, 2, 1, 1};
    cin >> number;
    for (char i : number) {
        if (i - '0' == 9) i = '6';
        --plasticNumbers[i - '0'];
        if (plasticNumbers[i - '0'] < 0) {
            for (int j = 0; j < plasticNumbers.size(); j++) {
                plasticNumbers[j] += originalPlasticNumbers[j];
            }
            ++setNum;
        }
    }
    cout << setNum;
}
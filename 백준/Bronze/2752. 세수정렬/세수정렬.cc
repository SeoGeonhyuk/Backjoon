#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    vector<int> numbers;
    for (int i = 0; i < 3; i++) {
        int num;
        cin >> num;
        numbers.push_back(num);
    }
    sort(numbers.begin(), numbers.end());
    for (int number: numbers) cout << number << ' ';
}
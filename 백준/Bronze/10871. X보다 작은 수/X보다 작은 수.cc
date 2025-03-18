#include <iostream>
#include <vector>
using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    vector<int> numbers;
    int count, pivotNum;
    cin >> count >> pivotNum;
    for (int i = 0; i < count; i++) {
        int num;
        cin >> num;
        if (num < pivotNum) numbers.push_back(num);
    }
    for (int number : numbers) {
        cout << number << ' ';
    }
}
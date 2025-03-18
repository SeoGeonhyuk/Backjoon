#include <iostream>
#include <vector>
using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    int size;
    int goalNum;
    int answer = 0;
    cin >> size;
    vector<int> numbers(1000001, 0);
    for (int i = 0; i < size; i++) {
        int number;
        cin >> number;
        numbers[number] = i + 1;
    }
    cin >> goalNum;
    for (int i = 1; i < numbers.size() && goalNum - i < numbers.size(); i++) {
        if (numbers[i] && numbers[goalNum - i] && numbers[goalNum - i] > numbers[i]) {
            answer++;
        }
    }
    cout << answer;
}
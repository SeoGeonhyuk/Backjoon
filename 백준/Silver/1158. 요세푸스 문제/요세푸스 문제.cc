#include <iostream>
#include <list>
#include <vector>
using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    int people, sequenceNum;
    cin >> people >> sequenceNum;
    list<int> peoples;
    vector<int> result;
    for (int i = 1; i <= people; i++) {
        peoples.push_back(i);
    }
    auto cur = peoples.begin();
    int cnt = 1;
    while (peoples.size()) {
        if (cnt == sequenceNum) {
            cnt = 1;
            result.push_back(*cur);
            cur = peoples.erase(cur);
            if (cur == peoples.end()) cur = peoples.begin();
        }
        else {
            ++cur;
            if (cur == peoples.end()) {
                cur = peoples.begin();
            }
            ++cnt;
        }
    }
    std::cout << "<";
    for (size_t i = 0; i < result.size(); ++i) {
        std::cout << result[i];
        if (i < result.size() - 1) {
            std::cout << ", ";
        }
    }
    std::cout << ">" << std::endl;
}
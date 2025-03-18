#include <iostream>
#include <string>
#include <vector>

using namespace std;
int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    string s;
    vector<int> alphabets(26, 0);
    cin >> s;
    for (char alphabet : s) {
        alphabets[int(alphabet - 97)] += 1;
    }
    for (int count : alphabets) cout << count << ' ';
}
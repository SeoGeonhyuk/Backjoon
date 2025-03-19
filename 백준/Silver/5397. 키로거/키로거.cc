#include <iostream>
#include <string>
#include <vector>
#include <list>
using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    int count;
    cin >> count;
    vector<list<char>> passwords;
    cin.ignore();
    for (int i = 0; i < count; i++) {
        string s;
        list<char> password;
        auto cur = password.end();
        getline(cin, s);
        for (char c : s) {
            if (c == '<') {
                if (cur != password.begin()) --cur;
            }
            else if (c == '>') {
                if (cur != password.end()) ++cur;
            }
            else if (c == '-') {
                if (cur != password.begin()) cur = password.erase(--cur);
            }
            else {
                if (cur == password.end()) {
                    password.push_back(c);
                    cur = password.end();
                }
                else {
                    cur = password.insert(cur, c);
                    ++cur;
                }
            }
        }
        passwords.push_back(password);
    }
    for (auto i : passwords) {
        for (auto c : i) {
            cout << c;
        }
        cout << '\n';
    }
}
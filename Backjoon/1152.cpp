//백준 1152번 문제
#include <iostream>
#include <string>
#include <algorithm>
int main() {
	std::string s;
	std::getline(std::cin, s);
	int cnt = 0;
	for (int i = 0; i < s.length(); i++) {
		if (s[i] == ' ') {
			if (s[i + 1] == ' ')
				continue;
			else if (i + 1 == s.length()) {
				continue;
			}
			else
				++cnt;
		}
	}
	if (s[0] != ' ' && s[s.length()] != ' ')
		++cnt;
	std::cout << cnt;
}
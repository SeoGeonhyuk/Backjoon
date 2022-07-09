//백준 2941번 문제
#include <iostream>
#include <string>
#include <algorithm>
#include <vector>

int main() {
	std::string s;
	std::cin >> s;
	int cnt = 0;
	for (int i = 0; i < s.length(); i++) {
		if (s[i] == 'c') {
			if (s[i + 1] == '=' || s[i + 1] == '-') {
				++cnt;
				i = i + 1;
			}
			else
				++cnt;
		}
		else if (s[i] == 'd') {
			if (s[i + 1] == '-') {
				++cnt;
				i = i + 1;
			}
			else if (s[i + 1] == 'z') {
				if (s[i + 2] == '=') {
					++cnt;
					i = i + 2;
				}
				else
					++cnt;
			}
			else
				++cnt;
		}
		else if (s[i] == 'j') {
			if (s[i - 1] == 'n' || s[i - 1] == 'l')
				++cnt;
			else
				++cnt;
		}
		else if (s[i] == 's') {
			if (s[i + 1] == '=') {
				++cnt;
				i = i + 1;
			}
			else
				++cnt;
		}
		else if (s[i] == 'z') {
			if (s[i + 1] == '=') {
				++cnt;
				i = i + 1;
			}
			else
				++cnt;
		}
		else {
			if ((s[i] == 'n' || s[i] == 'l') && s[i + 1] == 'j')
				continue;
			else
				++cnt;
		}
	}
	std::cout << cnt;
}
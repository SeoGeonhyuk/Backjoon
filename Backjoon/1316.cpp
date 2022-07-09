//백준 1316번 문제
#include <iostream>
#include <string>
#include <vector>
int main() {
	std::vector<std::string> string_s;
	int cnt;
	std::cin >> cnt;
	for (int i = 0; i < cnt; i++) {
		std::string ss;
		std::cin >> ss;
		string_s.push_back(ss);
	}
	for (std::string s : string_s) {
		bool bools[26] = { false, };
		for (int i = 0; i < s.length(); i++) {
			if (bools[int(s[i]) - 97] == true) {
				cnt = cnt - 1;
				break;
			}
			else {
				char d = s[i];
				while (s[i] == d)
					i++;
				i = i - 1;
				bools[int(s[i]) - 97] = true;
			}
		}
	}
	std::cout << cnt;
}
//백준 1157번 문제
#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
int main() {
	std::vector<int> alphabets(26, 0);
	std::string s;
	std::cin >> s;
	for (auto i : s) {
		if (65 <= (int)i && (int)i <= 90)
			alphabets[(int)i - 65] += 1;
		else
			alphabets[(int)i - 97] += 1;
	}
	int max = *max_element(alphabets.begin(), alphabets.end());
	if (count(alphabets.begin(), alphabets.end(), max) > 1)
		std::cout << "?";
	else {
		int maxIndex = (max_element(alphabets.begin(), alphabets.end()) - alphabets.begin()) + 65;
		std::cout << (char)maxIndex;
	}
}
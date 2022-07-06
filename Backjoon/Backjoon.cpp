//백준 5622번 문제
#include <iostream>
#include <algorithm>
#include <string>
#include <vector>
int main() {
	std::string s;
	std::vector<int> times = { 3,4,5,6,7,8,9,10 };
	std::cin >> s;
	int time = 0;
	for (auto i : s) {
		if (65 <= (int)i && (int)i <= 67) {
			time += times[0];
		}
		if (68 <= (int)i && (int)i <= 70) {
			time += times[1];
		}
		if (71 <= (int)i && (int)i <= 73) {
			time += times[2];
		}
		if (74 <= (int)i && (int)i <= 76) {
			time += times[3];
		}
		if (77 <= (int)i && (int)i <= 79) {
			time += times[4];
		}
		if (80 <= (int)i && (int)i <= 83) {
			time += times[5];
		}
		if (84 <= (int)i && (int)i <= 86) {
			time += times[6];
		}
		if (87 <= (int)i && (int)i <= 90) {
			time += times[7];
		}
	}
	std::cout << time;
}
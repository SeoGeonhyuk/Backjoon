//백준 2292번 문제
#include <iostream>
int main() {
	int a;
	int rooms = 6;
	int cnt = 0;
	std::cin >> a;
	a = a - 1;
	++cnt;
	if (a == 0)
		std::cout << cnt;
	else {
		while (a > 0) {
			a -= rooms;
			++cnt;
			rooms += 6;
		}
		std::cout << cnt;
	}
}
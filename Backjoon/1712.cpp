//백준 1712번 문제
#include <iostream>
#include <cmath>
int main() {
	double a, b, c;
	std::cin >> a >> b >> c;
	double profit = c - b;
	if (profit <= 0)
		std::cout << -1;
	else
		if (std::ceil(a / profit) * profit > a)
			std::cout << (int)std::ceil(a / profit);
		else
			std::cout << (int)std::ceil(a / profit) + 1;
}
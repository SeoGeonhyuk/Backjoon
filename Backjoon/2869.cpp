//백준 2869번 문제
#include <iostream>
#include <cmath>
int main() {
	double speed = 0, slide = 0, height = 0;
	std::cin >> speed >> slide >> height;
	int days = std::ceil((height - slide) / (speed - slide));
	std::cout << days;
}
//백준 2675번 문제
#include <iostream>
#include <string>
#include <vector>

//알게 된 사실 string에도 push_back함수를 쓸 수 있다.
int main() {
	int count;
	std::cin >> count;
	std::vector<std::string> ps;//문자열을 담기 위한 벡터 지정
	for (int i = 0; i < count; i++) {
		int repeatCount;
		std::string s = "";
		std::string sToP = "";
		std::cin >> repeatCount >> s;
		for (auto z : s) {
			for (int i = 0; i < repeatCount; i++) {
				sToP.push_back(z);
			}
		}
		ps.push_back(sToP);
	}
	for (auto i = ps.begin(); i != ps.end(); i++)
		std::cout << *i << std::endl;
}
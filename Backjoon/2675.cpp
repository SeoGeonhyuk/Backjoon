//���� 2675�� ����
#include <iostream>
#include <string>
#include <vector>

//�˰� �� ��� string���� push_back�Լ��� �� �� �ִ�.
int main() {
	int count;
	std::cin >> count;
	std::vector<std::string> ps;//���ڿ��� ��� ���� ���� ����
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
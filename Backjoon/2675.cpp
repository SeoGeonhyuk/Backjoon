//���� 2675�� ����
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
	int count;
	cin >> count;
	vector<vector<string>> ps;//���ڿ��� ��� ���� ���� ����
	ps.resize(count);
	for (int i = 0; i < count; i++) {
		int repeatCount;
		string s;
		cin >> repeatCount >> s;
		for (auto z : s) {
			for (int j = 0; j < repeatCount j++)
				ps[i].push_back(s[j]);
		}
	}
	for (auto i = ps.begin; i != ps.end(); i++)
		cout << i << endl;
}
#include <iostream>
#include <vector>
using namespace std;

void distribution(int** s, int y, int x, int height, int width) {
    if (y < 0 || y >= height || x < 0 || x >= width)
        return;
    s[y][x] = 0;
    if (x + 1 < width && s[y][x + 1] == 1)
        distribution(s, y, x + 1, height, width);
    if (x - 1 >= 0 && s[y][x - 1] == 1)
        distribution(s, y, x - 1, height, width);
    if (y + 1 < height && s[y + 1][x] == 1)
        distribution(s, y + 1, x, height, width);
    if (y - 1 >= 0 && s[y - 1][x] == 1)
        distribution(s, y - 1, x, height, width);
}

int main() {
    vector<int> result;
    int cnt;
    cin >> cnt;
    for (int i = 0; i < cnt; i++) {
        int width, height, nums;
        int out = 0;
        cin >> width >> height >> nums;

        // 2차원 배열 동적 할당 및 0으로 초기화
        int** s = new int*[height];
        for (int j = 0; j < height; j++) {
            s[j] = new int[width]();
        }

        for (int j = 0; j < nums; j++) {
            int x, y;
            cin >> x >> y;
            s[y][x] = 1;
        }

        for (int j = 0; j < height; j++) {
            for (int k = 0; k < width; k++) {
                if (s[j][k] == 1) {
                    ++out;
                    distribution(s, j, k, height, width);
                }
            }
        }

        result.push_back(out);

        // 동적 할당된 배열 메모리 해제
        for (int j = 0; j < height; j++) {
            delete[] s[j];
        }
        delete[] s;
    }

    for (auto i : result) {
        cout << i << endl;
    }

    return 0;
}

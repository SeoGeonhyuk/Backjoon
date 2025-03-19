#include <iostream>
#include <string>
using namespace std;

const int MX = 1000005;
char dat[MX];
int pre[MX], nxt[MX];
int unused = 1;
void insert(int addr, int num){
    dat[unused] = num;
    pre[unused] = addr;
    if (nxt[addr] != -1) {
        pre[nxt[addr]] = unused;
        nxt[unused] = nxt[addr];
        nxt[addr] = unused;
    }
    else {
        nxt[unused] = nxt[addr];
        nxt[addr] = unused;
    }
    unused++;
}

void erase(int addr){
    nxt[pre[addr]] = nxt[addr];
    pre[nxt[addr]] = pre[addr];
}

void traverse(){
    int cur = nxt[0];
    while(cur != -1){
        cout << dat[cur];
        cur = nxt[cur];
    }
    cout << '\n';
}


int main(void) {
    ios::sync_with_stdio(0);
    cin.tie(0);
    fill(pre, pre+MX, -1);
    fill(nxt, nxt+MX, -1);
    string s;
    cin >> s;
    int cur = 0;
    for (char i: s) {
        insert(cur, i);
        cur = nxt[cur];
    }
    int count;
    cin >> count;
    cin.ignore();
    for (int i = 0; i < count; i++) {
        string order;
        getline(cin, order);
        if (order == "L") {
            if (pre[cur] != -1) cur = pre[cur];
        }
        else if (order == "D") {
            if (nxt[cur] != -1) cur = nxt[cur];
        }
        else if (order == "B") {
            if (pre[cur] != -1) {
                erase(cur);
                cur = pre[cur];
            }
        }
        else {
            insert(cur, order[2]);
            cur = nxt[cur];
        }
    }
    traverse();
}
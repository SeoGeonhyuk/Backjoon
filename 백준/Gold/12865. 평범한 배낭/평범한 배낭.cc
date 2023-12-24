#include <iostream>
#include <vector>
using namespace std;

vector <pair<int,int>> v;
int n,k,b[105][100005]={0,};

int main(int argc, const char * argv[]) {
    
    cin>>n>>k;
    
    v.push_back({0,0});
    for (int i=0; i<n; i++){
        int x,y;
        cin>>x>>y;
        v.push_back({x,y});
    }
    
    for(int i=1; i<=n; i++){
        for(int j=1; j<=k; j++){
            int fnt = v[i].first; //무게
            int sec = v[i].second; //가치
            
            if (fnt <= j){ //최대무게 이하
                if ((sec + b[i-1][j-fnt]) > b[i-1][j])
                    b[i][j] = sec + b[i-1][j-fnt];
                else
                    b[i][j] = b[i-1][j];
            }
            else //최대무게 초과
                b[i][j] = b[i-1][j];
        }
    }
    
    cout<<b[n][k];
    
    return 0;
}
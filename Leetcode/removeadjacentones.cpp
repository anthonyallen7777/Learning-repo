#include <iostream>
#include <algorithm>
#include <vector>
#include <string>
#include <map>

using namespace std;

class Solution {
public:
    vector<vector<int>> removeIslands(vector<vector<int>>& matrix) {
      //1 black
      //0 white
      vector<vector<int>> columns(6, vector<int>(6,0));
      for (int i = 0; i < matrix.size(); i++) {
        cout << '[';
        for (int j = 0; j < matrix[i].size(); j++) {
          cout << matrix[i][j];
          columns[j][i] = matrix[i][j];
        }
        cout << ']' << "\n";
      }
      vector<vector<int>> destroyVector(6, vector<int>(6,0));
      for (int i = 0; i < matrix.size(); i++) {
        for (int j = 0; j < matrix[i].size(); j++) {
          bool destroyIt = false;
          cout << i;
          if (i < 1 || i > matrix.size()-1 || j < 1 || j > matrix[i].size()-1) {
            if (matrix[i][j] == 1) {
              destroyVector[i][j] = 1;
            }
            continue;
          }else if (matrix[i][j] == 1) {
            if (matrix[i-1][j] == 1) {for (int x=i; x > 0; x--) {if (columns[j][x] != 1) {destroyIt = true;break;} else {destroyIt = false;}}}
            if (matrix[i+1][j] == 1) {for (int x=i; x < columns[j].size(); x++) {if (columns[j][x] != 1) {destroyIt = true;break;} else {destroyIt = false;}}}
            if (matrix[i][j-1] == 1) {for (int x=j; x > 0; x--) {if (matrix[i][x] != 1) {destroyIt = true;break;} else {destroyIt = false;}}}
            if (matrix[i][j+1] == 1) {for (int x=j; x < matrix[i].size(); x++) {if (columns[i][x] != 1) {destroyIt = true;break;} else {destroyIt = false;}}}
            if (destroyIt) {
              destroyVector[i][j] = 1;
            }
          }
        }
      }

      for (int i = 0; i < matrix.size(); i++) {
        for (int j = 0; j < matrix[i].size(); j++) {
          if (destroyVector[i][j] == 1 && matrix[i][j] == 1) {
            matrix[i][j] = 0;
          }
        }
      }

      cout << '\n';

      for (int i = 0; i < matrix.size(); i++) {
        cout << '[';
        for (int j = 0; j < matrix[i].size(); j++) {
          cout << matrix[i][j];
          columns[j][i] = matrix[i][j];
        }
        cout << ']' << "\n";
      }

      return matrix;
    }
};

int main ()
{
  Solution class1;
  vector<vector<int>> matrix1 = {
    {1,0,0,0,0,0},
    {0,1,1,0,1,1},
    {0,1,0,0,1,0},
    {1,1,0,0,1,0},
    {1,1,1,1,0,0},
    {1,1,0,0,0,1}
    };
  class1.removeIslands(matrix1);
};
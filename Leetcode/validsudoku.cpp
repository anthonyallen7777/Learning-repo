#include <iostream>
#include <algorithm>
#include <vector>
#include <string>
#include <map>

using namespace std;

class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
      vector<vector<int>> quadIncrement(9, vector<int>(10,0));
      vector<vector<int>> columnIncrement(9, vector<int>(10,0));
      vector<int> rowIncrement(10,0);

      //this n^2 loop checks for duplicates in each quadrant
      //(which is at worst 81 (9*9))
      int quadrantCount = 0;
      for (int i = 0; i < board.size(); i++) {
        if (i < 3) quadrantCount = 0; else if (i < 6) quadrantCount = 3; else quadrantCount = 6;
        int x = 0;
        for (int j = 0; j < board[i].size(); j++) {
          if (x != 0 && x % 3 == 0) quadrantCount += 1;
          if (isdigit(board[i][j])) {
            int c = int(board[i][j])-'0';
            quadIncrement[quadrantCount][c] += 1;
            columnIncrement[j][c] += 1;
            rowIncrement[c] += 1;
            //check quad
            if (quadIncrement[quadrantCount][c] > 1) {
              return false;
            }
            //check row
            if (rowIncrement[c] > 1) {
              return false;
            }
            //check column
            if (columnIncrement[j][c] > 1) {
              return false;
            }
          }
          x += 1;
        }

        //reset quadrant and row
        quadrantCount = 0;
        rowIncrement = vector<int>(10,0);
      }

      return true;
    }
};

int main ()
{
  Solution class1;
  vector<vector<char>> board1 = {{'5','3','.','.','7','.','.','.','.'},
  {'6','.','.','1','9','5','.','.','.'},
  {'.','9','8','.','.','.','.','6','.'},
  {'8','.','.','.','6','.','.','.','3'},
  {'4','.','.','8','.','3','.','.','1'},
  {'7','.','.','.','2','.','.','.','6'},
  {'.','6','.','.','.','.','2','8','.'},
  {'.','.','.','4','1','9','.','.','5'},
  {'.','.','.','.','8','.','.','7','9'}};
  class1.isValidSudoku(board1);
};
#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        if (strs.empty()) {
            return "";
        } else {
            std::vector<string> v2;
            for (int i = 1; i < strs.size(); i++) {
                string s1;
                for (int x = 0; x < strs[i].size(); x++) {
                    if (strs[i][x] == strs[i - 1][x]) {
                        s1.push_back(strs[i][x]);
                        continue;
                    }
                    break;
                }
                if (s1.empty()) {
                    return "";
                }
                else {
                    v2.push_back(s1);
                }
            }

            if (v2.empty()) {
                return strs[0];
            }
            else {
                int r = 0;
                string x = v2[0];
                while (r < v2.size()) {
                    if (v2[r].size() < x.size()) {
                        x = v2[r];
                    }
                    r++;
                }

                cout << x;
                return x;
            }
        }
    }
};

int main ()
{
  Solution class1;
  std::vector<string> strings = { "a" };
  class1.longestCommonPrefix(strings);
};
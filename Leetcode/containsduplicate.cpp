#include <iostream>
#include<fstream>
#include <algorithm>
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        sort(nums.begin(), nums.end());

        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] == nums[i-1]) {
                //not unique
                //cout << "NOT UNIQUE";
                return true;
            }
        }

        //all unique
        //cout << "UNIQUE";
        return false;
    }
};

int main ()
{
  Solution class1;
  //int array
  std::vector<int> v1 = { 1,2,3,1 }; //NOT UNIQUE
  std::vector<int> v2 = { 1,2,3,4 }; //UNIQUE
  std::vector<int> v3 = { 1,1,1,3,3,4,3,2,4,2 };//NOT UNIQUE
  std::vector<int> v4 = { 2,14,18,22,22 };
  //class1.containsDuplicate(v4);

  ifstream myReadFile;
  myReadFile.open("testcases.txt");
  char output[100];
  if (myReadFile.is_open()) {
    string s;
    while (getline(myReadFile, s)) {
        std::vector<int> v5(s.begin(), s.end());
        /*
        for (char i: v5) {
            std::cout << i;
        }
        */
        class1.containsDuplicate(v5);
    }
  }
  myReadFile.close();

  return 0;
};
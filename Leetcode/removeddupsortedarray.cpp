#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int e,r = 0;
        int prev = nums[0];
        for (int i = 1; i < nums.size(); i++) {
            prev = nums[i-1];
            if (nums[i] == prev) {
                r += 1;
                //cout << nums[i] << "\n";
                nums.erase(nums.begin()+i);
                i--;
            }
            //cout << nums[i] << "\n";
        }
        e = nums.size();
        //cout << "e: " << e << "\n";
        for (int i = 0; i < r; i++) nums.push_back(-101);
        for (unsigned int i = 0; i < nums.size(); i++) {
            //cout << nums[i] << "\n";
        }
        return e;
    }
};

int main ()
{
  Solution class1;
  //int array
  std::vector<int> v1 = { 1,1,2 };
  std::vector<int> v2 = { 0,0,1,1,1,2,2,3,3,4 };
  class1.removeDuplicates(v1);
};
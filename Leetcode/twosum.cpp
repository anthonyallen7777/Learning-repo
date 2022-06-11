#include <iostream>
#include<fstream>
#include <algorithm>
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int ii = 0;
        int xx = 1;
        for (auto& i: nums) {
            for (auto& x: nums) {
                if (i + x == target) {
                    ii = &i - &nums[0];
                    xx = &x - &nums[0];
                    if (ii != xx) {
                        //cout << "[" << ii << ", " << xx 
                        //<< "]" << '\n';
                        return std::vector<int> { ii, xx };
                    }
                }
                //cout << i << ":" << x << '\n';
            }
        }
        return std::vector<int> { ii, xx };
    }
};

int main ()
{
  Solution class1;
  std::vector<int> nums = {3,3};
  int target = 6;
  class1.twoSum(nums, target);
};
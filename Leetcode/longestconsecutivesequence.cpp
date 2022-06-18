#include <iostream>
#include <algorithm>
#include <vector>
#include <string>
#include <map>

using namespace std;

class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
      std::map<int, int> my_map_ = {};

      for (int i=0;i<nums.size();i++) {
            my_map_[nums[i]] += 1;
            //cout << nums[i] << ' ';
        }
        //cout << '\n';
        for (auto itr = my_map_.begin(); itr != my_map_.end(); ++itr) {
        //cout << "KEY: " << itr->first << ", " << "VALUE: " << itr->second <<'\n';
        }

      int prevKey = 0;
      int count = 1;
      vector<int> countVector;
      for (auto itr = my_map_.begin(); itr != my_map_.end(); ++itr) {
        //cout << "KEY: " << itr->first << ", " << "PREVIOUS KEY: " << prevKey <<'\n';
        if (itr->first - prevKey == 1) {
          //if last iteration
          if (std::next(itr) == my_map_.end()) {
            countVector.push_back(count);
          } else {
            count += 1;
          }
        } else {
          countVector.push_back(count);
          count = 1;
        }

        prevKey = itr->first;
      }

      int r = 1;
      for(int i=0; i < countVector.size(); i++) {
        if (countVector[i] > r) {
          r = countVector[i];
        }
      }

      if (nums.empty()) {
        r = 0;
      }

      cout << "\nCOUNT: " << r;
      return r;
    }
};

int main ()
{
  Solution class1;
  vector<int> nums0 = {100,4,200,1,3,2}; // 4
  vector<int> nums1 = {0,3,7,2,5,8,4,6,0,1}; // 9
  vector<int> nums2 = {1,2,0,1}; // 3
  vector<int> nums3 = {0,0}; // 1
  vector<int> nums4 = {0,-1}; // 2
  vector<int> nums5 = {0,0,1,-1}; // 3
  vector<int> nums6 = {0,-1}; // 2
  vector<int> nums7 = {}; // 0
  vector<int> nums8 = {0}; // 1
  class1.longestConsecutive(nums0);
};
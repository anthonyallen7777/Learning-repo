#include <iostream>
#include <algorithm>
#include <vector>
#include <string>
#include <map>
#include <numeric>

using namespace std;

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int argSize = nums.size();
        vector<int> vec1(argSize);
        vector<int> vec2(argSize);
        vector<int> r(argSize);
        vec1.front() = nums.front();
        for (int i = 1; i < argSize; i++) {
            vec1[i] = vec1[i-1] * nums[i];
        }
        vec2.back() = nums.back();
        for (int i = argSize-2; i > -1; i--) {
            vec2[i] = vec2[i+1] * nums[i];
        }
        r.front() = vec2[1];
        r.back() = vec1[argSize-2];
        for (int i = 1; i < argSize-1; i++) {
            r[i] = vec1[i-1] * vec2[i+1];
        }
        cout << '[';
        for (unsigned int i = 0; i < argSize; i++) {
            if (i == argSize-1) cout << r[i]; else cout << r[i] << ",";
        }
        cout << ']';

        return r;
    }
};

        /*
        bool positiveBool = true;
        for (auto& i: nums) {
            if (i < 0) {
                positiveBool = false;
            } else {
                positiveBool = true;
            }
        }
        
        vector<int> products(nums.size(),0);
        for (int i = 0; i < nums.size(); i++) {
            int prevI = (i == 0) ? prevI = nums.back() : prevI = nums[i-1];
            int nextI = (i == nums.size()-1) ? nextI = nums.front() : nextI = nums[i+1];
            products[i] = prevI * nextI;
        }
        
        for (int i = 0; i < nums.size(); i++) {
            int nextI = (i >= nums.size()-2) ? nextI = nums[i-(nums.size()-2)] : nextI = nums[i+2];
            cout << products[i] << " * " << nextI << " = " << products[i] * nextI << '\n';
            products[i] = products[i] * nextI;
        }
        cout << "\n";
        for (unsigned int i = 0; i < products.size(); i++) {
            cout << products[i] << ",";
        }
        cout << "\n";
        */

int main ()
{
  Solution class1;
  vector<int> nums1 = { 1,2,3,4 };
  vector<int> nums2 = { -1,1,0,-3,3 };
  class1.productExceptSelf(nums2);
};
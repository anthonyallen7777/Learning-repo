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
        vector<int> r;
        /*
        bool positiveBool = true;
        for (auto& i: nums) {
            if (i < 0) {
                positiveBool = false;
            } else {
                positiveBool = true;
            }
        }
        */
        vector<int> products(nums.size(),1);
        //cout << products.size() << '\n';
        for (int i = 0; i < nums.size(); i++) {
            int prevI = nums[(i-2) % nums.size()];
            //cout << prevI << '\n';
            int nextI = nums[(i+2) % nums.size()];
            cout << prevI << ", " << i << ", " << nextI << '\n';
            products[i] = prevI * nextI;
            //cout << ((0 + i+2) % nums.size()) << ',';
        }
        for (unsigned int i = 0; i < products.size(); i++) {
            cout << products[i] << "\n";
        }

        int e = nums.size()*nums.size();


        return r;
    }
};

int main ()
{
  Solution class1;
  vector<int> nums1 = { 1,2,3,4 };
  vector<int> nums2 = { -1,1,0,-3,3 };
  class1.productExceptSelf(nums2);
};


/*
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        vector<int> r;
        if (nums.empty()) return r;

        r.resize(nums.size(), 1);
        for (int i = 1; i < nums.size(); ++i) {
            r[i] = r[i-1] * nums[i-1];
        }

        int right_product = 1;
        for (int i = nums.size() - 2; i >= 0; --i) {
            right_product *= nums[i+1];
            r[i] *= right_product;
        }

        return r;
    }
};
*/
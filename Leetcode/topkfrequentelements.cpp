#include <iostream>
#include <algorithm>
#include <vector>
#include <string>
#include <map>
#include <numeric>

using namespace std;

class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        vector<int> r;
        vector<vector<int>> q(nums.size()+1);
        //                     number frequency
        std::map<int, int> my_map_ = {};
        
        //count the frequency of each number
        //first we loop over the input numbers
        for (int i=0;i<nums.size();i++) {
            //then find the number in the map
            //incrementing the value each time it is seen
            my_map_[nums[i]] += 1;
        }
        
        //loop over the map of numbers with frequency values
        for (auto& itr = my_map_.begin(); itr != my_map_.end(); ++itr) {
            //find the index of the frequency in first dimension of our 2d array
            //if the number is 1 and the frequency is 3
            //we would be at the 3rd index of the array now
            //then push the number into that indexes associated vector array

            //this is telling us every number that has certain frequency
            q[itr->second].push_back(itr->first);
        }

        //now loop over the 2d array starting at end because we want the
        //most frequent numbers (if we started at the beginning we would get the least frequent)

        //loop over it by size -1 because the array includes the index/number 0
        //and when you get the size of an array it includes the index 0

        for (int i = q.size()-1; i > 0; i--) {
            for (auto d: q[i]) {
                //add each number to our output array
                r.push_back(d);
                //until we have reached our limit for most frequent numbers
                if (r.size() == k) {
                    return r;
                }
            }
        }

        return r;
    }
};

/*
        cout << "NUMBERS\tFREQUENCY\n";
        for (auto itr = my_map_.begin(); itr != my_map_.end(); ++itr) {
                cout << itr->first << "\t" << itr->second << "\n";
        }
        */
        /*
        //      num  frequency
        if (nums.size() > 1) {
            std::map<int, vector<int>> my_map_ = {};
            sort(nums.begin(),nums.end());
            int q = 1;
            for (int i=0;i<size(nums);i++) {
                if (nums[i]==nums[i+1]) {
                    q += 1;
                } else {
                    my_map_[q].push_back(nums[i]);
                    q = 1;
                }
            }

            std::map<int, vector<int>>::reverse_iterator it;
            int q = k;
            for (it = my_map_.rbegin(); it != my_map_.rend(); it++) {
                if (q > 0) {
                    for (auto i: it->second) {
                        r.push_back(i);
                        q -= 1;
                    }
                } else {
                    break;
                }
            }
        } else {
            r.push_back(1);
        }
        */
        /*
        cout << '[';
        for (unsigned int i = 0; i < r.size(); i++) {
            cout << r[i] << ',';
        }
        cout << ']';
        */
        /*
        cout << "FREQUEN NUMBER OF NUMBERS\n";
        for (auto itr = my_map_.begin(); itr != my_map_.end(); ++itr) {
                cout << itr->first << "\t" << itr->second.size() << "\n";
        }
        */

int main ()
{
  Solution class1;
  vector<int> nums1 = {1};
    int k1 = 1;
  class1.topKFrequent(nums1, k1);
};
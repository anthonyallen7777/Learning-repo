#include <iostream>
#include <algorithm>
#include <vector>
#include <string>
#include <map>

using namespace std;

class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        vector<vector<string>> r;
        std::map<string, vector<string>> my_map_ = {};

        int d = 0;
        for (auto i: strs) {
            //sort the individual string alphabetically
            sort(i.begin(),i.end());

            //insert the sorted string as the key
            //and insert the unsorted string as the value
            my_map_[i].push_back(strs[d]);
            d += 1;
        }

        //reminder: auto& OR char& are pointing and referencing the value not
        //"creating" another
        for (auto i: my_map_) {
            //sort the map so the smallest is on left
            sort(i.second.begin(), i.second.end());
            r.push_back(i.second);
        }
        
        /*
        for (int i = 0; i < r.size(); i++) {
            for (auto it = r[i].begin(); it != r[i].end(); it++)
                cout << "[" << *it << "]" << " ";
                cout << endl;
        }
        */
        return r;
    }
};

/*
        SLOWWWW
        vector<vector<string>> r;

        std::map<int, string> my_map;

        for (int i = 0; i < strs.size(); i++) {
            my_map.insert({i, strs[i]});
        }

        for (auto itr = my_map.begin(); itr != my_map.end(); ++itr) {
            sort(itr->second.begin(), itr->second.end());
        }

        vector<int> lastIndexes;
        for (auto itr = my_map.begin(); itr != my_map.end(); ++itr) {
            if(std::find(lastIndexes.begin(), lastIndexes.end(), itr->first) != lastIndexes.end()) {
                continue;
            } else {
                vector<string> v;
                for (auto x = my_map.begin(); x != my_map.end(); ++x) {
                    if (itr->second == x->second) {
                        v.push_back(strs[x->first]);
                        lastIndexes.push_back(x->first);
                    }
                }
                r.insert(r.end(), v);
            }
        }
        sort(r.begin(), r.end());

        for (int i = 0; i < r.size(); i++) {
            for (auto it = r[i].begin(); it != r[i].end(); it++)
                cout << "[" << *it << "]" << " ";
                cout << endl;
        }
        return r;
        */

int main ()
{
  Solution class1; //  aet   aet   
  vector<string> s1 = {"eat","tea","tan","ate","nat","bat"};
  vector<string> s2 = {""};
  vector<string> s3 = {"a"};

  class1.groupAnagrams(s1);

  //std::vector<string> s4 = 
  //class1.groupAnagrams(s4);
};
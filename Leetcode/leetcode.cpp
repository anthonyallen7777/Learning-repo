#include <iostream>
#include<fstream>
#include <algorithm>
#include <vector>
#include <string>
#include <sstream>
#include <iterator>
#include <map>

using namespace std;

class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        vector<vector<string>> r;

        std::map<int, string> my_map;
        
        for (auto itr = my_map.begin(); itr != my_map.end(); ++itr) {
            vector<string> v;
            vector<int> u;
            for (auto x = my_map.begin(); x != my_map.end(); ++x) {
                if (itr->second == x->second) {
                    v.push_back(strs[x->first]);
                    u.push_back(x->first);
                }
            }
            r.insert(r.end(), v);
        }

        for (int i = 0; i < r.size(); i++) {
            for (auto it = r[i].begin(); it != r[i].end(); it++)
                cout << "[" << *it << "]" << " ";
                cout << endl;
        }

        /*
        if (strs.size() > 1) {
            //sort the strings individually alphabetically
            for (auto& i: strs) {
                sort(i.begin(), i.end());
            }
            //now sort the vector by strings alphabetically
            sort(strs.begin(), strs.end());
            int d = 1;
            while (strs.size() > 0) {
                if (strs[d-1] != strs[d]) {
                    //cout << strs[d-1] << '\n';
                    vector<string> v;
                    v.assign(strs.begin(),strs.begin()+d);
                    r.insert(r.end(), v);
                    strs.erase(strs.begin(), strs.begin()+d);
                    d = 1;
                }
                d += 1;
            }
        } else {
            r.insert(r.end(), strs);
        }

        for (int i = 0; i < r.size(); i++) {
            for (auto it = r[i].begin(); it != r[i].end(); it++)
                cout << "[" << *it << "]" << " ";
                cout << endl;
        }
        */

        return r;
    }
};

int main ()
{
  Solution class1; //  aet   aet   
  vector<string> s1 = {"eat","tea","tan","ate","nat","bat"};
  vector<string> s2 = {""};

  class1.groupAnagrams(s1);
};
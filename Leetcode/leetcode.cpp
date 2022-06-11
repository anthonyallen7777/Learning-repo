#include <iostream>
#include<fstream>
#include <algorithm>
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        vector<vector<string>> r;

        //sort the strings individually alphabetically
        for (auto& i: strs) {
            sort(i.begin(), i.end());
        }
        //now sort the vector by strings alphabetically
        sort(strs.begin(), strs.end());
        
        //aet aet aet ant ant
        for (int i=1;i<strs.size();i++) {
            //once we hit the end of a group of string 
            //of anagrams
            if (strs[i-1] != strs[i]) {
                //cout << "LAST: "<<  strs[i-1] << '\n';
            }
            cout << strs[i] << '\n';
            if (strs[i] != strs[i-1]) {
                //cout << strs[i] << '\n';
                //make a vector to store the current group
                //vector<string> insV;
                //insV.assign(strs.begin(),strs.begin()+i);
                //r.insert(r.end(), insV);
                //strs.erase(strs.begin(),strs.begin()+i);
            }
        }

        cout << '\n';
        for (int i = 0; i < r.size(); i++) {
        for (auto it = r[i].begin(); it != r[i].end(); it++)
            cout << *it << " ";
            cout << endl;
        }

        vector<vector<string>> dummy;
        return dummy;
    }
};

int main ()
{
  Solution class1; //  aet   aet   
  vector<string> s = {"eat","tea","tan","ate","nat","bat"};
  class1.groupAnagrams(s);
};
#include <iostream>
#include<fstream>
#include <algorithm>
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    bool isAnagram(string s, string t) {
        sort(s.begin(), s.end());
        sort(t.begin(), t.end());
        if (s == t) {
            //cout << s << '\n';
            //cout << t;
            //cout << "ANAGRAM";
            return true;
        }
        //cout << s << '\n';
        //cout << t;
        //cout << "NOT AN ANAGRAM";
        return false;
    }
};

int main ()
{
  Solution class1;
  //int array
  string s = "⏷⩖⣐≔Ⓣ⏞Ⰱ∐⼈⾲⾹✠Ⅸ⫏▬⛾␕⇮♙⟃␱⛅⢯⥩◣⻵⒎⪘⣤‧⸿⫞⮅⎓␘⣝⧐⭢℗⡝⬔ⅨⓎ↉⺾⾳↟┢⯉⩰⼺⛃⌀⏆ⷶ♟◨";
  string t = "⸿⫞⮅⎓␘⣝⧐⭢℗⡝⬔ⅨⓎ↉⺾⾳↟┢⯉⩰⼺⛃⌀⏆ⷶ♟◨⏷⩖⣐≔Ⓣ⏞Ⰱ∐⼈⾲⾹✠Ⅸ⫏▬⛾␕⇮♙⟃␱⛅⢯⥩◣⻵⒎⪘⣤‧";
  class1.isAnagram(s, t);
};
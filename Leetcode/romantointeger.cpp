#include <iostream>
using namespace std;

class Solution {
public:
    int romanToInt(string s) {
        int r = 0;

        for (int i = 0; i < s.length(); i++) {
            //cout << s[i] << '\n';
            switch(s[i]) {
              case 'I':
                  if (s[i+1] == 'V') {
                    r += 4;
                    i++;
                    break;
                  } else if (s[i+1] == 'X') {
                    r += 9;
                    i++;
                    break;
                  } else {
                    r += 1;
                    break;
                  }
              case 'V':
                  r += 5;
                  break;
              case 'X':
                  if (s[i+1] == 'L') {
                    r += 40;
                    i++;
                    break;
                  } else if (s[i+1] == 'C') {
                    r += 90;
                    i++;
                    break;
                  } else {
                    r += 10;
                    break;
                  }
              case 'L':
                  r += 50;
                  break;
              case 'C':
                  if (s[i+1] == 'D') {
                    r += 400;
                    i++;
                    break;
                  } else if (s[i+1] == 'M') {
                    r += 900;
                    i++;
                    break;
                  } else {
                    r += 100;
                    break;
                  }
              case 'D':
                  r += 500;
                  break;
              case 'M':
                  r += 1000;
                  break;
            }
        }
        cout << r << '\n';
        return r;
    }


};

int main ()
{
  Solution class1;
  class1.romanToInt ("III"); //3
  class1.romanToInt ("LVIII");//58
  class1.romanToInt ("MCMXCIV");//1994
  class1.romanToInt ("DCLXXXII");//682
  class1.romanToInt ("CCCLXXI");//371
  class1.romanToInt ("DCCCLXXVI");//876
  class1.romanToInt ("CLXVII");//167
  class1.romanToInt ("DCCCXCIX");//899
  class1.romanToInt ("DCXC");//690
  class1.romanToInt ("DCXXVIII");//628
  class1.romanToInt ("CCCII");//302
  class1.romanToInt ("DCCCXXII");//822
  class1.romanToInt ("DCCCXCV");//895
}
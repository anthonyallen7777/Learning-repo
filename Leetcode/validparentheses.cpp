#include <iostream>
#include <stack>
using namespace std;

class Solution {
public:
    bool isValid(string s) {

        stack<char> c1;

        for (char& c : s) {
            switch (c) {
            case '(':
                c1.push(c);
                break;
            case '{':
                c1.push(c);
                break;
            case '[':
                c1.push(c);
                break;
            case ')':
                if (c1.empty() || c1.top() != '(') {
                    return false;
                }
                else {
                    c1.pop();
                }
                break;
            case '}':
                if (c1.empty() || c1.top() != '{') {
                    return false;
                }
                else {
                    c1.pop();
                }
                break;
            case ']':
                if (c1.empty() || c1.top() != '[') {
                    return false;
                }
                else {
                    c1.pop();
                }
                break;
            }
        }
        //if empty returns true else returns false
        return c1.empty();
    }
};

int main ()
{
    string test = "[(])";
    Solution class1;
    bool check = class1.isValid(test);

    if (check == true) {
        cout << "VALID";
    }
    else {;
    cout << "NOT VALID";
    }
};
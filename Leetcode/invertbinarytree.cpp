#include <iostream>
#include<fstream>
#include <algorithm>
#include <vector>
#include <string>

using namespace std;

//Definition for a binary tree node.
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        TreeNode* traverse = root;
        for
    }
};

int main ()
{
    Solution class1;
    vector<int> rt = {4,2,7,1,3,6,9};
    TreeNode* root = new TreeNode();

    int lvl = 0;
    for (int i = 0; i < rt.size(); i++) {
        //head
        if (i % 2 == 0) {
        }
        if (lvl)
    }
    class1.invertTree(root);
};
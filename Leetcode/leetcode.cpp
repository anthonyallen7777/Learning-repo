#include <iostream>
#include <list>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

void printList(ListNode* n)
{
    while (n != NULL) {
        cout << n->val << " ";
        n = n->next;
    }
}

class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* p1 = list1;
        ListNode* p2 = list2;
        return list1;
    }
};

int main ()
{
    ListNode* l1 = {0};
    ListNode* l2 = new ListNode();
    l2 = { 0 };
    printList(l1);
    //Solution class1;
    //class1.mergeTwoLists(l1, l2);
};
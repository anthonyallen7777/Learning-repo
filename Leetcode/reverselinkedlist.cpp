#include <iostream>
#include <string>
using namespace std;
//Definition for singly-linked list.
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
    ListNode* reverseList(ListNode* head) {
        //NULL->
        ListNode* previous = nullptr;
        //1->2->3->NULL
        ListNode* current = head;
        while (current != nullptr) {
            //cout << current->val << '\n';
            ListNode* nextVal = current->next;
            current->next = previous;
            previous = current;
            current = nextVal;
        }
        return previous;
    }
};

int main ()
{
    Solution class1;

    ListNode* list1 = NULL;
    ListNode* second = NULL;
    ListNode* third = NULL;

    list1 = new ListNode();
    second = new ListNode();
    third = new ListNode();

    list1->val = 1;
    list1->next = second;
    second->val = 2;
    second->next = third;
    third->val = 3;
    third->next = NULL;
    

    ListNode* r = class1.reverseList(list1);

    printList(r);
};
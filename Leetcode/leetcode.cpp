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

ListNode* sV;
ListNode* finL;
int r = 0;
void reverL1(ListNode* traverse, int secondListCurVal)
{
    if (traverse == NULL) {
        return;
    }
    reverL1(traverse->next, secondListCurVal);
    r += 1;
    if (secondListCurVal >= traverse->val) {
        //std::cout << secondListCurVal << std::endl;
    }
    //std::cout << traverse->val << std::endl;
}
void reverL2(ListNode* traverse, ListNode* firstList)
{
    if (firstList != NULL) {
        sV = firstList;
    }
    else {
        firstList = sV;
    }
    if (traverse == NULL) return;
    reverL2(traverse->next, firstList);
    reverL1(firstList, traverse->val);
    std::cout << r << std::endl;
    //std::cout << traverse->val << std::endl;
}

class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* p1 = list1;
        ListNode* p2 = list2;
        reverL2(p2, p1);
        return list1;
    }
};

int main ()
{
    ListNode* l1 = NULL;
    ListNode* l2 = NULL;

    l1 = new ListNode();
    l2 = new ListNode();

    l1->val = 1;
    l1->next = l2;
    l1.add(5);

    Solution class1;
    class1.mergeTwoLists(l1, l2);
};
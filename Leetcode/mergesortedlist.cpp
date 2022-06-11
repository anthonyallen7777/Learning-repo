
//Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* finalNode = new ListNode();
        ListNode* finalNodeEnd = finalNode;
        //stop when a list gets to the end
        while (list1 != NULL && list2 != NULL) {
            if (list1-> val < list2->val) {
                finalNodeEnd->next = list1;
                list1 = list1->next;
            }
            else {
                finalNodeEnd->next = list2;
                list2 = list2->next;
            }
            finalNodeEnd = finalNodeEnd->next;
        }
        //if the lists are still not empty
        //that means there is more values at the end
        //now just insert them in after the final value in the final node
        if (list1 != NULL) {
            finalNodeEnd->next = list1;
        } else if (list2 != NULL) {
            finalNodeEnd->next = list2;
        }
        return finalNode->next;
    }
};
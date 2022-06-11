'''
# Definition for singly-linked list.
class ListNode(object):
     def __init__(self, val=0, next=None):
         self.val = val
         self.next = next
class Solution(object):
    def reverseList(self, head: ListNode) -> ListNode:
        prev, current = None, head
        
        while current != None:
            nextVal = current.next
            current.next = prev
            prev = current
            current = nextVal
        return prev
'''

# Definition for singly-linked list.
class ListNode(object):
     def __init__(self, val=0, next=None):
         self.val = val
         self.next = next
class Solution(object):
    def reverseList(self, head: ListNode) -> ListNode:
        if head == None:
            return None
        
        #store the head value
        current = head
        #if we can keep going down the recursive tree
        if head.next:
            #recurse the list passing the next value
            #setting value to current
            current = self.reverseList(head.next)
            #reverse the link between next and the head
            head.next.next = head
        #if head is first node set the next value to null
        head.next = None
        #return the final head after reversing the list
        return current

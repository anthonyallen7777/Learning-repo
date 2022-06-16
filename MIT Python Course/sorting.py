import string

def bubble_sort(L):
    swap = False
    while not swap:
        swap = True
        for j in range(1, len(L)):
            if L[j-1] > L[j]:
                swap = False
                temp = L[j]
                L[j] = L[j-1]
                L[j-1] = temp
    return L

def while_loops_test():
    swap = False
    while not swap:
        swap = True
        print("RAN ANYWAY")


print(bubble_sort([7,2,0,5]))


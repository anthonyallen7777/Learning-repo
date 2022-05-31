# -*- coding: utf-8 -*-
"""
Created on Sat May 21 03:12:13 2022

@author: Chris
"""

L1 = ["Jam","Toast","Bacon","Eggs","Salad","Pancakes"]
r = len(L1)-1
def recursive(mylist,inc):
    if (inc < 0):
        return;
    print(mylist[inc])
    inc-=1
    recursive(mylist,inc)
    

#recursive(L1, r)

def mult(a, b):
    print("JUST ADDING",b,"TO a consecutively")
    if b == 1:
        return a 
    else:
        return a + mult(a, b-1)

#mult(2,5)

#factorial
# n! = n * (n-1) * (n-2) * (n-3) * ... * 1
def fact(n):
    if n == 1:
        return 1
    else:
        return n*fact(n-1)

#print(fact(4))

#tower of hanoi
def printMove(fr, to):
    print('move from',str(fr),'to',str(to))

def Towers(n, fr, to, spare):
    if n == 1:
        printMove(fr, to)
    else:
        Towers(n-1, fr, spare, to)
        Towers(1, fr, to, spare)
        Towers(n-1, spare, to, fr)

#Towers(5, 1, 2, 3)

#fibonacci
def fib(x):
    """assumes x an int >= 0
        returns Fibonacci of x"""
    if x == 0 or x == 1:
        return 1
    else:
        return fib(x-1) + fib(x-2)

#print(fib(5))

#palindrome
def isPalindrome(s):
    def toChars(s):
        s= s.lower()
        ans = ''
        for c in s:
            if c in 'abcdefghijklmnopqrstuvwxyz':
                ans = ans + c
            return ans
    
    def isPal(s):
        if len(s) <= 1:
            return True
        else:
            return s[0] == s[-1] and isPal(s[1:-1])
    
    return isPal(toChars(s))

#isPalindrome("")

my_dict = {}
grades = {'Ana':'B', 'John':'A+', 'Denise':'A', 'Katy':'A'}
grades['Denise'] = 'B'
#print(True) if 'John' in grades else print(False)
#print(grades['Ana'])
del(grades['Ana'])
#print(True) if 'Ana' in grades else print(False)
#print(grades.keys())
#print(grades.values())

def lyrics_to_frequencies(lyrics):
    myDict = {}
    for word in lyrics:
        if word in myDict:
            myDict[word] += 1
        else:
            myDict[word] = 1
    return myDict

def most_common_words(freqs):
    values = freqs.values()
    best = max(values)
    words = []
    for k in freqs:
        if freqs[k] == best:
            words.append(k)
    return (words, best)

def words_often(freqs, minTimes):
    result = []
    done = False
    while not done:
        temp = most_common_words(freqs)
        if temp[1] >= minTimes:
            result.append(temp)
            for w in temp[0]:
                del(freqs[w])
        else:
            done = True
    return result

#print(words_often(beatles, 5))


#fibonacci with a dictionary
def fib_efficient(n, d):
    if n in d:
        return d[n]
    else:
        ans = fib_efficient(n-1, d) + fib_efficient(n-2, d)
        print(ans)
        d[n] = ans
        print(d)
        return ans

d = {1:1, 2:2}
#fib_efficient(6, d)

#print(fib(34)) #11,405,773 recursive calls
print(fib_efficient(34, d)) #65 recursive calls


















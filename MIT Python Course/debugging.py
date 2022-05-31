# -*- coding: utf-8 -*-
"""
Created on Sat May 21 06:29:26 2022

@author: Chris
"""

# try:
#     a = int(input("Tell me one number: "))
#     b = int(input("Tell me another number: "))
#     print("a/b = ", a/b)
# except:
#     print("Bug in user input.")


try:
    a = int(input("Tell me one number: "))
    b = int(input("Tell me another number: "))
    print("a/b = ", a/b)
except ValueError:
    print("Could not convert to a number.")
except ZeroDivisionError:
    print("Can't divide by zero.")
except:
    print("Something went very wrong.")
# -*- coding: utf-8 -*-
"""
Created on Sat May 21 09:31:13 2022

@author: Chris
"""
#definition
# |    name/type
# |       |     class parent
# |       |         |
# v       v         v
class Coordinate(object):
    #define attributes here
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def distance(self, other):
        x_diff_sq = (self.x-other.x) **2
        y_diff_sq = (self.y-other.y) **2
        return (x_diff_sq+y_diff_sq) ** 0.5
    def __str__(self):
        return "<"+str(self.x)+","+str(self.y)+">"

c = Coordinate(3, 4)
origin = Coordinate(0, 0)
# print(c.x)
# print(origin.x)

# print(c.distance(origin))
# same thing as ^
# print(Coordinate.distance(c, origin))
# print(c)

# print(type(c))
# print(Coordinate)
# print(type(Coordinate))

# print(isinstance(c, Coordinate))

"""

__add__(self, other)     self + other
__sub__(self, other)     self - other
__eq__(self, other)      self == other
__lt__(self, other)      self < other
__len__(self)           len(self)
__str__(self)           print self

...and others
"""


class Fraction(object):
    def __init__(self, num, denom):
        assert type(num) == int and type(denom) == int
        self.num = num
        self.denom = denom
    def __str__(self):
        return str(self.num) + "/" + str(self.denom)
    def __add__(self, other):
        top = self.num*other.denom + self.denom*other.num
        bott = self.denom*other.denom
        return Fraction(top, bott)
    def __sub__(self, other):
        top = self.num*other.denom - self.denom*other.num
        bott = self.denom*other.denom
        return Fraction(top, bott)
    def __float__(self):
        return self.num/self.denom
    def inverse(self):
        return Fraction(self.denom, self.num)

a = Fraction(1, 4)
b = Fraction(3, 4)
#is a fraction object so when
# you put '+' it will call __add__ method
c = a + b
print(c)
# looks for float method and 
# there is one so it is called 
print(float(c))
print(Fraction.__float__(c))
print(float(b.inverse()))
























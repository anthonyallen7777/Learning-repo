# -*- coding: utf-8 -*-
"""
Created on Sat May 21 12:18:56 2022

@author: Chris
"""

import random

class Animal(object):
    def __init__(self, age):
        self.years = age
        self.name = None
    def get_age(self):
        return self.years
    def get_name(self):
        return self.name
    def set_age(self, newage):
        self.age = newage
    def set_name(self, newname=""):
        self.name = newname
    def __str__(self):
        return "animal:"+str(self.name)+":"+str(self.age)

myanimal = Animal(3)

#not recommended
#doesn't work if not the same as self
#myanimal.age

#this is preferred
myanimal.get_age()

#default argument used
myanimal.set_name()
print(myanimal.get_name())
#argument passed is used

myanimal.set_name("fluffy")
print(myanimal.get_name())

class Cat(Animal):
    def speak(self):
        print("meow")
    def __str__(self):
        return "cat:"+str(self.name)+":"+str(self.age)

class Person(Animal):
    def __init__(self, name, age):
        Animal.__init__(self, age) #call Animal constructor
        self.set_name(name)
        self.friends = []
    def get_friends(self):
        return self.friends
    def add_friends(self, fname):
        if fname not in self.friends:
            self.friends.append(fname)
    def speak(self):
        print("hello")
    def age_diff(self, other):
        diff = self.age - other.age
        print(abs(diff), "year difference")
    def __str__(self):
        return "person:"+str(self.name)+":"+str(self.age)

class Student(Person):
    def __init__(self, name, age, major=None):
        Person.__init__(self, name, age)
        self.major = major
    def change_major(self, major):
        self.major = major
    def speak(self):
        r = random.random()
        if r < 0.25:
            print("i have homework")
        elif 0.25 < r < 0.5:
            print("i need sleep")
        elif 0.5 <= r < 0.75:
            print ("i should eat")
        else:
            print("i am watching tv")
    def __str__(self):
        return "student:"+str(self.name)+":"+str(self.age)+":"+str(self.major)

class Rabbit(Animal):
    tag = 1 #class variable
    def __init__(self, age, parent1=None, parent2=None):
        Animal.__init__(self, age)
        self.parent1 = parent1
        self.parent2 = parent2
        self.rid = Rabbit.tag
        Rabbit.tag += 1
    def get_rid(self):
        return str(self.rid).zfill(3)
    def get_parent1(self):
        return self.parent1
    def get_parent2(self):
        return self.parent2
    def __add__(self, other):
        return Rabbit(0, self, other)
    

# -*- coding: utf-8 -*-
"""
Created on Thu May 19 02:29:11 2022

@author: Chris
"""
import random
print("We are going to find out how much you should save each month to",
      "put a down payment on your dream house")
print("\n")
annual_salary = float(input("What is your starting annual salary: "))
r_an = annual_salary
monthly_salary = annual_salary/12;
r_mon = monthly_salary
months = 36
semi_annual_raise = 0.07
invest_return = 0.04
portion_down_payment = 0.25
down_payment = 250000
current_savings = 0
epsilon = 100

portion_saved = 0.5
minumum = 0.0001
maximum = 1.0
test = 0

if (annual_salary*3 < down_payment):
    print("It is not possible for youto pay the down payment in three years.")
else:
    while (abs(current_savings - down_payment) >= 100):
        if (test!=0 and portion_saved > minumum):
            if (current_savings < down_payment-100):
                minumum = portion_saved
            else:
                maximum = portion_saved
            portion_saved = random.randint(int(minumum*10000), int(maximum*10000))/10000
        elif (test!=0 and portion_saved < maximum):
            if (current_savings > down_payment+100):
                maximum = portion_saved
            else:
                minumum = portion_saved
            portion_saved = random.randint(int(minumum*10000), int(maximum*10000))/10000
                
        
        current_savings = 0
        annual_salary = r_an
        monthly_salary = r_mon
        for x in range(37):
            if (x % 6 == 0):
                annual_salary += semi_annual_raise*annual_salary
                monthly_salary = annual_salary/12
            current_savings += ((current_savings*0.04)/12) + portion_saved*monthly_salary
            
        test += 1
        print("Current savings",current_savings)
        print("Best savings rate:",portion_saved)
        print("MIN",minumum)
        print("MAX",maximum)
        
        if (test > 50):
            print("YOU BROKE IT")
            break
    print("Best savings rate:",portion_saved)
    print("Steps in bisection search:",test)
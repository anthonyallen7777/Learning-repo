# -*- coding: utf-8 -*-
"""
Created on Thu May 19 02:29:11 2022

@author: Chris
"""

annual_salary = float(input("What is your starting annual salary: "))
"""percent"""
portion_saved = float(input("What percent of your monthly pay will you save for your dream home: "))
portion_saved = portion_saved/100
total_cost = float(input("What is the total cost of your dream home: "))
semi_annual_raise = float(input("What percent will your raise be every 6 months: "))
semi_annual_raise = semi_annual_raise/100
portion_down_payment = 0.25
current_savings = 0
monthly_salary = annual_salary/12;

months = 0

while (current_savings < (total_cost*portion_down_payment)):
    months += 1
    
    if (months % 6 == 0):
        annual_salary += semi_annual_raise*annual_salary
        monthly_salary = annual_salary/12
    current_savings += ((current_savings*0.04)/12) + portion_saved*monthly_salary
    """print(current_savings)"""

print("It will take you",months,"months to have a enough money for a down payment on your dream home")
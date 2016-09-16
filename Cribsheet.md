GCSE Computer Science Theory Cribsheet
-


#Scope
##Basics

 - Scope refers to the visibility of variables - in other words, in which parts of your program can see or use it. Normally, every variable has a **global** scope. Once defined, every part of your program can access that variable. However, it is very useful to be able to limit a variable's scope to a single function. In other words, the variable will have a limited **local**scope. This way, changes inside the function can't affect the main program in unexpected ways
 - The scope of variables can be **local** or **global**.
	- Local variables only work in the loop, procedure or class in which they are created whilst
global variables can be accessed from *any point* in a program.
 - For example:

```
OUTPUT "Here are the even numbers up to 100" 
    
FOR i <-- 1 TO 100 
     
IF i MOD 2 = 0 
     
OUTPUT i 
     
ENDIF 
     
ENDFOR 
     
OUTPUT "Finished"
```
 
The variable **i** has scope between **lines 2 and 6**.
If a programmer were to try and use the variable before line 2 or after line 6, there would be a run-time error.
 
- A variable has **global** scope if it can be accessed from anywhere in a project.
Variables with global scope are usually considered bad practice in most languages, due to the increased risk of [name collisions](https://en.wikipedia.org/wiki/Name_collision).


##Practice Questions

###June 2014
####Q1>

 
**The variable i in Figure 1 only has scope between lines 3 and 7. Explain with reference to the variable i what scope means.**
[1 mark]
 
 
####Q2>
 
#####Fig 2.

<pre><code>	   VAT = 0.20
	def calculations(amount):
		tax = (VAT/amount)
		print (tax)    
		totalCost = amount + tax
		return totalCost
	total = float(input("How much does the item cost? ")
	print (calculations(total))</code></pre>
    
#####2a 
What does scope mean?

#####2b 
What is the scope of VAT?

#####2c 
What is the scope of tax?

#####2d 
What is the scope of totalCost?

#####2e 
What is the scope of total?

#####2f 
Why would it necessary for a variable to have limited scope ?


####Answers

#####To be added


Application Testing
------------------------

## Why do we use testing?

Software testing is a vital part of software development. It is important because:

* It highlights defects and errors made during the development phase.
* It ensures that the customers can rely on the product and that they are satisfied with it.
* It ensures the quality of the product.
* It ensures the effective performance of the application or product.
* It saves time and money, in the future, correcting errors and bugs.

## Types of testing

Most testing can be broken up into two types: **unit testing** and **modular testing**.

### Unit Testing

In unit testing, individual blocks of code are tested. These might be individual functions or classes.
This type of testing is often carried out during the development phase, and the programmer would keep
detailed documentation on the tests that have been carried out. Unit testing is an excellent way of
ensuring small bugs and faults in the code are picked up early, however it does not test integration
with other parts of the program very well though.

### Modular Testing

Modular testing would test some aspect of the finished software. This might be a test on the Graphical
User Interface (GUI) or perhaps integration with a database. These tests are normally carried out by
specialist testers, who would keep detailed documentation on the tests to feedback to the developers.
Modular testing is used to give reassurance to the developers and customers that the whole application
works as intended. However, it is a fairly lengthy and complicated process.

## Trace Tables

Sometimes, when writing an algorithm, you use a **trace table** to *trace* the changes that occur to a variable throughout the program. As this method of testing is simple and can be performed *without* (!) a computer, it is favoured by exam boards to examine testing ability.

``
X <-- 1
Y <-- 2
WHILE Y < 5
    OUTPUT X
    X <-- X * Y
    Y <-- Y + 1
ENDWHILE
```

|OUTPUT|X|Y|
|------|-|-|
||1|2|
|1|2|3|
|2|5|4|
|5|20|5|

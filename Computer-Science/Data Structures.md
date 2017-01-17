Data Structures
----------------------

A data structure is a specialized format for **organizing** and **storing** data.

### Arrays vs. Lists

It is **essential** that you know the difference between an **array** and a **list**.
 - A list can contain a mixture of data types, including other data structures.
 - An array must contain all the same data types (i.e. only integers or only strings). These are usually more efficient than a list.

### Data structure operations in Python

|Data Structure|Example Values|Valid Operations|Example of Operation|
|--------------|:-------------|----------------|--------------------|
|One-Dimensional array|`a = array([1, 2, 3])`|indexing|`a[0] = 1`|
|One-Dimensional list|`a = [1, True, 'a']`|indexing|`a[0] = 1`|
||-->|appending|`a.append(456.1)`|
||-->|length|`len(a)`|
|Two-Dimensional array|`a = array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])`|indexing|`a[0] = 1`|
|Two-Dimensional list|`a = [[1, '2', '3'], [4, 5, '6'], ['7', 8, '9']]`|indexing|`a[0] = 1`|
||-->|appending|`a.append([10, 11, 12])`|
||-->|length|`len(a)`|
|Dictionary|`a = {'key': 'value'}`|indexing|`a['other key] = 'new value`|
|String|`a = 'string'`|length|`len(a)`|
||-->|position|`a[2]`|
||-->|substring|`a[1:5]`]|
||-->|concatenation|`a + ' string`|
||-->|String to Integer|`int('345')`|
||-->|String to Float|`float('123.45')`|
||-->|Integer to String|`str(345)`|
||-->|Float to String|`str(123.45)`|

### Classes in Python

A **class** is a quasi-**template** for creating **objects**. Consider this example:

```python
class Human():
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def have_birthday(self):
        self.age += 1

my_human = Human('Jacob', 4)
```

This is a template for creating a human. We can use this `Human` template in order to create **instances** of the human with their own properties (so they can have their own names and ages). For the exam you do not need to understand the four main OOP class concepts (inheritance, etc.), neither do you need to know the syntax for defining, altering and creating an instance of a class, but you *do* need to know about classes as a data structure.

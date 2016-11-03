Database Concepts
-----------------------

## What is a database?

A **database** is a method of storing data in tables. The data contained within them is quick and easy to sort and search. Most databases will end with the *.db* extension.

## Flat-file databases

|Name|Pets|Key|
|:---|:---|:--|
|Bob|Cat|PR-001|
|Bab|Dog|PR-002|
|Bib|Elephant|PR-003|

Above, we have a **table** - *a two-dimensional structure used to store data*. Each 'box' in the table is called a **field**, while each row tends to be called a **record**. Each **column** in our table must have a title (Name, Pets, Key).

To prevent replication of data, i.e. to prevent Bob from appearing twice in the table, and to build inter-table relationships each record needs a unique identifier - we call this a **primary key**. No two records can share a primary key.

There is a major problem with flat-file databases: say that Bob decided that he was going to get a pet hippopotamus for Christmas. However, there is no space on Bob's record to add another pet. We could of course add another column to the table, however our table would get rather large if Bib went and bought a farm. The solution to this is the **relational database**

## Relational databases

To take the same example from the previous section, we could solve the problem by having two tables: one table that links each name to a key, and another table that links the keys to pets. However, in the second table, we do not use the primary key from the first table as the primary key, as this allows us to use it multiple times:

Table: PEOPLE

|Name|Key|
|:---|:--|
|Bob|PR-001|
|Bab|PR-002|
|Bib|PR-003|

Table: PETS

|Person|Pet|Key|
|:-----|:--|:--|
|PR-001|Cat|PT-001|
|PR-001|Hippopotamus|PT-002|
|PR-002|Dog|PT-003|
|PR-003|Elephant|PT-004|

Note that our primary (unique) key in PETS is PT-XXX. The Person column is called our **foreign key** as this links our two tables. For example, if we wanted to find all of Bob's pets, we would look up Bob in PEOPLE to find his key, then we would look for that in PETS to find all of his pets.

N.B. In SQL this would be:
``` sql
SELECT PEOPLE.Name, PETS.Pet
	FROM PEOPLE, PETS
	WHERE PEOPLE.Name = 'Bob'
	AND PEOPLE.Key = PETS.Person
```

This would return:

|PEOPLE.Name|PETS.Pet|
|:----------|:-------|
|Bob|Cat|
|Bob|Hippopotamus|

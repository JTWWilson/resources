SQL Queries
---------------

### Query Language vs QBE

Traditionally, database queries are made using a **query language** such as SQL. However, increasingly businesses are using QBE (Query By Example) setups in order to view and edit data. An example of a QBE application is Microsoft Access.

In the exam, you will only be asked to write queries in SQL (under no circumstance will you be asked to use QBE). Not only do you have to be able to write your own queries, but you must be able to interpret pre-written queries and write the output from those queries.

There are five different core statements that could be used: `CREATE`, `INSERT`, `SELECT`, `UPDATE` and `DELETE`, along with various other commands that can be used within these.

In all the examples below, the following table will be used:

|Key|Film|Year|Director|RTScore|
|---|:--:|:--:|:------:|:-----:|
|001|The Way of the Dragon|1972|Bruce Lee|100|
|002|Lone Wolf McQuade|1983|Steve Carver|67|
|003|The Delta Force|1986|Menahem Golan|20|
|004|The Expendables 2|2012|Simon West|65|

### SELECT

`SELECT` is used in order to retrieve data from a table.

> Get the name of every film with a Rotten Tomatoes score of more than 50

```sql
SELECT *
	FROM Films
	WHERE RTScore > 50;
```

> Get the year of every film NOT directed by Bruce Lee in ascending order

```sql
SELECT Year
	FROM Films
	WHERE Director <> 'Bruce Lee'
	ORDER BY Year ASC;
```

### CREATE

`CREATE` is used to create an empty table.

> Create the table above

```sql
CREATE TABLE Films(
	Key INT IDENTITY (1,1) NOT NULL
	Film VARCHAR (30) NOT NULL,
	Year INT NULL,
	Director VARCHAR (30) NULL,
	RTScore INT NULL);
```

A few points about the above statement:
  1. `VARCHAR` refers to a string of variable length.
  2. `INT` refers to any integer (whole number) value.
  3. If a line ends with `NOT NULL`, it is a compulsory field. If it ends with `NULL` then it is an optional field.
  4. `IDENTITY` is used to identify the primary key for the table. It can be given a start value and an increment.

### INSERT

`INSERT` is used to add a new record to a table. In the brackets, the fields that are to be edited are listed. Note that you do not need to fill the primary key field yourself - it is filled automatically.

> Add a record to the table with the film Frozen.

```sql
INSERT INTO Films(Film,
		  Year,
		  Director,
		  RTScore)
	VALUES('Frozen',
	       2013,
	       'Mr Delport',
	       89);
```

### UPDATE

`UPDATE` is used in order to amend fields in a record.

> Alter the director of Frozen to be 'Jennifer Lee'

```sql
UPDATE Films
	SET Director = 'Jennifer Lee'
	WHERE Film = 'Frozen';
```

### DELETE

`DELETE` is used to delete whole records from the table

> Delete Frozen from the table as it does not feature Chuck Norris

```sql
DELETE FROM Films
	WHERE Film = 'Frozen';
```


Algorithms
---------

###What is an Algorithm?

#####Algorithms are computational solutions that always finish and return an answer.    

For example, if we had a bag filled with scrabble tiles, and we wanted to find out how many letters of each type there were:


	Set count for each letter to 0
	Until the bag is empty
	    Take out a tile
	    Look at the letter
	    Add one to that letter's count



- We usually use *pseudocode* to write algorithms - "*an informal description of the operations of a computer program or other algorithm*". 
- Pseudocode is useful as it can be read by any programmer, regardless of their language specialism.
- It uses the structural conventions of a normal programming language, but is intended *for human reading* rather than machine reading. 
- Pseudocode typically omits details that are essential for machine understanding of the algorithm, such as variable declarations, system-specific code and some subroutines. 
- It is augmented with natural language description details to add further explanation to the code.
- The purpose of using pseudocode is that it is easier for people to understand than conventional programming language code, and that it is an efficient and objective description of the key principles of an algorithm. 
- In reality there is no formal syntax for pseudocode and computer scientists will use whatever notation they feel is best understood by the reader. 
- Exam boards however don't seem to understand this concept, and insist on a formal syntax. AQA's pseudocode syntax is relatively basic and is detailed [here](http://filestore.aqa.org.uk/subjects/AQA-GCSE-COMPSCI-W-TRB-PSEU.PDF)
- The AQA Specification says that you should be able to: 
 - Understand that algorithms are computational solutions that always finish and return an answer
 - Interpret simple algorithms to deduce their function be able to create algorithms to solve simple problems 
 - Detect and correct errors in simple algorithms.


###Sorting Algorithms

- Algorithms designed to order a range of numbers from smallest to largest.
- These are very commonly used example algorithms and are helpful to look at before exams:
- For visual demonstrations of each of the following algorithms, see [this site](https://visualgo.net/sorting), which steps through each line of pseudocode. 

####Bubble Sort Algorithm

	
	REPEAT
	  swapped <- false
	  FOR i <- 1 TO indexOfLastUnsortedElement
	    IF leftElement > rightElement
	      swap(leftElement, rightElement)
	      swapped <- true
	    ENDIF
	UNTIL swapped IS false

- This algorithm sorts a list of numbers by comparing each element to its next in line and then swapping if the next element is smaller.

###Select Sort Algorithm

	WHILE (numOfUnsortedElements - 1) != 0
	  set the first unsorted element as the minimum
	  FOR element IN unsorted elements
	    if element < currentMinimum
          element <- currentMinimum
	  swap minimum with first unsorted position
	ENDWHILE

- This algorithm sorts by finding the smallest item in the list and putting that first.

###Insert Sort Algorithm

	mark first element as sorted
	FOR element in unsorted elements
	  'extract' the element
	  FOR i = lastSortedIndex TO 0
	    IF currentSortedElement > extractedElement THEN
	      move sorted element to the right by 1
	    ELSE
	     insert extracted element
	    ENDIF
	  ENDFOR
	ENDFOR

- This algorithm sorts by taking each element and comparing them to all those to the left of it until it finds an element which is smaller than itself; it then swaps with that element.

## Examples

### Example 2

Write an algorithm using pseudocode or a flowchart that will calculate if a person has a healthy weight. The algorithm must:

 - Ask the user for their mass in kilograms.
 - Ask the user for their height in metres.
 - Ensure that both values are above 0
 - Divide the mass by the height squared.
 - If the BMI is between 18.5 and 25, it should report that they are of a healthy weight, otherwise it should report that they are underweight (lower) or overweight higher)

#### Solutions
``` pseudocode
user_mass <- USERINPUT
user_height <- USERINPUT

WHILE user_mass <= 0 AND user_height <= 0
  OUTPUT "height and mass must be >0"
  user_mass <- USERINPUT
  user_height <- USERINPUT
ENDWHILE

bmi <- user_mass / (user_height ^ 2)

IF bmi < 25 AND bmi > 18.5 THEN
  OUTPUT "healthy weight"
ELSEIF bmi <= 18.5 THEN
  OUTPUT "underweight"
ELSE
  OUTPUT "overweight"
ENDIF
```

### Example 3



Write an algorithm using pseudocode or a flowchart that will calculate the resistance of a resistor. The algorithm must:

 - Ask the user for the colours of the first three bands on the resistor.
 - If they don't enter a black, brown ,red, orange, yellow, green, blue, violet, grey or white it should ask them to enter a colour again.
 - The first band should indicate the first digit of the resistance, with black being 0 up to white being 9.
 - The second band should indicate the second digit of the resistance, with black being 0 up to white being 9.
 - The third band should indicate the number of 0s to be added to the end of the first two digits, with black being 0 up to 9 being white.
 - The resistance should be reported back to the user.

#### Solutions

``` pseudocode
colours <- ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

REPEAT
  band_1 <- USERINPUT
  band_2 <- USERINPUT
  band_3 <- USERINPUT
UNTIL band_1 IN colours AND band_1 IN colours AND band_1 IN colours

counter = 1
resistance = 0
WHILE counter <= 3
  IF counter = 1 THEN
    FOR band_count <- 0 to 9
      IF colours[band_count] = band_1 THEN
        resistance = resistance + band_count
        BREAK
  ELSEIF counter = 2 THEN
    FOR band_count <- 0 to 9
      IF colours[band_count] = band_2 THEN
        resistance = resistance + (band_count * 10)
        BREAK
  ELSE
    FOR band_count <- 0 to 9
      IF colours[band_count] = band_3 THEN
        resistance = resistance * (10 ^ band_count)
        BREAK
  ENDIF
ENDWHILE

OUTPUT resistance
```

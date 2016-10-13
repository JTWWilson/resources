
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

- This algorithm sorts by taking each element and comparing them to all those to the left of it until it finds an element which is smaller than itself; it 

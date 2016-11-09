Control Flow
----------------

## What is control flow used for?

Programs and algorithms alike use **control flow** to make decisions about the order in which to do things. There are three ways of doing this: **sequence**, **selection** and **iteration**.

### Sequence

Any basic algorithm uses sequences abundantly. This runs commands one after another, step by step. For example, if I were to be making a cup of tea:

``` pseudocode
Boil kettle
Pour boiling water into mug
Add teabag
Add sugar
Add milk
Remove teabag
Drink tea
```

Of course, the person for whom we are making this cup of tea may not want sugar in their tea. That's where we can use selection.

### Selection

Selection allows us to make decisions in our code. The most common type is the IF... THEN... structure - also known as a **conditional**. In our tea example, this could look like this:

``` pseudocode
Boil kettle
Pour boiling water into mug
Add teabag
IF sugar is wanted THEN
  Add sugar
Add milk
Remove teabag
Drink tea
```

### Iteration

Of course, we may have to make cups of tea for multiple people. We can use iteration for this purpose. This involves doing a certain thing or set of things until a certain condition is met. For example:

``` pseudocode
REPEAT
  Boil kettle
  Pour boiling water into mug
  Add teabag
  IF sugar wanted THEN
    Add sugar
  Add milk
  Remove teabag
UNTIL no more tea is needed
```

The example above uses the AQA REPEAT... UNTIL... syntax,  however the same could be yielded with a WHILE loop.

#### Differentiating between the 5 types of loop

There are 5 main types of iterating loops, each one working slightly differently:
 - A *FOR...* loop runs for the number of times specified in the loop.
 - A *WHILE...* loop runs indefinitely as long as the specified condition is met. If, when the loop is reached, the condition is already met, the code in the loop is not run at all.
 - A *DO... WHILE...* loop runs indefinitely until the specified condition is met. The code in the loop is run at least once as the condition is not checked until the end of each 'pass'.
 - A *REPEAT... UNTIL...* loop runs indefinitely until the specified condition is met. The code in the loop is run at least once as the condition is not checked until the end of each 'pass'.
 - An *infinite* loop will run forever. This can be intentional, especially when checking user input, however is a common source of logical errors in code. Note that these cannot occur in *FOR...* loops.

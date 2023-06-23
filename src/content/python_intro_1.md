---
slug: "python-intro"
date: "2023-06-11"
title: "Introduction to the Python Language"
summary: "Learn the foundations of the Python programming language!"
featuredImage: "../images/intro_to_python/landing.jpg"
featured: True
author: Sam Ball
---

Welcome to your first steps into the world of Python programming! Python, often
referred to as the "Swiss Army knife" of programming languages is a great place
to start learning how to code as it has a relatively steady learning curve, but
is still heavily used in industry for real world applications - particularly in
the world of AI and data analysis!

Today, we'll learn the fundamentals of Python, and use it to create generative
art using *strange attractors* as in the case above. Don't worry if they seem
complex - they're actually quite straightforward to create as some clever maths
does the heavy lifting for us!

## What is Python?

Python is a programming language; which is in turn a way computers take
instructions from us, interpret them and complete the tasks we give them. Python
is an *object orientated langauge*, or *OOP*, which means almost everything in
Python is defined as an *object*. For now - we can just think of objects as bits
of information with specific properties.

To get started with Python, I recommend using
[Google's Colab notebooks](https://colab.research.google.com/). This is a free
resource Google provides to allow us to code Python in your web browser without
installing Python on your computer - that way we can focus on learning the
important bits without getting bogged down in tech support!

When you open Google Colab, you'll be greeted with a number of options - you'll
want to ignore all these and click the "New notebook" button in the bottom right
of the panel that comes up:

You'll then be taken to an empty notebook - enter the following line of code
below and press `SHIFT` + `ENTER` to run the cell:

```python
print("Hello world!")
```

You should see the words `Hello world!` come up below your code -
congratulations! You've just written your first line of code!

## What did we just do?

There are two parts of the code we've just run:

* The `print()` function
* The text `"Hello world!"`

*Functions* are bits of code that take a number of inputs (or *arguments*), do
something with them, then output something. Eventually we'll look at ways we can
create out own functions - but for now, just know that what the `print()`
function does is take whatever we put in the input and show us what it is.

The text we put into the function is called a *string* - strings are any bit of
text, like words, sentences or single letters. For Python to know we are talking
about text - we *must* surround the text with speech marks or apostrophies (`""`
or `''`) - otherwise Python doesn't know what we mean!

So this piece of code takes our text and shows it to us. Not very helpful yet!

## Getting Python to Remember things

One of the key first concepts in Python is the idea of *variables*. Say you have
a very large piece of text - for example a whole book - and you don't want to
write it out each time. We can store anything in Python to a *variable* and use
it later - for example look at the following code:

```python
a = "I am a very long piece of text..."
print(a)
```

Here we save the string into a variable `a` and print it out.

It's important to know that internally, variables are just the object they refer
to - whenever Python *sees* the variable `a`, it *thinks* of the string it's
associated with.

We can assign anything to a variable - for example numbers:

```python
num_apples = 4
num_oranges = 6
```

*Note - you can name variables almost anything - so give them descriptive
names!*

We can then create a new variable based on the values of the previous two
variables:

```python
num_fruits = num_apples + num_oranges
print(num_fruits)
```

Remember that whenever Python sees the `num_apples` variable - it internally
replaces it with the current value of what is stored within.

So far we have seen two different *types* of data - numbers and text. To check
what type an object is - we can use the `type` function:

```python
print(type(num_fruits))
```

Notice how we to use the `print()` function around the `type()` function to
actually show us the type - this isn't strictly needed but good practice for
reasons we'll see when looking at functions in more detail!

There are a huge variety of types in Python, and we can actually define our own
later - but these types tell Python what an object is and what it can do. For
example, take addition; for numbers, it works exactly how we'd expect:

```python
print( 3 + 5 )
```

We should get `8` - which is perfectly expected!

What about if we try and add two strings?

```python
print("Hello " + "World!")
```

We'll find that Python just joins these strings together!

## Objects within Objects

An important type to be aware of in Python is the `list`, which is an object
that holds other objects. Lists can contain any number of types, and are handy
for storing a number of objects in a single entity that we can access later.
For example, take this list:

```python
my_list = [1, 2, "three", 4.5, 5]
```

This list has 5 elements - 4 numbers and a string - which we can count using the
`len()` function (to return the *length*):

```python
print(len(my_list))
```

If we want to retrieve objects out of our list, we use a process called
*indexing*:

```python
print(my_list[3])
```

This is a bit confusing - why do we get the number `4.5` and not `"three"`? Well
Python starts counting from 0 - this is a bit odd but will start to make sense
the more you use it.

## Importing Libraries

Python comes with a load of built in functions and objects, but sometimes we
want to do more complex tasks that might take us days to code ourselves. This is
where *libraries* get involved - which are other people's code published in
packages that we can use on demand to solve specific tasks. These tasks range
from building complex deep learning AI models using `tensorflow` to controlling
your mouse and keyboard with `pyautogui`; but today we'll be using the
`matplotlib` library to create some images.

To import a library, we use the following code:

```python
import matplotlib
```

Now if we want to use any of the `matplotlib` functions we would call them as
`matplotlib.myfunction()` - however this is a bit long, and most the functions
we'll ever want to use are under the `matplotlib.pyplot` sublibrary; so it's
common to import the library under a name using the command

```python
import matplotlib.pyplot as plt
```

Now whenever we want make a change to our plot we can use the command
`plt.scatter()` instead of `matplotlib.pyplot.scatter()` - much easier!

Now for example, we can use the following code to create a small graph of square
numbers:

```python
x = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
y = [25, 16, 9, 4, 1, 0, 1, 4, 9, 16, 25]

plt.scatter(x, y)
plt.show()
```

`plt.show()` is the `matplotlib` equivalent to `print` in that it shows us
whatever the current plot is.

We should see a little image come up with a series of points in the shape of a
curve; this is going to be the basis of making the images above!

## Strange Attractors

Now let's take a bit of a detour into the world of *strange attractors* - these
are sets of mathematical equations that create interesting, chaotic patterns
based on some chosen numbers. Perhaps the most straightforward attractor is the
Clifford attractor - if we take a point `(x, y)`, we get the next position `(v,
w)` by using the formula:

```
v = sin(ay) + c * cos(ax)
w = sin(bx) + d * cos(by)
```

Where `a, b, c, d` are chosen by us. We can then repeat this process thousands
of times and see what we get!

## Loops

We *could* use the following code to get each new value for our strange attractor:

```python
x_1 = 0
y_1 = 0

x_2 = sin(a * y_1) + c * cos(a * x_1)
y_2 = sin(b * x_1) + d * cos(b * y_1)

x_3 = sin(a * y_2) + c * cos(a * x_2)
y_3 = sin(b * x_2) + d * cos(b * y_2)

...
```

However I think you'd soon go mad! Luckily, doing something repeatedly using
Python is fairly straightforward using a loop. Loops allow Python to perform an
action over and over again, stopping when something happens. One type of loop is
a `for` loop, where an action is carried out for each item in a list. For
example, the code:

```python
for value in ["one", "two", "three"]:
    print(value)
```

Will print the values `"one"`, `"two"` and `"three"` in turn.

Some important things about a for loop:

* The `for` keyword defines the start of a for loop
* Here, the `value` variable is a "dummy variable" that tells Python what do
  with each element in the list - Python runs through the loop code each time
  replacing the dummy variable with the corresponding value for that iteration
* The horizontal indent for the `print()` function tells Python that the code is
  included in the loop. Once the code returns to no indentation, the code will
  run seperately to the for loop only once it has completed.

It's easiest to understand how loops work by looking through an example - and
now we have everything we need to make some cool pictures with Python; so let's
take a look!

## Putting It All Together

The code used to make strange attractor images is fairly short - it's only a few
lines! Let's work through it and see what we're doing. First, let's import the
stuff we need.

```python
import matplotlib.pyplot as plt
from math import sin, cos
```

Now let's set some initial values:

```python
x = 0
y = 0
a = -1.1
b = -1.2
c = -1.3
d = -1.4
```

These numbers are what changes the shape of our output - you can set this to
whatever you want!

Now for the harder part - we're going to set up 2 lists to track our `x` and `y`
values.

```python
x_list = [x]
y_list = [y]
```

Now we write a loop that calculates the new values of x and y, adds them to the
list, then overwrites the old values of x and y with the new ones. This is
the real magic of our code, so we'll go through it step by step!

```python
for i in range(100000):
    new_x = sin(a * y) + c * cos(a * x)
    new_y = sin(b * x) + d * cos(b * y)

    x_list = x_list + [new_x]
    y_list = y_list + [new_y]

    x = new_x
    y = new_y
```

So each loop, in the first two lines we calculate the new values of x and y, and
store them in the variables `new_x` and `new_y`.

In the middle two lines, we add these new values to the list using a little
shortcut with lists - if you add two lists together, it simply joins them; so
`[1, 2, 3] + [4, 5, 6]  = [1, 2, 3, 4, 5, 6]`.

In the final two lines, we overwrite the values of `x` and `y` with their new
values, so that when the for loop runs again we'll be using these new values to
calculate the *new* new values!

If you `print(x_list)` you'll see the list is now full with 100,000 numbers, and
the same with the `y_list`. Now to plot them!


```python
plt.scatter(x_list, y_list, alpha=0.1, s=1, c='black')
plt.axis('off')
plt.show()
```

These 3 lines are doing a lot under the hood, but we don't really need to worry
about that. The important parts are:
* We add the `alpha=0.1` input to scatter to make the points very transparent
* We add the `s=1` to make them small
* We add `c='black'` to make them black
* `plt.axis('off')` hides the axes

If you run all that code together, you'll find that you should get a cool
looking image!

Try changing the initial values of `x` and `y` and the values of `a, b, c, d`
and see what you get - very small changes in these numbers can result in very
large changes in the final image, so play around with it!

Also have a play with the colors and options for the plot - you'll find that you
can make some interesting looking images by setting the color to `range(100001)`
for example (the range has to be the same length as the number of points in the
lists).

In the next activity we'll look at some ways of improving our code by creating
our own functions and types - making our lives easier when incorporating other
algorithms.



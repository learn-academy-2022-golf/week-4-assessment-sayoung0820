# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer:

Object oriented programming is a programming model that helps break down large programming projects, which makes it best for collaborating. Also known as OOP, it allows programmers the ability to store data that can be changed or updated without affecting the whole code. OOP is object based meaning it can contains instances of classes.

Researched answer:

Object oriented programming is a programming model that was created to offset the difficulty programmers were having with working on large software systems. Programmers use OOP to create containers for data that can be manipulated wihtout affecting the entire program. With OOP, programmers can section and delegate specific areas of the code to specific programmers to work on individually making it the most popular and widely used programming model. It relies on the concept of classes and object, meaning it uses reusable pieces of code called classes, to then create individual instances of objects. Within these classes there are functions, referred to a methods in OOP, that can only be used with objects of that type. The functions are defined within the class, then perform some action on the object. All of these features make OOP faster and easier to execute by providing a clear readable and reusable structure for the program allowing the code to be easier to modify, debug, and maintain. 

2. What is the difference between a Float and an Integer in Ruby?

Your answer:

A float is a number with a decimal or a remainder, while an integer is a whole number. Numbers without decimals in Ruby are usually automatically returned as integers.

Researched answer:

A float in Ruby represents a real number while an integer represents whole numbers. Both can be positive, negative, or 0. When using integers, Ruby assumes the user wants a rounded value, so it will round it to the nearest whole number. This requires converting integers to floats or decimals, to get the float data type, and get the return of the whole more accurate number. This makes floats better to use when performing calculations involving value. 

3. Ruby has an implicit return. What does that mean?

Your answer:

Implicit return in Ruby means that if the user doesn't specify or call on the return, then Ruby will automatically return the last line in the method. This means the last line before the last end keyword will be returned which makes the code more aesthetically pleasing and neater. 

Researched answer:

In Ruby, an implicit return is the final statement inside the method found before the end keyword. It means the return is automatically implied because there is no return value specified in the last line of the method. When this happens, Ruby will return the last evaluated expression, or the value of the last tine of a method even without being told to do so. This eliminates the need to write "return"  on most methods and improves the readability and writing of the code. However, using the return keyword is useful if you want to return a value from a method that isn't the final statement.

4. What is a block in Ruby?

Your answer:

A block in Ruby is a block of code used in functions. Ruby blocks are usually defined with the keywords, do and end, and can have multiple arguments. The arguments are separated by pipes. Blocks in Ruby are enclosed in curly braces and to invoke the block, you use the name of the block within the function.

Researched answer:

A block in Ruby is an anonoymous funtion that looks similar to a method, except it does not belong to an object and does not require a name. It contains a chunk of code that is always enclosed in braces with do-end statements and accept arguments to return as values. Blocks are invoked with an anonoymous function which requires passing through or calling on the function to get the desired return value. 

1. How do you extract a value in a Ruby hash?

Your answer:

To pull out the values in a Ruby hash, we would need to first access or reference the key. You do this by printing the Ruby hash name, followed by the key name enclosed in square brackets with a colon before the name.

Researched answer:

There seems to be several ways to extract a value in a Ruby Hash. The first is to log the name of the hash with the matching key for the value you want to extract or look at. Next, you can print the Ruby hash name, followed by the key name enclosed in square brackets with a colon before the key name. Lastly, we can also use the .extract method. With this method, a user can use the .extract method on the hash name, followed by the key name, then followed by .values, followed by the hash symbol and the value name.

## Looking Ahead: Terms for Next Week

1. Class Inheritance:

Class inheritance allows classes to have relationships with other classes. This gives classes the ability to share behaviors making the code more efficient.

2. RSpec:

RSpec is a unit test framework used to describe the behavior of objects in the Ruby programming language.

3. CRUD:

CRUD stands for Create, Read, Update, and Delete data in a database. It automatically allows an application to read and manipulate data stored within tables

4. Test-driven development:

TDD consists of breaking the code into tests and breaking the big problem into smaller problems. This allow for testing, then refactoring as needed.

5. HTTP:

Hyper Text Transfer Protocol is the communications protocol usedto connect to web servers on the internet or on a local network.

# Introduction to Programming

## Life Cycle of Problem to Code

* Problem Identification

Solving problems through programming begins with identifying and understanding the problem at hand.

* Algorith Designing

Algorithms are step-by-step instructions to solve a problem.

Algorithms help break down complex problems into smaller, manageable steps.

* Code Writing

Select an appropriate programming language based on problem requirements.

Convert the algorithm into code using programming constructs and syntax.

* Testing and Debugging

Test the code to ensure correctness and functionality.

Introduce unit testing, integration testing, and system testing.

* Deployment and Maintenance

Package, install and configure the program.

Use version control systems and proper documentation for maintenance and updates.

# Problem solving using Algorithms

To solve a problem using programming, the initial steps involve understanding the problem and creating a structured solution using an algorithm.

Let's take an example to further understand this concept. Imagine you have three numbers, and your goal is to write a code that automatically identifies the maximum or largest number among them.

An algorithm is a set of step-by-step instructions designed to solve a specific problem or achieve a task. Here is the algorithm for the problem statement "Finding the Maximum Number".

1. Start
2. Read three numbers : num1,num2,num3
3. If num1 is greater than num2 and num1 is greater than num3, then num1 is the maximum number.
4. If num2 is greater than num1 and num2 is greater than num3, then num2 is the maximum number.
5. If num3 is greater than num1 and num3 is greater than num2, then num3 is the maximum number.
6. Print the maximum number.
7. Stop.

A flowchart is a visual representation of a process or algorithm, using various symbols and arrows to illustrate the sequence of steps and decision points.
A flowchart is a graphical representation of the steps and decision-making process in a program. It helps programmers and other stakeholders visualize the flow of program execution and understand the logic.

A Pseudo code is a simplified and informal programming language-like description of an algoritm, used to outline the logic and structure of a program befor e wirting actual code.
Pseudo code is not a specific programming language but a technique to represent algorithms using simplified and human-readable language. It helps in planning and designing solutions before actual coding.

Machine language is a low-level programming language that is understood by computers directly. It uses binary digits (0's and 1's) to represent instructions and data.

Programming involves creating a set of instructions that a computer can follow to perform specific tasks or solve problems.

High-level programming languages  are designed to be easily understood by humans. They use keywords, symbols, and structures that resemble natural language, making it simpler for programmer to write and read code.

## Selecting an Optimal Programming Language

Selecting the right programming language is a critical step in code development Developers take various factors into account when choosing the optimal programming language for their solution. Some of these factors include :

* Type of application being developed
* Complexity of the application
* Maintenance requirements
* Scalability and Performance
* Security

## Classification of Programming Languages

Each programming language possesses unique features that make it suitable for specific application development. Now, look into the two main classes of programming languages.

* Low-Level programming Languages
A programming language can be called low-level when its architecture is closest to the machine or assembly language.
Low-Level programming languages have an architecture that cloely resembles machine or assembly language, making them less user-friendly for writing code.

* High-Level programming Languages
A programming language can be called high-level when its architecture is user-friendly and memory efficient.
High-Level programming languages are user-friendly for wirting codes as they are not closely related to machine or assembly language in terms of their architecture.


| | Low Level Programming Language | High Level Programming Language |
| :- | :- | :- |
| Machine Friendly | Yes, low level languages are machine friendly. | High-level languages, are not so machine-friendly. |
| Memory Efficiency | High memory efficient in terms of memory usage but difficult to understand without an ssembler. | They are less memory efficient but is easy for a human to understand. |
| Usage | Not widely used anymore as they are not human friendly. | Widely used as it is easier to write, understand, maintain, and debug codes in these languages. |
| Ease of Usage | Multiple lines of codes has to be written to accomplish a simple task. | Can accomplish a substantial task with a simple statement. |
| Example | Machine code and assembly languages. | Most popular programming languages in use today are considered high-level languages. Example include : Java, JavaScript, Pyton. |

Low-level and high-level, programming languages are further classified into five categories based on their features.  Some languages may fall under more than one category.

1. Procedural Programming Languages :
   A procedural languages follows a sequence of statements or commands to achieve the desired output. Each series of steps is referred to as a porcedure, and a program written in such languages will contain one or more procedures.
   Comman Examples include :
   * C and C++
   * Java
   * Pascal
   * Basic
  
2. Functional Programming Languages :
   Functional languages prioritize the output of mathematical functions and evaluations, instead of focusing on the execution. of statements. Each function, which is a reusable module of code, performs a specific task and returns a result. The result obtained from a function depends ont eh input data provided.
   Some popular funcitonal programming languages include :
   * Scala
   * Erlang
   * Haskell
   * Elixir
   * F#

3. Scripting Languages :
   Scripting languages enable programmers to automate repetitive tasks, handle dynamic web content, and support processes in larger applicaitons.
   Some common scripting languages include :
   * PHP
   * Ruby
   * Python
   * Bash
   * Perl
   * Node.js

4. Logic Programming Languages :
   Unlike traditional programming languages that instruct computers on what to do, a logic programming language expresses a series of facts and rules to guide the computer in making decisions.
   Some examples of logic languages include :
   * Prolog
   * Absys
   * Datalong
   * Alma-O

5. Object Oriented Programming Languages :
   This type of language treats a program as a collection of objects that consist of data and program elements, referred to as sttributes and methods. Objects can be reused within the same progrm or in other programs, making it  a favored language type for complex programs due to the ease of code reuse and scalability.
   Some common object-oriented programming (OOP) languages include :
   * Java
   * Python
   * PHP
   * C++
   * Ruby

   

## Object Oriented Programming (OOP) Language

* Object-Oriented Programming (OOP) is like building with LEGO blocks. Each object that has its own unique features (attributes) and things it can do (methods).
* Eg : A car object can have attributes like color and speed, and methods like start() and stop(). OOP allows objects to inherit traits from other objects, like how a sports car inherits traits from a car.
* This makes coding more flexible and efficient, allowing developers to create complex programs by combining and reusing objects.

## Introduction to Java

Java was initially developed by Sun Microsystems and later acquired by Oracle in 2010. It is an object-oriented and general-purpose programming language.

* It is utilized for creating software applications that can run on various platforms, including mobile devices, desktop computers, and servers.
* Java is known for being mahcine-independent, meaning programs written in Java can be executed on different systems without requiring major modificaitons.
* It is often referred to as a 'Write once, run anywhere!' programming language.


### Components of Java Development Kit (JDK)

The JDK comprises essential tools for developing and testing programs in the Java programming language on the Java platform.

* JDK
  is a software development environment specifically designed for creating Java applications and applets.
  It encompasses essential components such as the Java Runtime Environmnet (JRE), as well as tools like :
  * Interpreter / loader (Java)
  * Compiler (javac)
  * Archiver (jar)
  * Documentation generator (Javadoc)
  * Additional utilities used in Java development
       * JRE (Java Runtime Environment)
         JRE or Java RTE, is a package that includes the essential components for executing a Java application. It comprises the Java Virtual Machine (JVM), core classes, and supporting files.
         The JRE is specifically designed for end-users who wish to run Java programs without the need for development It provides the necessary environment to run Java applications on their machines.
         * JVM
           is a crucial component found within bothe the JDK and JRE. IT is responsible for executing Java programs line by line, making it an interpreter.
           When you run a Java program using either the JRE or JDK, it is processed by the JVM. The JVM acts as a runtime environment, interpreting and executing the Java code.
           
#### Components of JDK
* Deployment technologies : These include deployment, Java Web Start, and Java Plug-in.
* User interface toolkits : This encompasses Abstract Window Toolkit (AWT), Swing, Java 2D, Accessibility, Image I/O, Print Service, Sound, drag and drop (DnD), and input mehtods.
* Integration libraires : This comprises Interface Definition Language (IDL), Java Database Connectivity (JDBC), Java Naming and Directory Interface (JNDI), Remote Method Invocation (RMI), Remote Method Invocation Over Internet Inter-ORB Protocaol (RMI-IIOP(, and scripting.
* Other base libraries : These consist of interantional support, input/output (I/O), extension mechanism, Beans, Java Management Extensions (JMX), Java Ntive Interface (JNI), Math, Networking, Override Mechanism, Security, Serialization, and Java for XML Processing (XML JAXP).
* Lang and util base libraries : This includes lang and util, management, versioning, zip, instrument, reflection, Collections, Concurrency Utilities, Java Archive (JAR), Logging, Preferences API, Ref Objects, and Regular Expressions.
* Java Virtual Machine (JVM) : This encompasses Java HotSpot and Server Virtual Machines.
  

# Java

### What is Java?

Java is a programming language, created in 1995.

It is owned by Oracle, and more than 3 billion devices run Java.

### It is used for:
* Mobile applications(specially Android apps)
* Desktop applications
* Web applications
* Web servers and application servers
* Games
* Database connection
* And much, much more!

### Why use Java?

* Java works on different platforms(Windows, Mac, Linux, Rasberry Pi, etc.)
* It is one of the most popular programming languages in the World
* It has a large demand in the current job market
* It is easy to learn and simple to use
* It is open-source and free
* It is secure, fast and powerful
* It has huge community support (tens of millions of developers)
* Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development EnumConstantNotPresentException
* As Java is close to C++ and C#, it makes it easy for programmers to switch to Java and vice versa

### Java Install

Some PCs might have Java already installed.

To check if you have Java installed on a Windows PC, search in the start bar for Java or type the following in Command Prompt (cmd.exe):

c:\Users\Your Name>java -version

If Java is installed, you will see something like this (depending on version):

java version "11.0.1" 2018-10-16 LTS
Java(TM) SE Runtime Environment 18.9 (build 11.0.1+13-LTS)
Java HoptSpot(TM) 64-Bit Server VM 18.9 (build 11.0.1+13-LTS, mixed mode)

If you do not have Java installed on your computer, you can download it for free at oracle.com.

Note: In this tutorial we will write Java code in a text editor. However, it is possible to write Java in an Integrated Development Environment, such as IntelliJ IDEA, Netbeans or Eclipse, which are particularly useful when managing larger collections of Java files.


### Setup for Windows

To install Java on Windows:

1. Go to "System Properties" ( Can be found on Control Panel > System and Security > Sytem > Advanced System Settings )
2. Click on the "Environment variables" button under the "Advanced" tab
3. Then, select the "Path" variable in System variables and click on the "Edit" button
4. Click on the "New" button and add the path where Java is installed, followed by \bin. By default, Java is installed in C:\Program Files\Java\jdk-11.0.1\bin
   Then, click "OK", and save the Settings
5. At last, open Command Prompt (cmd.exe) and type java -version to see if Java is running on your machine


### Java Quickstart

In Java, every application begins with a class name, and that class must match the filename.

Let's create our Java file, called Main.java, which can be done in any text editor (like Notepad).

The file should contain a "Hello World" message, which is written with the following code:

Main.java


public class Main{
  public static void main(String[] args){
    System.out.println("Hello World !");
  }
}


Save the code in Notepad as "Main.java". Open Command Prompt (cmd.exe), navigate to the directory where you saved your file, and type "javac Main.java":

c:\Users\Your Name>javac Main.java

This will compile your code. If there are no errors in the code, the command prompt will take you to the next line. Now, type "java Main" to run the file:

c:\Users\Your Name>java Main

The output should read:

Hello World !


### Java Syntax

Every line of code that runs in Java must be inside a class. In our example, we named the class Main. A class should always start with an uppercase first letter.

Note: Java is case-sensitive: "MyClass" and "myclass" has different meaning.

The name of the java file must match the class name. When saving the file, save it using the class name and add ".java" to the end of the filename. 

### The main Method

The main() method is required and you will see it in every Java program:

* public static void main(String[] args)

Any code inside the **main()** method will be executed. Don't worry about the keywords before and after main.

Java program has a **class** name which must match the filename, and that every program must contain the **main()** method.


### System.out.println()

Inside the **main()** method, we can use the **println()** method to print a line of text to the screen:

public static void main(String[] args){
System.out.println("Hello World");
}

**Note:** The curly braces {} marks the beginning and the end of a block of code.

System is a built-in Java class that contains useful members, such as out, which is short for "output". The println() method, short for "print line", is used to print a value to the screen (or a file).

The each code statement must end with a semicolon (;).


### Java Output / Print

You can add as many println() methods as you want. Note that it will add a new line for each method:

Example

System.out.println("Hello World !");
System.out.println("I am learning Java.");
System.out.println("It is awesome!");

When you are working with text, it must be wrapped inside double quotations marks "".

There is also a print() method, which is similar to println().

The only difference is that it it does not insert a new line at the end of the output:

Example

System.out.println("Hello World !");
System.out.print("I will print on the same line.");

You can also use the println() method to print numbers.

Example

For using number we don't put numbers inside double quotes:
System.out.println(5); //Output is 5
System.out.println(5+6); //Output is 11

You can also perform mathematical calculations inside the println() method:
System.out.println("5+6"); //Output is 5+6


### Java Comments

Comments can be used to explain Java code, and to make it more readable. It can also be used to prevent execution when testing alternative code.

Single-line comments start with two forward slashes (//).
Any text between // and the end of the line is ignored by Java (will not be executed).

Example 

// This is a comment

Multi-line comments starts with a /* and ends with */.
Any text between /* and */ will be ignored by Java.

Example

/* The this returned is ignored */


### Java Variables

Variables are containers for storing data values.

In Java, there are different types of variables.

* String - stores text, such as "Hello". String values are surrounded by double quotes.
* int - stores integers (whole numbers), without decimals, such as 123 or -123.
* float - stores floating point numbers, with decimals, such as 19.99 or -19.99.
* char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes
* boolean - stores values with two states: true or false.


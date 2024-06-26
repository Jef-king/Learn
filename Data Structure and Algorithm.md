# DSA (Data Structure and Algorithm)

> A *data structure* is a way of organizing and storing data in a computer so that it can bbe accessed and used efficiently. It defines the relationship between the data and the operations that can be performed on the data.

### Data structures are essential for the following reasons:

* **Efficient Data Management :** They enable efficient storage and retrival of data, reducing processing time and improving performance.
* **Data Organization :** They organize data in a logical manner, making it easier to understand and access.
* **Data Abstraction :** They hide the implementation details of data storage, allowing programmers to focus on the logical aspects of data manipulation.
* **Reusability :** Common data structures can be reused in multiple applications, saving time and effort in development.
* **Algorithm Optimization :** The choice of the appropriate data structure can significantly impact the efficiency of algorithms that operate on the data.

### Classification of Data Structures

> Data structures can be classified into two main categories :

* **Linear Data Structures :** These structures store data in a sequential order this allowing for easy *insertion* and *deletion* operations. Examples include trees, graphs and hash tables.
* **Non-Linear Data Structures :** These structures store data in a hierarchical or inter

### Types of Data Structures:

> Basically, data structures are divided into two categories :

#### Linear Data Structures :

* **Array :** A collection of elements of the same type stored in contiguous memory locations.
*  **Linked List :** A collection of elements linked together by pointers, allowing for dynamic insertion and deletion.
*  **Que :** A First-In-First-Out (FIFO) structure where elements are added at the end and removed from the beginning.
*  **Stack :** A Last-In-First-Out (LIFO) structure where elements and removed from the top.

#### Non-Linear Data Structures :

* **Tree :** A hierarchical structure where each node can have multiple child nodes.
* **Graph :** A collection of nodes connected by edges, representing relationships between data elements.
* **Hash Table :** A data structure that uses a hash function to map keys to vlaues, allowing for fast lookup and insertion.

#### Applications of Data Structures

Data structures are widely used in various applications, including :

* **Database Management Systems :** To store and manage large amounts of structured data.
*  **Operating System :** To manage memory, processes, and files.
*  **Compiler Design :** To represent source code and intermediate code.
*  **Artificial Intelligence :** To represent knowledge and perform reasoning.
*  **Graphics and Multimedia :** To store and process images, videos and audio data.


## Linear Data Structures

Linear Data Structure are a type of data structure in computer science where data elements are arranged sequentially or linearly. Each element has a previous and next adjacent, except for the first and last elements.

#### Characteristics of Linear Data Structure :

* **Sequential Organization :** In linear data structures, data elements are arranged sequentially, one after the other. Each element has a unique predecessor (except for the first element) and unique successor (except for the last element)
* **Order Preservation :** The order in which elements are added to the data structure is preserved. This means that the first element added will be the last one to be accessed or removed, and the last element added will be the last one to be accessed or removed.
* **Fixed or Dynamic Size :** Linear data structures can have either fixed or dynamic sizes. Arrays typically have a fixed size when they are created, while other structures like linked lists, stacks, and queues can dynamically grow or shrink as elements are added or removed.
* **Efficient Access :** Accessing elements within a linear data structure is typically efficient. For example, arrays offer constant-time access to elements using their index.

Linear data structures are commonly used for organising and manipulating data in a sequential fashion. Some of the most common linear data structures include :

* **Arrays :** A collection of elements stored in contiguous memory locations.
* **Linked List :** A collection of nodes, each containing an element and a reference to the next node.
* **Stacks :** A collection of elements with **Last-In-First-Out (LIFO)** order.
* **Queues :** A collection of elements with **First-In-First-Out (FIFO)** order.

### Array

An array is a collection of items of same data type stored in a contiguous memory locations.

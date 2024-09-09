# ReGex [ Regular Expression]

Used for Pattern matching or String matching

```
[abc] // a,b or c
[^abc] // anycharacter except a, b or c
[a-z] // a to x
[A-Z] // A to Z
[0-9] // 0 to 9
[A-Z a-z 1-0] A to Z, a to z, 1 to 0
```

Quantifiers

```
[ ]? // occurs 0 or 1 times.
[ ]+ // occurs 1 or more times.
[ ] * // occurs 0 or more times.
[ ]{n} // occurs n times.
[ ]{n,} // occurs n or more times.
[ ]{y,z} // occurs atleast y times but less than z times.
```

Regex Metacharacters

```
\d same as [0-9]
\D same as [^0-9]
\w same as [a-z A-Z 0-9]
\W same as [^\w]
```

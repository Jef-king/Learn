# HTML

> HTML is the standard markup language for Web pages  
> With HTML you can create your own Websites  
> HTML is easy to learn - You will enjoy it!  
> HTML describes the structure of the Web page  
> HTML consists of a series of elements  
> HTML elements tell the browser how to display the content  
> HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.

## A Simple HTML Document

```
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
<h1>My First Heading</h1>
<p>My First paragraph</p>
</body>
</html>
```

## Example Explained

* The `<!DOCTYPE html>` declaration defines that this document is an HTML5 document
* The `<html>` element is the root element of an HTML page
* The `<head>` element contains meta information about the HTML page
* The `<title>` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
* The `<body>` element defines the document's body, and is a container for all the visible contents such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
* The `<h1>` element defines a large heading
* The `<p>` element defines a paragraph

## What is an HTML element?  

An HTML element is defined by a start tag, some content, and an end tag:  
```
<tagname>Content goes here....</tagname>
```
The HTML element is everything from the start tag to the end tag:  
`<h1>My First Heading</h1>`
`<p>My first paragraph</p>`  

Start tag | Element content | End tag
--- | --- | ---
`<h1>` | My First Heading | `</h1>`
`<p>` | My first paragraph | `</p>`
`<br>` | none | none  

Note: 
* Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!
* The content inside the `<body>` section will be displayed in a browser. The content inside the  `<title>` element will be shown in the browser's title bar or in the page's tab.

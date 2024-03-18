/*What is the DOM?
    DOM is a programming interface for web documents. It represents the structure of a document as a tree of objects, 
where each object corresponds to a part of the document, such as elements, attributes, and text.
    The HTML DOM is a standard for how to get, change, add, or delete HTML elements.
    JS can manipulate this tree structure, allowing developers to dynamically alter the content and appearance of a webpage.*/

/*The HTML DOM Document Object
The document object represents your web page.
If you want to access any element in an HTML page, you always start with accessing the document object. */


//HOW TO ACCESS DOM ELEMENTS
/*To manipulate the DOM, we need to access its elements. This is commonly done using the document object,
 which represents the entire HTML document.*/

// Accessing an element by its ID
const headerElement = document.getElementById('header');

// Accessing elements by class name
const paragraphs = document.getElementsByClassName('paragraph');

// Accessing elements by tag name
const images = document.getElementsByTagName('img');
/*In the code snippet above, we use getElementById, getElementsByClassName, and getElementsByTagName to retrieve
 specific elements. The returned values can then be stored in variables for further manipulation. */

/*there are many ways to select an element and store a reference to it in a variable. 
Document.querySelector() is the recommended modern approach. */
const link = document.querySelector("a");
//The above querySelector() call will match the first <a> element that appears in the document
/*you wanted to match and do things to multiple elements, you could use 
Document.querySelectorAll()
which matches every element in the document that matches the selector, and stores references to them in an array-like object called a NodeList. */

//HOW TO MODIFY ELEMENT CONTENT
//Once we have access to an element, we can modify its content using the innerHTML property: 

// Modifying the content of an element
headerElement.innerHTML = 'New Header Text';

/*In the example above, we changed the content of the headerElement to New Header Text. 
This is a simple yet powerful way to update the text within an element.*/

//HOW TO CREATE AND MODIFY ELEMENTS
//In addition to modifying existing elements, JavaScript allows us to create new elements and add them to the DOM.

/*HOW TO CREATE NEW ELEMENTS
The createElement method is used to create a new HTML element. Let's create a new paragraph element and append 
(add) it to the body of the document:*/

// Creating a new paragraph element
const newParagraph = document.createElement('p');

// Setting the text content of the new paragraph
newParagraph.textContent = 'This is a new paragraph.';

// Appending the new paragraph to the body of the document
document.body.appendChild(newParagraph);

/*In this example, we create a new p (paragraph) element, set its text content, and then append 
it to the body of the document.*/

/*HOW TO MODIFY ATTRIBUTES
We can also modify the attributes of existing elements. Let's consider changing the source of an image dynamically:*/

// Accessing an image element
const myImage = document.getElementById('myImage');

// Changing the source attribute of the image
myImage.src = 'new-image.jpg';

/*Here, we access an image element with the ID myImage and change its 
src attribute to new-image.jpg, dynamically updating the displayed image.*/

//HOW TO MANIPULATE STYLES
/*DOM manipulation also extends to modifying the styles of elements,
allowing us to create visually appealing and dynamic web pages.*/

//HOW TO CHANGE STYLES DYNAMICALLY
/*We can use the style property of an element to change its appearance.
Let's take an example of changing the color of a paragraph when a button is clicked:*/

// Accessing a paragraph element
const myParagraph = document.getElementById('myParagraph');

// Accessing a button element
const colorButton = document.getElementById('colorButton');

// Adding a click event listener to the button
colorButton.addEventListener('click', function() {
    // Changing the color style of the paragraph
    myParagraph.style.color = 'blue';
});

/*In this example, when the button with the ID colorButton is clicked, the text color of the paragraph with the
 ID myParagraph is changed to blue.*/

 /*Finding HTML Elements
             Method	                            Description
document.getElementById(id)	            Find an element by element id
document.getElementsByTagName(name)	    Find elements by tag name
document.getElementsByClassName(name)	Find elements by class name */

/*Changing HTML Elements
      Property                   	Description
element.innerHTML =  new html content	Change the inner HTML of an element
element.attribute = new value	Change the attribute value of an HTML element
element.style.property = new style	Change the style of an HTML element
          Method	                                  Description
element.setAttribute(attribute, value)	Change the attribute value of an HTML element */

/*Adding and Deleting Elements
      Method	                           Description
document.createElement(element)	Create an HTML element
document.removeChild(element)	Remove an HTML element
document.appendChild(element)	Add an HTML element
document.replaceChild(new, old)	Replace an HTML element
document.write(text)	Write into the HTML output stream */
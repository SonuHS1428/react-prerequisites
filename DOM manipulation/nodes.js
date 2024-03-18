/*Creating New HTML Elements (Nodes)
To add a new element to the HTML DOM, you must create the element (element node) first,
and then append it to an existing element.*/

<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>


//This code creates a new <p> element:
const para = document.createElement("p"); 

//To add text to the <p> element, you must create a text node first. This code creates a text node
const node = document.createTextNode("This is new."); 

//Then you must append the text node to the <p> element:
para.appendChild(node);

//This code finds an existing element
const element = document.getElementById("div1");

//This code appends the new element to the existing element
element.appendChild(para);

/*This is a paragraph.
This is another paragraph.
This is new. */

/*The appendChild() method, appended the new element as the last child of the parent.
If you don't want that,you can use the insertBefore() method:*/
const child = document.getElementById("p1");
element.insertBefore(para, child);

/*This is new.
This is a paragraph.
This is another paragraph.*/

/*Removing Existing HTML Elements
To remove an HTML element, use the remove() method:*/
const elmnt = document.getElementById("p1"); 
elmnt.remove();

/*For browsers that does not support the remove() method, you have to find the parent node to remove an element: */

//This HTML document contains a <div> element with two child nodes (two <p> elements):
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

//Find the element with id="div1":
const parent = document.getElementById("div1");

//Find the <p> element with id="p1"
const child = document.getElementById("p1");

//Remove the child from the parent:
parent.removeChild(child);

/*Replacing HTML Elements 
To replace an element to the HTML DOM, use the replaceChild() method: */

<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const parent = document.getElementById("div1");
const child = document.getElementById("p1");
parent.replaceChild(para, child);

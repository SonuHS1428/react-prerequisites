/*Events: are actions that happen in the browser, such as a user clicking a button or resizing the window 
          JavaScript allows us to handle these events and execute code in response. 
Event handling is a crucial aspect of creating interactive web pages.*/

//JavaScript HTML DOM Events
/*Examples of HTML events:

When a user clicks the mouse
When a web page has loaded
When an image has been loaded
When the mouse moves over an element
When an input field is changed
When an HTML form is submitted
When a user strokes a key */

<!DOCTYPE html>
<html>
<body>

<h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>

</body>
</html>
//In this example, the content of the <h1> element is changed when a user clicks on it:

//HTML EVENT ATTRIBUTES
//To assign events to HTML elements you can use event attributes.
//Assign an onclick event to a button element:
<button onclick="displayDate()">Try it</button>
//In the example above, a function named displayDate will be executed when the button is clicked.

//ASSIGN EVENTS USING HTML DOM
//The HTML DOM allows you to assign events to HTML elements using JavaScript:
//Assign an onclick event to a button element:
<script>
document.getElementById("myBtn").onclick = displayDate;
</script>
/*In the example above, a function named displayDate is assigned to an HTML element with the id="myBtn".
The function will be executed when the button is clicked. */


//HOW TO ADD EVENT LISTENERS
/*To respond to events, we can use event listeners. These are functions that "listen" for a specific event 
on a particular element. Let's consider a button click event as an example:*/

// Accessing a button element
const myButton = document.getElementById('myButton');

// Adding a click event listener
myButton.addEventListener('click', function() {
    alert('Button Clicked!');
});
/*In this example, when the button with the ID myButton is clicked, an alert saying Button Clicked! will pop up.
Event listeners provide a way to execute custom code based on user interactions.*/

//You can add events of different types to the same element:
element.addEventListener("mouseover", myFunction);
element.addEventListener("click", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);

//Add an Event Handler to the window Object

/*The addEventListener() method allows you to add event listeners on any HTML DOM object 
such as HTML elements, the HTML document, the window object also*/

window.addEventListener("resize", function(){
    document.getElementById("demo").innerHTML =  Math.random();
});
//Add an event listener that fires when a user resizes the window:


//The onload and onunload events: are triggered when the user enters or leaves the page.
//The oninput Event: is often to some action while the user input data.
//The onchange event: is often used in combination with validation of input fields.
//The onmouseover and onmouseout events: can be used to trigger a function when the user mouses over, or out of, an HTML element
/*The onmousedown, onmouseup, and onclick events: are all parts of a mouse-click. First when a mouse-button is clicked,
the onmousedown event is triggered, then, when the mouse-button is released, the onmouseup event is triggered,
finally, when the mouse-click is completed, the onclick event is triggered. */


//Event Bubbling or Event Capturing?
//There are two ways of event propagation in the HTML DOM, bubbling and capturing.

/*Event propagation is a way of defining the element order when an event occurs. 
If you have a <p> element inside a <div> element, and the user clicks on the <p> element,
which element's "click" event should be handled first?

In bubbling the inner most element's event is handled first and then the outer

In capturing the outer most element's event is handled first and then the inner*/

//With the addEventListener() method you can specify the propagation type by using the "useCapture" parameter:
addEventListener(event, function, useCapture);
//The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.

document.getElementById("myP").addEventListener("click", myFunction, true);
document.getElementById("myDiv").addEventListener("click", myFunction, true);

//The removeEventListener() method
//The removeEventListener() method removes event handlers that have been attached with the addEventListener() method:
element.removeEventListener("mousemove", myFunction);



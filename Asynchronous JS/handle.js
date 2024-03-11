/*JAVASCRIPT is a synchronous single threaded language i.e js can only execute one command at a time in a specific order */

/*Due to callbacks,we can do asynch things javascript, You can take a function & passed into another function,so that the 
func which is passed into another is called callback functions. */

//setTimeout()
setTimeout(function(){
    console.log("timer");
},3000);
function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
});
/*output
x
y
timer */

/* Here,setTimeout() takes a callback func as its 1st parameter that means it will called sometime later i.e after 3sec 
     as js is a synchronous single threaded language i.e code is executed one line at a time
        at first,setTimeout() takes a callback func and stores it somewhere & it is attached with timer  
           as we know js don't waits for setTimeout() to finish over here,that's where callback func gives us the power
           of asynchronity.it doesn't wait for 3000msec to expire.So that it will move to nxt code & it will execute it*/

//Event handlers
//html
<body>
    <button id="click me">CLICK</button>
</body>

//JS
document.getElementById("click me").addEventListener("click",function xyz(){
    console.log("Button Clicked");
})

/*In our html code,let me create a button that button has a id "click me" & then we attach click handler for this button
     here function xyz() is the callback func i.e when js executes this line ,it will pick up the button element and
     it will add a event listener,that event is click.when that event is occur i.e when we click the button,it will
     calls a func i.e callback func which will be stored somewhere and that will come automatically to call stack and executed */

//CALLBACK HELL

/*Importance of callbacks
  callbacks are super powerful of handling asynch operations in js
  asynch js is exist because of this callback func exists
  
  Issues with callbacks
  callback hell
  Inversion of control*/

  const cart=["shoes","pants","kurtas"];

  createOrder(cart,function(){
      proceedToPayment(function(){
          showOrderSummary(function(){
              updateWallet()
          })
      })
  });

/* we simply put api proceedToPayment() in a func,and passing that func to api createOrder().Now it is the responsibity 
of createOrder api to create a order and then call the func proceedToPayment()..that way we can handle asynch operations
   For showorderSummary and updateWallet the same thing will be followed
   when we have large code & many number of api's and api's are depend on one another..there comes callback hell
   this type of code are unreadable,unmaintainable and the structure of this callback hell is known as Pyramid of doom
   INVERSION OF CONTROL:another prblm of using callbacks where u are loosing the control 
   over your code when u are using callbacks
   whenever we have callback func and we passed to some other func,we are giving the control of our code to some other 
   code and we blindly trusting the createOrder api that it will call the callback func
   what if our callback func is never called or what if our callback func called twice...*/
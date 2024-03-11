/*PROMISES:A promise is an object representing the eventual completion or failure of an asynchronous operation
                                           or
           It is a place holder for a certain period of time until we recieve a value from a async operation*/

const cart=["shoes","pants","kurtas"];
createOrder(cart,function(){
     proceedToPayment(oderId);
});
/*here createOrder() & proceedToPayment() api's are asynchronous,we don't know how much time it will takes & they
  are dependent on each other.And we have a issue here is INVERSION OF CONTROL i.e we are blindly trusting createOder()
  that it will create a order and it will call our callback fun.But it is not reliable,we just giving the control of 
  our code to some other code.This can be solved by using PROMISES*/

//using promises
const cart=["shoes","pants","kurtas"];
const promise=createOrder(cart)
promise.then(function(orderId){
     proceedToPayment(oderId);
});

//data:undefined
/*In first code we PASSES CB FUNCTION to createOder api and blindly trust that api
  In second code we are ATTACHING A CB FUNCTION to a promise obj */

//CALLBACK HELL

const cart=["shoes","pants","kurtas"];

  createOrder(cart,function(orderId){
      proceedToPayment(orderId,function(paymentInfo){
          showOrderSummary(paymentInfo,function(){
              updateWallet()
          })
      })
  });

//CALLBACK HELL USING PROMISES

const cart=["shoes","pants","kurtas"];

createOrder(cart)
   .then(function(orderId){
       return proceedToPayment(oderId);
    })
    .then(function(paymentInfo){
        return showOrderSummary(paymentInfo);
    })
    .then(function(paymentInfo){
        return updateWallet(paymentInfo);
    });
    


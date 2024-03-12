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
/* here createOrder API won't take a callback function but it will only take card details and returns as a promise
whenever this line is executed createOrder API returns as a promise,a promise is nothing but you can assume it to be a empty object
and we know that create order API is an asynchronous operation and we don't know how much time it takes to execute
suppose after 5 or 10 seconds createOrder API will create an order and it will gives us order details and that will fill this undefined place
now we will attach a callback function to this promise object we will use then() function which is available over promise object
once we have data inside a promise object the callback function that will attach to a promise object will be automatically called, 
and it will called cb func only once hence we will have control of our program with us
promises gives us this guarantee that it will call callback function whenever there is a data inside the promise object*/
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

/*PROMISE APIs
   if you make 10 parallel API calls and get the results for those parallel API calls there we will use this promise methods*/

/*Promise.all()
  Promise.allSettled()
  Promise.race()
  Promise.any()*/

/*Promise.all():
  it takes array of promises as input,let assume you have three promises P1, P2 ,P3 it will make 3 API calls parallelly and get the result
  suppose all the API calls are success in that case the output of promise.all() will be array with a result of all three promises
  as soon as any of these promise get rejected promise.all() will throw an error
        all promises are success:         Promise.all([p1,p2,p3])------->[val1,val2,val3]
        any of promise get reject:        Promise.all([p1,p2,p3])------->error */

/* Promise.allSettled():
 even though one of the API throws an error and if you want other two APIs result it can be done by using promise.allSettled()
 what if P2 to get rejected still it will wait for all promises to settled
        if promise p2 get rejected:        Promise.all([p1,p2,p3])------->[val1,err2,val3]*/

/* Promise.race():
   whether the promise is success or failure Promise.race() returns the result of first settled promise there itself
   suppose p1,p2,p3 takes 3s,5s,2s to settled and assume p3 will get rejected..the output will be first it prints err3 then val1 then val2*/

/* Promise.any():
promise.any() again take list of promises and it is same as race the only difference is it will wait for the first promise to get successful
in Promise.race() irrespective of success or failure it will return the result. over here it will wait for first success
if all the promises get failed the returned result will be aggregated error which means all the promises are failed */

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p1 success"),3000);
  });
  const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p2 success"),1000);
    //setTimeout(()=>reject("p2 fail"),1000);
  });
  const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p3 success"),2000);
  });
  Promise.all([p1,p2,p3])
     .then((res)=>{console.log(res);
      })
     .catch((err)=>{
        console.error(err);
   });

/*OUTPUT
["p1 success","p2 success","p3 success"]*/

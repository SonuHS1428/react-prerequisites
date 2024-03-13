//async:it is a Keyword used before a function to create a asynch function
/*a asynch function always returns a promise if you return normal string or integer 
this function will takes the value wrap it  inside a promise and it will return a promise */

async function getData(){
  return "Hello";
}
const data=getData();
console.log(data);//Promise { 'Hello' }
data.then((res)=>console.log(res));//Hello

/*above we are returning a value let us return a promise if a return value is already a promise 
then it will not wrap inside another promise, it will be returned as it is*/

const p=new Promise((resolve,reject)=>{
    resolve("promise resolved value!!");
});
async function getData(){
  return p;
}
const data1=getData();
data1.then((res)=>console.log(res));//promise resolved value!!

/* async and await are used to handle promises
await is a Keyword that can only be used inside async function */

//before asynch & await 
const p=new Promise((resolve,reject)=>{
  resolve("promise resolved value!!");
});
function getData(){
  p.then((res)=>console.log(res));
}
getData();//promise resolved value!!

//after asynch & await
async function handlePromise(){
  const val=await p;
  console.log(val);
}
handlePromise();//promise resolved value!!

/*instead of p.then() function we are using await p that is you will use the keyword await in front of a promise
 that has to be resolved now val will contain the value of resolved promise 
      and this is how you handle promises using async and await*/

/*let us take a real world example of async await that is making an API call using fetch()
 that is the function given by the browser not by the JavaScript */

const API_URL="https://api.github.com/users/sonuHS1428";//github user url
async function handlePromise(){
  const data=await fetch(API_URL);
  const jsonValue=await data.json();
  console.log(jsonValue);
}
handlePromise();

/*JSON stands for JavaScript Object Notation. It is a lightweight data-interchange format. 
It is easy for humans to read and write. It is easy for machines to parse and generate*/

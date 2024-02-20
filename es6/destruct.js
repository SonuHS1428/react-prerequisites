//DESTRUCTING(destructing makes it easy to extract only what is needed)

//Array destructing
var x,y;
[x,y]=[10,20];
console.log(x);//10
console.log(y);//20

//Object destructing
({ x, y} = { x: 10, y: 20 });
console.log(x); // 10
console.log(y); // 20
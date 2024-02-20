//ifelse

let a = 40;
let b = 20;

if (a > b) {
    console.log("a is greater than b");
}
else {
    console.log("b is greater than a");
}

//elseif

let x = 10;
if (x > 15) {
  console.log("x is greater than 15");
} else if (x > 10) {
  console.log("x is greater than 10 but less than or equal to 15");
} else if (x > 5) {
  console.log("x is greater than 5 but less than or equal to 10");
} else {
  console.log("x is less than or equal to 5");
}

//switch

userInput = 5;

switch(userInput) {
    case 1:
        console.log("You entered 1");
        break;
    case 2:
        console.log("You entered 2");
        break;
    case 3:
        console.log("You entered 3");
        break;
    default:
        console.log("number scope exceeded");
}




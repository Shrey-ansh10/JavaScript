//functions in JS

/*function fun1(params) {     
    console.log("syntax for defining function");
}
*/

function sum(num1, num2, callBack) {  //callbackfunction
    let result = num1 + num2;
    callBack(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

let a = sum(2,3, displayResult);  //callback
console.log(a);




function calculateArithematic(a, b, type){
  /*  if(type == "sum"){
        const value = sum(a,b);
        return value;
    }

    if(type == "minus"){
        const value = minus(a,b);
        return value;
    }*/

    /* now whatever code we jave written in the above If statement, we will replace with better and effcient code.
    -> In place of the TYPE argument we have in the 'calculateArithematic' function, 
    we will pass a whole function as an argument

    */

    const value = type(a,b);
    return value;

}

function sum(a,b){
    return a+b;
}

function minus(a,b){
    return a-b;
}

let total = calculateArithematic(5, 2, sum);
console.log(total);

/* So what's happening in the above program is, we are passing a function as an argument in 
abother function, 
i.e. we are passing "sum" func. as an argument in the "calculateArithematic" function.
So when the calculateArithematic function is called, it take values of a and b, and when it sees 'sum' 
in place of 'type' argument, it will call the sum function.
This function calling other function is called CALLBACK or FUNCTION CALLING. 

*/


// setInterval and setTimeout are inbuild functions. There are many more i
// Q1. Create a counter in Javascript (counts down from 30 to 0)

let i=5;   //'i' represent the counter of the countdown. Change the value of 'i' as requirement.

function countdown() {
    
if (i == -1)
   {
    console.log("Timer Over");
    clearInterval(a);
} 
else{
    console.log(i);
}

i--;
}

let a = setInterval(countdown, 1*1000);


// "Date" is a global class type of thing 

// Therefore we can directly create a new object using the class date.

let currentDate = new Date()  /* We can enter any date as paramenter, but if we don't enter anything it will by default take the systems current */ 

console.log("Today's date is " + currentDate.getDate());  // 'getDate()' method helped us get today's date, i.e. 31st

// while declaring a new variable, we can set a date whichever we want, and we can set time as well in the parameters 
let thisDate = new Date('August 15, 1947 00:00:01')  // here we set date 
console.log(thisDate.getDate());  // so here get date will return us the date which we gave in the paramenter, i.e. 15th Aug

// similarly there are many many more methods in Date class which we can use in different places.


// Year : getYear() ; getFullYear() ; setFullYear() ; 

let year = currentDate.getFullYear();
console.log("The Current Year is " + year);

// Month : getMonth() ; setMonth() ; getUTCMonth();  || Generally due to indexing, Jan is taken as 0, feb as 1 and so on. Similar is with Hours, minutes and seconds

let month = currentDate.getMonth() + 1;  // this +1 is done to deal with the Indexing. 
console.log("This month is " + month );

// same pattern is for Minutes, hour, second and milliseconds.




/* getDay() : Return value is An integer, between 0 and 6, representing the day of the week for the given date according to
 local time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on. Returns NaN if the date is invalid.*/

console.log("It was " + thisDate.getDay() + "th day of week on 15th Aug 1947 when India rose to Independence.");  // it was Friday on august 15th 1947 therefore we get '5' as an output

console.log("Today is " + currentDate.getDay() + "th Of the week"); // called getDay on current date, this will tell which day is today, so today is thusday therefore we get "4".



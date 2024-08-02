/* JSON is basically a way to send and recive data in Text format. It is commonly used for transmitting data 
between a server and a web application as text. The JSON file is smaller in size compared to XML file. 

-> JSON format is language independent, means it can be used via C++, Python, Java and more, making it a universal format for data exchange.
 
-> The syntax of JSON is straightforward and easy to understand, which simplifies debugging and data inspection. 
1. Objects: Represented as key-value pairs enclosed in curly braces {}, and each entitity is seperated by a comma. 
i.e. {
  "name": "John",
  "age": 30,
  "city": "New York"
}
  
2. Arrays: Ordered lists of values enclosed in square brackets [].
i.e. [
  "apple",
  "banana",
  "cherry"
]

3. Values:
-> Can be strings, numbers, objects, arrays, true, false, or null.
-> Strings are enclosed in double quotes "".
-> Numbers are written as-is without quotes.
-> Boolean values are represented as true or false.
-> Null is represented as null.

*/ 

// Following is an example of JSON 
/* {
    "name": "Alice",
    "age": 25,
    "isStudent": false,
    "courses": [        // Array written is a [] brackets.
      "Mathematics",
      "Computer Science",
      "Physics"
    ],
    "address": {
      "street": "123 Main St",
      "city": "Wonderland",
      "zipCode": "12345"
    },
    "graduationYear": null
  }
*/

// We can also write a object to json as following

const user1_json = '{"name" : "Aditya", "age" : 23, "bloodGroup" : null}'; // This is a JSON string. 
//JSON string is written is the same line. 

console.log("This is JSON String " + user1_json); 

// 1) use JSON.parse() : to convert a JSON string into a JavaScript object.
const user1_obj = JSON.parse(user1_json);  // convert json string to js object
console.log(user1_obj);  // this will log all the data of user 2

// 2) JSON.stringify() : Converting JS Object to JSON String

const animal = { 
    Name:'Cat', 
    Type :'Pet'
}
console.log("This is JS Object "); 
console.log(animal);

const animal_json = JSON.stringify(animal);
console.log("This is JSON => " + animal_json);





// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {  /* we have a function hetLength with an string as it's argument. So we
    can pass a string in it*/
   console.log("Original String:", str);  // this will print the orignal string which is "Hello World".
   console.log("Length:", str.length);  // this will help us count the letters in a particular string. i.e. 11 over here.
  }
  getLength("Hello World");
  
  //--------------------------------------------------------------------------------------------------
  
  // indexOf - this will help us get the index of a particular string.
  function findIndexOf(str, target) {    /* we have two arguments here, str: is the actual string, 
    Target: is the word wich we need to get the index of*/
    console.log("Original String:", str);
    console.log("Index:", str.indexOf(target));
  }
  findIndexOf("Hello World", "World");
  
  
  // lastIndexOf - this is used when same word is repeated multiple times.
  function findLastIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.lastIndexOf(target));  /* ".lastIndexOf" will give us the index of the target word's last appereance where as ".indexof" will give the index of first appereance of the targeted string */
  }
  findLastIndexOf("Hello World World", "World");  
  
  //------------------------------------------------------------------
  
  // slice
  function getSlice(str, start, end) { //getSlice function gets us a slice of a particular string, we have to give start index in "start" and end index in "end" argument.
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
  }
  getSlice("Hello World", 0, 5); /* this will give us everything starting from 0th index until 4th index, it will not log the 5th index.*/
  
  
  //as these all are inbuild function we, can us the same function as follow, 
  let J= "Ram Ram Ji saraya ne".slice
  console.log(J);  
  
  //--------------------------------------------------------------------
  
  
  // substring
  function getSubstring(str, start, end) {
    console.log("Original String:", str);
    console.log("After substring:", str.substring(start, end));
  }
  getSubstring("Hello World", 0, 5);
  
  //-------------------------------------------------------------------
  
  // replace - simply used to replace a string with any a newer string.
  function replaceString(str, target, replacement) {
    console.log("Original String:", str);
    console.log("After replace:", str.replace(target, replacement));
  }
  replaceString("Hello World", "World", "JavaScript");
  
  //can also use replace as follow
  let ji = "Ram Ram"; //declared a variable named 'ji', which stores a string.
  console.log(ji.replace("Ram","Jay Shree")); //called the replace function on 'ji' variable.
  
  // ---------------------------------------------------------
   
  /* split - gives an array of strings, splited based on the seperator. 
  Seperator can be a comma, space, a single letter or a string as well.
  If the seperator occurs only once, it will divide the string into two,
  but if it occurs multiple times it will divide the string into multiple parts.
  */
  function splitString(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
  }
  splitString("Hello World", " ");
  
  //-------------------------------------------------------------
  
  // trim - this function will trim the extra spaces in the start and end of the string.
  function trimString(str) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim());
  }
  trimString(" Hello World ");
  
  // toUpperCase - convert all letters of the given string to upper case.
  function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
  }
  toUpper("Hello World");
  
  // toLowerCase - convert the string to lower case.
  function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
  }
  toLower("Hello World");
  
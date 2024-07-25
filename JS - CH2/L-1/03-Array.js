// Array in JS

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()


/* push() - this function can be used to insert some value into an array. 
It will push/insert the value to the end of the array*/
function pushExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.push(element);
    console.log("After push:", arr);
  }
  pushExample([1, 2, 3], 4);
  
  /* pop() - this function will pop a value out of the array. It will pop the value which is at the very
  end of the array(at the last index*/
  function popExample(arr) {
    console.log("Original Array:", arr);
  
    arr.pop();
    console.log("After pop:", arr);
  }
  popExample([1, 2, 3]);
  
  // shift() - pop of the first element of an array.
  function shiftExample(arr) {
    console.log("Original Array:", arr);
  
    arr.shift();
    console.log("After shift:", arr);
  }
  shiftExample([1, 2, 3]);
  
  // unshift() - push/insert a new element at the start(zeroth index) of the array.
  function unshiftExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.unshift(element);
    console.log("After unshift:", arr);
  }
  unshiftExample([1, 2, 3], 0);
  
  // concat() - used to merge two array, and create a new third array.
  function concatExample(arr1, arr2) {
    console.log("Original Arrays:", arr1, arr2);
  
    let arr3 = arr1.concat(arr2);
    console.log("After concat:", arr3);
  }
  concatExample([1, 2, 3], [4, 5, 6]);
  
  /* forEach() - It's kind of a replica of for loop. this function takes another function as it's argument.
  
  Here as we have a array, it will loop over array and call it the number of times the elements.
  
  to know index of each element of an array. 
  Will print a list of elements along with their index number.
  
  */
  
  function forEachExample(arr) {
    console.log("Original Array:", arr);
  
    arr.forEach(function(item, index) {
      console.log(item, index);
    });
  }
  forEachExample([1, 2, 3]);
  
  // map()
  function mapExample(arr) {
    console.log("Original Array:", arr);
  
    let newArr = arr.map(function(item) {
      return item * 2;
    });
    console.log("After map:", newArr);
  }
  mapExample([1, 2, 3]);
  
  // filter()
  function filterExample(arr) {
    console.log("Original Array:", arr);
  
    let newArr = arr.filter(function(item) {
      return item > 3;
    });
    console.log("After filter:", newArr);
  }
  filterExample([1, 2, 3, 4, 5]);
  
  // find()
  function findExample(arr) {
    console.log("Original Array:", arr);
  
    let found = arr.find(function(item) {
      return item > 3;
    });
    console.log("After find:", found);
  }
  findExample([1, 2, 3, 4, 5]);
  
  // sort()
  function sortExample(arr) {
    console.log("Original Array:", arr);
  
    arr.sort(function(a, b) {
      return a - b;
    });
    console.log("After sort:", arr);
  }
  sortExample([5, 2, 3, 4, 1]);
  
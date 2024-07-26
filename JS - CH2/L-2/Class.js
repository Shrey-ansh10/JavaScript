class Human {       /*  class is a "buleprint or common charactersticks" of the collection of objects. 
    It also has functions which are aslo knon as methods, which are operations that 
    can be perfomed by the objects. .         */

constructor(name, height, skinColor){ 
                 /* Constructor is special function that creates and initializes
                    an object instance of a class. Using template defined in the
                    constructor, we can create an object. */
this.name = name;
this.height = height;
this.skinColor = skinColor;
}

looks() {            // looks is a funtion AKA method.   
console.log(this.name + ' is ' + this.height + " foot tall and skin color is " + this.skinColor);
}


static myType(){     // Static is a special and only function that can be called only on the class, and can't be called on any of it's object.
console.log("This is a Human Class");
}

}

let ram = new Human("Ram", 6.5, "Brown");    //create object. Here we deifine the object of the class, using the class blueprint which we defined while making the class.
let lakshman = new Human("Lakshman", 6.4, "Fair");

ram.looks();  // calling function/method on the object
lakshman.looks();

Human.myType();   /* therefore we can call the "myType();" function on "Human" which is a class,  
but not on "ram" which is a object of Human class. */



// the methods inside an class like "looks", can only be called on the objects of that class and not on the class itself.
// but there are static function that are associated with the class and can be called on the class itself.
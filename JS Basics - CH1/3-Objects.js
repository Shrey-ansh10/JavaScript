// Objects in JS - Complex Proimitives 

const user1 = {                     //this is a JavaScript object
    FirstName: "Shreyansh",
    LastName: "Sharma",
    Gender: "Male",
}


const user2 = {
    FirstName: "Ram",
    LastName:"Charan",
    Gender: "Male",
}

const user3 = {                
    FirstName: 'Shreya',
    LastName: "Ghosal",
    Gender: 'Female',
    ContactInfo: {                             //this is an object inside an object, or metadata
        ContactNum: "561-773-8729",
        Email: "shreyaghosal@gmail.com" 
    }
}

console.log(user3["FirstName"]);   // to print any particular detail of the object

console.log(user3["ContactInfo"]["ContactNum"]);  // to get/print anything inside the inner object


//3. Write a program that prints all the male people’s first name given a complex object
const allUsers = [{     //this is an array of object
    FName: "One",
    Gender: "Male"
}, {
    FName: "Two",
    Gender: "Female"
}, {
    FName: "Three",
    Gender: "Male"
}, {
    FName: "Four",
    Gender: "Male"
}
]

for ( let i=0; i < allUsers.length; i++){
        if(allUsers[i]["Gender"] == "Male"){        //remember we used'==' because it is a comparision operator
            console.log(allUsers[i]["FName"])
        }
    }


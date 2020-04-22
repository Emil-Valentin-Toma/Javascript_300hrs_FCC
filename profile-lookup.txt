/* A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return "No such contact".

If prop does not correspond to any valid properties of a contact found to match name then return "No such property".
*/
// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    
    for (var i = 0;i < contacts.length; i++ ) {
        var cont = contacts[i];
        if (name == cont["firstName"] && cont.hasOwnProperty(prop)) {
            return cont[prop];
        }
    }
    for (var i = 0;i < contacts.length; i++ ) {
            var cont = contacts[i];
            if (name != cont["firstName"]) {
                return "No such contact";
            }
            else if (!cont.hasOwnProperty(prop)) {
                return "No such property";
            }
    }


}
// Only change code above this line


//lookUpProfile("Akira", "likes");
//console.log(JSON.stringify(contacts));
//console.log(contacts[1]["firstName"]);
//var temp = contacts[1].hasOwnProperty("firstName");
//console.log(temp);
//var varPrint = lookUpProfile ("Kristian", "lastName");
console.log(lookUpProfile ("Kristian", "lastName"));
console.log(lookUpProfile ("Sherlock", "likes"));
console.log(lookUpProfile ("Harry","likes"));
console.log(lookUpProfile ("Bob", "number"));
console.log(lookUpProfile ("Bob", "potato"));
console.log(lookUpProfile ("Akira", "address"));
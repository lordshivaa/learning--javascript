// singleton
// Object.create --> ye tarika constructore ki tarah banane ka hain


// objects literals

const mySym = Symbol("key1")


const jsUser = {
    name : "shivam",
    age : 18,
    location : "Delhi",
    [mySym] : "mykey1",
    email : "shivam@google.com",
    isloggedin : false,
    lastloginDays : ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser['email']);
console.log(typeof jsUser[mySym]);
console.log(jsUser[mySym]);

jsUser.email = "shivam@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "shivam@facebook.com"

// console.log(jsUser)


jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingtwo = function(){
    console.log(`hello js user ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());



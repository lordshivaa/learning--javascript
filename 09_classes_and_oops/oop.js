const user = {
    username : "shivam",
    logincount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        
    }
}


// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this

}

// new is a constructor function which give new instance everytime
// new keyword jaise use karenge toh ek empty instance create hota hain 
// step 1 - new object create 
// step 2 - new keyword ki wajah se constructor function call hota hain
// step 3 - this keyword main sare argument inject ho jate hain 
// step - 4 - then you get 

const userOne = new User("shiv", 12, true)
const userTwo = new User("javascript", 8, false)

console.log(userOne.constructor);
// console.log(userTwo);

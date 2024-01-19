let myName = "shivam      "

// console.log(myName.truelength);


let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shivam = function(){
    console.log(`shivam is present in all object`);
}

Array.prototype.heyShivam = function(){
    console.log("shivam says hello");
}

// heroPower.shivam()
// heroPower.heyShivam()

// myHeros.heyShivam()


// inheritance

const User = {
    user :'shivam',
    email : 'shiv@google.com'
}

const Teacher = {
    makeVedio : true
}


const TechingSupport = {
    isAvailable : false
}

const TAsupport =  {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : TechingSupport
}


Teacher.__proto__ = User



// Modern syntax

Object.setPrototypeOf(TechingSupport, Teacher)


let anotherUsername = "Javascript       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true lenght is: ${this.trim().length}`);
}

anotherUsername.trueLength()

"shivam   ".trueLength()
"iceTea".trueLength()


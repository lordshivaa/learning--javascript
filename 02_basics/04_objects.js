// constructore and singletone

// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedin = false

console.log(tinderUser);


const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname :{
            first_name : "shivam",
            last_name : "tripathi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.first_name);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);



const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:2,
        email: "h@gmail.com"
    },
    {
        id:3,
        email: "h@gmail.com"
    }
]


users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('islogged'));



// destructuring

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "shivam"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(instructor);

// const navbar = ({company}) => {}
// navbar(company = "shivam")


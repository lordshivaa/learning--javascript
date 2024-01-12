// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

// const result = addTwoNumber(3, 4) // arguments

// ----------------------------------------------------

// function addTwoNumber(number1, number2){
//     let result = number1 + number2
//     return result

// }

// const result = addTwoNumber(3,4)

// console.log("Result: ", result);


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// const login = loginUserMessage()
// console.log(login);


function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 300, 400));

const user = {
    username : "shivam",
    age : 18
}

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
// }
// // handleObject(user)
// handleObject({
//     username: "Aman",
//     age : 23
// })


const myNewArray = [200,400,100,600]

function returnSeconfValue(getArray){
    return getArray[1]
}

console.log(returnSeconfValue(myNewArray));


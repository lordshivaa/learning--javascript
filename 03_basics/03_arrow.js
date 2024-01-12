// vedio - 23

const user = {
    username : "shivam",
    price : 999,
    welcomeMessage: function(){
        console.log((`${this.username}, welcome to website`));
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "shivam"
//     console.log(this.username);
// }
// chai()


const chai = () => {
    let username = "shivam"
    console.log(this.username);
}


// const addTwo = (num1, num2) =>{
//     return num1 + num2            // explisit return
// }

// const addTwo = (num1 , num2) => (num1 + num2) // emplisit return
// console.log(addTwo(3,4));





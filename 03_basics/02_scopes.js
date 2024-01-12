

let a = 10
const b = 20
var c = 30


// Nested function

function one(){
    const username = "shivam"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    // two()
}

// one()


// ++++++++++++++++++++++ interesting +++++++++++

function addone(num){
    return num + 1
}

addone(5)


const addTwo = function(num){
    return num + 2
}

addTwo(5)


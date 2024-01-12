// for of

// ["", "", ""]
// [{}, {}, {}]


const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello wordl"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


// Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', 'United States of America')
map.set('FR', 'France')
map.set('USA', 'United States of America')

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'GTA'
}

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }


const myobject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myobject) {
    // console.log(key);
    // console.log(myobject[key]);
}

const programming = ['js', 'rb', 'py', 'java', 'cpp']
for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
}
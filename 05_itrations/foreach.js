// foreach

const coding = ['js', 'ruby', 'java', 'python', 'cpp', 'c++']

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (value) => {
//     console.log(value);
// })


function printMe(item){
    // console.log(item);
}

// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })


const mycoding = [
    {
        languageName : 'javascript',
        languageFileName : 'js'
    },
    {
        languageName : 'python',
        languageFileName : 'py'
    },
    {
        languageName : 'java',
        languageFileName : 'java'
    }
]

mycoding.forEach( (item) => {
    console.log(item.languageName);
    return item.languageName
})


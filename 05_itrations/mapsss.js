const myNuumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNuumbers.map( (num) => num + 10)
console.log(newNums);


const newVal = myNuumbers.map( (num) => (num * 10)).map( (num) => (num + 1)).filter((num) => (num >= 40))

// console.log(newNums);

const coding = ['js', 'ruby', 'java', 'python', 'cpp', 'c++']

const codingval = coding.map((item) => {
    console.log(item);
    return item +"s"
})

console.log(codingval);

console.log(codingval[1]);





const coding = ['js', 'ruby', 'java', 'python', 'c++', 'cpp']

const values = coding.forEach( (item) => {
    // console.log(item,"this is item");
    return item
})


console.log(values, 'this is value');


const myNums = [1,2,3,4,5,6,7,8,9,10]

const mynumber = myNums.filter( (num) => {
    return num > 4

})

console.log(mynumber);

const books = [
    {
        title : 'Book One',
        genre : 'Fiction',
        publish : 1981,
        edition : 2004
    },
    {
        title : 'Book Two',
        genre : 'Non - Fiction',
        publish : 1992,
        edition : 2008
    },
    {
        title : 'Book Three',
        genre : 'History',
        publish : 1989,
        edition : 2010
    },
    {
        title : 'Book Four',
        genre : 'Non-Fiction',
        publish : 1999,
        edition : 2007
    },
    {
        title : 'Book Five',
        genre : 'Science',
        publish : 1987,
        edition : 2014
    },
    {
        title : 'Book Six',
        genre : 'Fiction',
        publish : 1983,
        edition : 2003
    },
    {
        title : 'Book Seven',
        genre : 'History',
        publish : 1986,
        edition : 2015
    },
    {
        title : 'Book Eight',
        genre : 'Science',
        publish : 1978,
        edition : 2006
    },
];

// const userBooks = books.filter((bk) => {
//         return bk.genre === 'History'
// })

const userBooks = books.filter( (bk) => (bk.edition >= 2000 && bk.genre === 'History'));

// console.log(userBooks);



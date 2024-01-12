// reduce

const myNums = [1,2,3]

const myTotal = myNums.reduce(function (acc, currvalue) {
    console.log(`acc: ${acc} and currval: ${currvalue}`);
    return acc + currvalue
}, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "python course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "data science course",
        price : 12999
    },
]

// const amountToPay = shoppingCart.reduce((acc, item) => (acc + item.price),0)
// console.log(amountToPay);

const amountToPay = shoppingCart.reduce( (acc, item) => (acc + item.price),0)
// console.log(amountToPay);


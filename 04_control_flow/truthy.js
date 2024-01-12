const userEmail = "s@shivam.ai"

if (userEmail) {
    console.log("Got User Email");
} else {
    console.log("Don't Have User Email");
}

// falsy value

    // false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value

    // "0", "false", " ", [], {}, function(){}


// checking array value

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
}


// flase == 0
// false == ''
// 0 == ''



// Nullish coaleseing operator (??) : null , undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = null ?? undefined

console.log(val1);


// terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


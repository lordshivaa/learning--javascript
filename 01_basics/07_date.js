let mydate = new Date()

// date is object

// console.log(mydate);

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString()); // mm/dd/yyyy

// let myCreatedDate = new Date(2023, 0, 27, 5, 3)
let myCreatedDate = new Date("01/14/2023")

// console.log(myCreatedDate.toLocaleString());

// console.log(myCreatedDate.toLocaleDateString());
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log((newDate.getDay()));

let loc = newDate.toLocaleString('default', {
    weekday:"long"
})

console.log(loc);


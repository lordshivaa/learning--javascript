const marvel_heros = ['thor', "Ironman", "spiderman"]
const dc_heros = ['superman', "flash", "batman"]

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread value
// console.log(all_new_heros);

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,8]]]
console.log(another_array);
// console.log(...another_array);

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// console.log(Array.isArray("shivam"));
// console.log(Array.from("shivam"));
// console.log(Array.from({name:"shivam"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



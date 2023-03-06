const numbers = [3, 4, 6, 7, 2, 10];

function getDouble(numbers) {
    const output = [];
    for (const number of numbers) {
        const double = doubleIt(number);
        output.push(double);
    }
    return output;
}
// regular function
function doubleItOld(num){
    return num * 2;
}
// arrow function
const doubleIt = num => num * 2;

const tripoli = num => num *3;


const makeDouble = numbers.map(tripoli);
console.log(makeDouble);

const makeDoubleDiract = numbers.map(num => num *2);
console.log(makeDoubleDiract);

const makeFiveTiems = [1,2,3,4,5].map( x=> x * 5);
console.log(makeFiveTiems);


const result = getDouble(numbers);
// console.log(result);
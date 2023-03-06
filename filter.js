const numbers = [11, 3, 4, 7, 87, 22, 45, 50, 99, 10, 33];
const bigNumbers = numbers.filter( num => num > 20);
const smallNumbers = numbers.filter( num => num < 20);
const even = numbers.filter( number => number % 2 === 0);
// console.log(even);

const products = [
    {id: 1, name: 'laptop', price: 40000},
    {id: 2, name: 'mobile', price: 20000},
    {id: 3, name: 'watch', price: 5000},
    {id: 4, name: 'tablet', price: 30000}
];

const expensive = products.filter(  product => product.price > 30000);
const loyeast = products.filter(  product => product.price < 30000);
console.log(loyeast);
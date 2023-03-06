const numbers = [20, 30, 40, 50, 60, 33, 11, 21, 100];
const five = numbers.find( num => num % 5 === 0); // 5 dia vag hoi emon pothon ekta element ke dekhabe 
const fiveall = numbers.filter( num => num % 5 === 0); //5 dia vag jai emon sob gulo element ke dekhabe
console.log(five);
console.log(fiveall);

const products = [
    {id: 1, name: 'laptop', price: 40000},
    {id: 2, name: 'mobile', price: 20000},
    {id: 3, name: 'watch', price: 5000},
    {id: 4, name: 'tablet', price: 30000}
];

const cheap = products.find( num => num.price < 30000);
console.log(cheap);
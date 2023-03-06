const number = [20, 30, 40, 50, 60, 100];
const half = number.map(n => n / 2);
console.log(half);

const friends = ['Mahmud', 'Hasan', 'Rushi', 'Ekra'];
const firstLetter = friends.map(friend => friend[0]);
// console.log(firstLetter);
const friendLength = friends.map ( f => f.length);
console.log(friendLength);

const products = [
    {id: 1, name: 'laptop', price: 40000},
    {id: 2, name: 'mobile', price: 20000},
    {id: 3, name: 'watch', price: 5000},
    {id: 4, name: 'tablet', price: 30000}
];

// const items = products.map(p => console.log(p.name));
const items = products.map( product => product.name);
// console.log(items);
const price = products.map( p => p.price);
console.log(price);
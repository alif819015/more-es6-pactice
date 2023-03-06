// 1
// const numbers = [1, 3, 5, 7, 9];
// const addEvent = numbers.map( num => num+1);
// console.log(addEvent);

// const numbers = [1, 3, 5, 7, 9];
// for( i =0; i < numbers.length; i++){
// console.log(numbers[i] + 1);
// }

//2.
// const numbers = [33, 50, 79, 78, 90, 101, 30]
// const getDivide = numbers.filter( number => number % 10 === 0);
// console.log(getDivide);

//3.
// const numbers = [33, 50, 79, 78, 90, 101, 30]
// const getDivide = numbers.find( number => number % 10 === 0);
// console.log(getDivide);

//4. 
// const numbers = [1, 9, 17, 22]
// const reduce = numbers.reduce ((previous , current) => previous + current , 0);
// console.log(reduce);

// 5. incomplete
// const people = [
//     { name: 'Mena', age: 20 },
//     { name: 'Razu', age: 30 },
//     { name: 'Tina', age: 50 }
// ];
// const reduce = people[i].reduce((previous, current) => previous + current, 0);
// console.log(reduce);

//6.
// const student = {
//     name: 'Mahmud',
//     age: 27
// }
// console.log(student.age);

//7.
let data = {
    location: [
        {
            city: 'Kushtia',
            country: 'Bangladesh'
        }
    ]
};
console.log(data.location[0].city);
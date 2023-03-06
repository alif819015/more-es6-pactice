const user = [ {id: 1, name: 'Alif', profession: 'Student'}];

// console.log(user[0].profession);

const data = {
    count: 500,
    data: [
        {id: 1, name: 'Mahmud', job: 'gure barano'},
        {id: 2, name: 'Hasan', job: 'Study'}
    ]
}
const firstJob = data.data[1].job;
// console.log(firstJob);

const users = {
id: 3000,
name: 'Mahmud Hasan',
address: {
    street: {
    first: '35/A kushtia',
    second: 'third flower',
    third: 'left side'
},
postOffice: 'kushtia',
city: 'Khulna',
}
}
const userFlower = users.address?.stret?.third; //optional chain ? dia korte hoi
console.log(userFlower);
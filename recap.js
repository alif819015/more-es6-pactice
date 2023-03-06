// 1.var let const
//break up with var
const numbers = [12,22,34,54,65,77];
let salary = 450;
salary = 300;

// 2. default parameters
function calculateSalary(salary, tax = .25, bonus =0 ){
const remaining = salary - salary*tax;
const total = remaining + bonus;
return total;
}

// 3. tamplate string
const elementHTML = `
<div>
<h3>Name: </h3>
<p>Address: </p>
<p>Salary: ${calculateSalary(10000, 0, 0)}</p>
<p>Other: ${numbers[2]}</p>
</div>
`
// console.log(salary);

// 4: Arrow function
const doubleIt = x => x*2;
const calculateSalary2 = (salary, tax, bonus) =>salary-salary*2 + bonus;

// 5: spread
const ages = [33, 55, 43, 23, 32];
const newAge = [...ages, 11, 22, 32];

// 6: destructuring
const {x, y, ...c} = {x: 20, y: 30, z: 49, name: 'Mahmud', id: 492}
const [a, b, ...z] = [23, 45, 55, 65];
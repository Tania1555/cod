class Employee {
    constructor(name, salary) {
        name;
        salary;
    };
    nameshow() {
        return this.name;
    };
    salaryshow() {
        return this.salary;
    };
};
let a = new Employee;
console.log(a);
a.name = 'Tania';
a.age = 14;
a.salary = 50000;
console.log(a.name, a.age, a.salary);
let b = new Employee;
let c = new Employee;
b.name = 'Vova';
b.salary = 25000;
c.name = 'Slava';
c.salary = 30000;
console.log(b.salary + c.salary);
let d = new Employee;
d.name = 'John';
d.salary = 10000;
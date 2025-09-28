type Person1 = { name: string; age: number };
type Employee = { salary: number; department: string };

type Staff = Person1 & Employee;

const emp: Staff = {
  name: "Arun",
  age: 21,
  salary: 50000,
  department: "IT"
};

console.log(emp);

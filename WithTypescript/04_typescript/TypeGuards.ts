type MyTypeOne = string | number | boolean;

function examFunc(value: MyTypeOne): void {
    if (typeof value === "string") {
        console.log("String:", value.toUpperCase());
    } else if (typeof value === "number") {
        console.log("Number:", value.toFixed(2));
    } else if (typeof value === "boolean") {
        console.log("Boolean:", value ? "It is TRUE" : "It is FALSE");
    }
}

examFunc("hello");
examFunc(34);
examFunc(true);   

// ++++++using classess++++++++

class Dog {
    bark(): void {
        console.log("Woff woff")
    }
}

class Cat {
    meow(): void {
        console.log("meow meow")
    }
}

function animalSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        animal.bark()
    } else if (animal instanceof Cat) {
        animal.meow();
    }
}

const d = new Dog();
const c = new Cat();

animalSound(d);
animalSound(c);

//  +++++using innersection+++++

type Empolyee = {
    id: number;
    name: string
};
type Manager = {
    department: string;
    role: string;
}

type ManagerWithEmpInfo = Empolyee & Manager;

const manager: ManagerWithEmpInfo = {
    id: 123,
    name: "Arun Kumar",
    department: "Engineering",
    role: "Full Stack Developer"
}

console.log(manager.id);
console.log(manager.name);
console.log(manager.department);
console.log(manager.role);

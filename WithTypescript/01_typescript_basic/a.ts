const person: { firstName: string; lastName: string; age: number } = {
    firstName: "John",
    lastName: "Doe",
    age: 30
}

// console.log(`Name: ${person.firstName} ${person.lastName} And age: ${person.age}`)

function printUser(): { name: string; age: number; location: string } {
    return {
        name: "Arun",
        age: 20,
        location: "India"
    };
}

const user = printUser();
console.log(user);

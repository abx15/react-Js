type Person = {
    name: string,
    age: number
};

function printPerson(person: Person) {
    console.log(`Name:${person.name} , Age: ${person.age}`)
}

const myPerson: Person = {
    name: "Alice",
    age: 25
}

printPerson(myPerson)

type User = {
    name: string,
    age: number,
    location: string
}

const printUserInfo = (user: User) => {
    return `Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`;

}

const userInfo = printUserInfo({ name: "Alex", age: 20, location: "Uttar Pradesh" })

console.log(userInfo);
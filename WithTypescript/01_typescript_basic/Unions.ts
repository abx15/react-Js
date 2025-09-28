let password: string | number = 'hello'

type UserInfo = {
    firstName: string;
    lastName: string;
    age: number;
}

type AccountDetails = {
    email: string;
    password: string;
}

let user: UserInfo | AccountDetails = {
    email: 'hello@mail.com',
    password: "23432"
}

console.log(user)
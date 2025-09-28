import { constants } from "buffer";

type UserAl = {
    name: string;
    age?: number;
   readonly location: string;
}
const info:UserAl ={
    name:"Arun",
    // age:20,
    location:"UP"
}

console.log(`Name: ${info.name}, Age: ${info.age} ,Location: ${info.location}`)
// interface Computer{
//     name:string;
//     ram:number;
//     hdd:number;
// }

// const computerExample:Computer = {
//     name:"MyPC",
//     ram:16,
//     hdd:512
// }

// console.log(computerExample.name);



//// example2

interface Movie{
    readonly title:string;
    reating:number;
    geneare?:string;
}

const movie1:Movie={
    title:"Inception",
    reating:8.8,
    geneare:"Sci-Fi"

};

// movie1.title="New Title"; // Error: Cannot assign to 'title' because it is a read-only property.

console.log(movie1);


//++++++++ generic function +++++++++++

function printinfo<T>(x: T): T {
    return x;

}

const str = printinfo<string>("Hello Generics");
const num = printinfo<number>(42);
const bool = printinfo<boolean>(true);

console.log(str);
console.log(num);
console.log(bool);


function uniqueData<T>(data: T): T {
    return data;
}

interface Dog {
    name: string;
    breed: string;
}

const dog1 = uniqueData<Dog>({ name: "Buddy", breed: "Golden Retriever" });
const dog2 = uniqueData<Dog>({ name: "Max", breed: "German Shepherd" });
console.log(dog1);
console.log(dog2);


function getRandomKeyValuePair<T>(obj: { [key: string]: T }): { key: string; value: T } {
    const keys = Object.keys(obj);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randomKey, value: obj[randomKey] };
}

const stringObj = { a: 'Apple', b: 'Banana', c: 'Cnt', d: 'Doo' }
const randomPair = getRandomKeyValuePair<string>(stringObj);
console.log(randomPair);



const numberObj = { a: 34, b: 67, c: 46, d: 93 }
const randomPair1 = getRandomKeyValuePair<number>(numberObj);
console.log(randomPair1);

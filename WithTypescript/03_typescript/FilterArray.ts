
function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
    return array.filter((item) => condition(item))
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenNumbers);
const oddNumbers = filterArray<number>(numberArray, (num) => num % 2 === 1);
console.log(oddNumbers);


const stringArr = ["banana", "date"];
const shortWords = filterArray<string>(stringArr, (word) => word.length < 6);
console.log(shortWords);


interface Fruit {
    name: string;
    color: string;
    quantity: number;
}

const fruitArray: Fruit[] = [
    { name: "Apple", color: "Red", quantity: 4 },
    { name: "Banana", color: "Yellow", quantity: 6 },
    { name: "Cherry", color: "Red", quantity: 4 }
]

const redFruits = filterArray<Fruit> (fruitArray,(fruit)=>fruit.color === "Red");

console.log(redFruits)

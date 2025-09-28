// regular func

// function addOne(num:number) {

//     return num+1;
// }

// const res = addOne(3)
// console.log(res)


// arrow fun

// const duble = (x: number, y: number) => x * y
// const res = duble(2, 10)
// console.log(res)

function greet (person = 'Anonoymus'){
    return `Hello ${person}`
}
const res = greet()
console.log(res)
// interfaces for function 


interface mathOperation{
    (x:number,y:number):number;
}

// usage

const add : mathOperation = (a,b) => a+b;
const sub : mathOperation = (a,b) => a-b;

console.log(add(10,5))
console.log(sub(10,5))
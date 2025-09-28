// +++++++++++++  normel function  +++++++++++++++

const printString = (x: string) => {
    return x;
};
const printNumber = (x: number) => {
    return (x);
};
const printBoolean = (x: boolean) => {
    return (x);
};

// console.log(printString("Hello"));
// console.log(printNumber(42));
// console.log(printBoolean(true));


function printNUmber (item:number,defaltValue:number):[number,number]{
    return[item,defaltValue];

}

const num1 = printNUmber(10,20);
console.log(num1);

// Type Guards

type MyType = string | number;

function exampleFunction(value: MyType): void {

    if (typeof value === "string") {

        console.log(value.toUpperCase())
    } else {
        console.log(value.toFixed(2));
    }
}

exampleFunction("hello");
exampleFunction(43)
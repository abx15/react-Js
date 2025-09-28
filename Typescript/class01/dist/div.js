"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const div = (a, b) => {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
};

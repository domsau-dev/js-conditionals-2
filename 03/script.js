"use strict";

let a = 2;
let b = 5;
let c = 6;

if (a <= 0 || b <= 0 || c <= 0) {
    console.log("Invalid numbers");
} else if (a < b + c && b < a + c && c < a + b) {
    console.log("Triangle");
} else {
    console.log("Not a triangle");
}
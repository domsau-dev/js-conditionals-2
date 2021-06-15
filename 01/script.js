"use strict";

function greaterNumber() {
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    if (a > b) {
        document.getElementById("result").value = a;
    } else {
        document.getElementById("result").value = b;
    }
}
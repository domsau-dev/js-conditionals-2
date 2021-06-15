"use strict";

function greatestNumber() {
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    let c = parseFloat(document.getElementById("number3").value);

    if ((a > b && a > c) || ((a == b) && a > c) || ((a == c) && a > b)) {
        document.getElementById("result").value = a;
    } else if ((b > a && b > c) || ((b == c) && b > a)) {
        document.getElementById("result").value = b;
    } else {
        document.getElementById("result").value = c;
    }
}
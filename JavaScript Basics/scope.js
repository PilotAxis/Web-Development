"use strict";
let number = 10;
console.log(number);
{
    number = 20;
    let num = 5
    console.log(number);
    {
        var mum = 6;
        console.log(number);
        console.log(num);
    }
}
let num = 4;
console.log(num);
console.log(mum);
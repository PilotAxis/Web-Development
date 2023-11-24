"use strict";
/*
var global = 500;
function testfunction(){
    var local = 200;
    console.log(global);
    console.log(local);
}
testfunction()
console.log(global);
console.log(local);
*/

let counter = 10;
{
    let counter = 20;
    console.log(counter);
}
console.log(counter);
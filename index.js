/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year shoudl use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP879064";
    // e.g. return "UP654321";
}

function fn() {
    return "Finlay";
}

function sn() {
    return "Plant";
}

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function checkObject(a) {
    a.checked = true
    return a;
}

function checkObjectInside(a) {
    if  (typeof a.data == "object") {
        a.checked=true
      }
    return a;
}

function arraySet(x, y, z){

      let a = a[x];
          a.prototype.splice(y, z);
      return a;
// }
//
// function addAll(){
//
//   return;
// }
//
// function larger(){
//
//   return;
// }
//
// function largest(){
//
//   return;
// }
//
// function compare(){
//
//   return;
// }
//
// function addToAll(){
//
//   return;
// }

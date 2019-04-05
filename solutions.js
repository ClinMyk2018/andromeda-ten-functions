"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(input) {
    return input === true;
}
// -------------


function isFalse(type) {
    return type === false;
}

// -------------


function not(nt) {
    return !nt;
}

// ---------------


function addOne(x) {
    return parseFloat(x) + 1;
}
// --------------

function isNumber(input) {
    return (!isNaN(input));
}

function isEven(input) {
    if (isNumber(input)){
        return input % 2 === 0;
    }else{
        return false;
    }
}

//-----------

function isIdentical(m, l) {
    return (m === l);
}

// ----------

function isEqual(x, n) {
    return (x == n);
}

// ------------

function or(f, u) {
    return (f || u);
}

// ------------

function and(j, t) {
    return (j && t);
}

//--------------

function concat(p, q) {
    return "" + p + q;
}
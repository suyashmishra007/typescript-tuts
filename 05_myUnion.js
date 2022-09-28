"use strict";
exports.__esModule = true;
var score = 33;
score = 23;
score = "23";
var suyash = { username: "suyash", id: 12 };
function getDbId(id) {
    // making some API calls.
    console.log("DB id is ".concat(id));
}
getDbId(3);
getDbId("2");
function DbId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
    else {
        id += 2;
    }
}
// array
var data = [1, 2, 3, 4];
var dataStr = ["1", "2", '3'];
var dataMix = [1, 2, 3, true];
console.log(dataMix);

"use strict";
/*

function addTwo(num : number){
    return num + 2;
}
addTwo(2);

function getUpper(val : string){
    return val.toUpperCase();
}

function signUpUser(name: string , email: string , isPaid: boolean){

}

signUpUser("Suyash",  'sm@gmail.com', true);

let loginUser = (name : string , email : string , isPaid :boolean = false) => {
}

loginUser('S',"S@S.com");

*/
exports.__esModule = true;
function addThree(num) {
    return num + 3;
}
// function getValue(myVal : number){
//     if(myVal > 5){
//         return true;
//     }
//     return "200 OK";
// }
var getHello = function (s) {
    return "S";
};
var heros = ['thor', 'spiderman', 'ironman'];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleErr(err) {
    console.log(err);
}
function handleErr(errMsg) {
    throw new Error(errMsg);
}

// const user :(number | string)[] = [1,'sm'];
// order of the array matters.

let tUser :[string , number , boolean];
tUser = ['hc',1,true];

let rgb : [ number,number,number ];
rgb = [23,42,53];

type User = [number , string];

const newUser : User  = [112,"example@google.com"]
newUser[1] = "sm@370@gmail.com";


// https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array
// newUser.push(true); 



export {};
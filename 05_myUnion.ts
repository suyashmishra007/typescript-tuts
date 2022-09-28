let score : number | string  = 33 ;

score = 23 ;
score = "23";
// score = true  , GIVES ERROR

type User = {
    name : string  ;
    id : number 
}

type Admin  = {
    username : string ; 
    id : number
}

let suyash : User | Admin = { username  : "suyash"  , id  : 12 }

function getDbId(id : number | string){
    // making some API calls.
    console.log(`DB id is ${id}`);
}

getDbId(3);
getDbId("2");

function DbId(id : number | string){
    if(typeof id === 'string'){
        id.toLowerCase();
    }else {
        id += 2; 
    }
}

// array

const data  : number[] = [1,2,3,4];
const dataStr  : string[] = ["1","2",'3'];
const dataMix  : (string | number | boolean)[] = [1,2,3,true];

let seatAllotment: "aisle" | 'middle' | 'window';
// seatAllotment = "crew"; NOT ALLOWED
export{};
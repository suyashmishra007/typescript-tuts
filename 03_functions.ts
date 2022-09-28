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


function addThree(num : number) : number {
    return num + 3 ;
}


// function getValue(myVal : number){
//     if(myVal > 5){
//         return true;
//     }
//     return "200 OK";
// }


const getHello = (s : string) : string => {
    return "S";
}

const heros = ['thor' , 'spiderman' , 'ironman'];

heros.map((hero : string)  : string => {
    return `hero is ${hero}`;
})

function consoleErr(err :string) : void {
    console.log(err);
}

function handleErr(errMsg :string) : never {
    throw new Error(errMsg);
}

export{};
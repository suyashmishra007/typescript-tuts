
interface User{
    readonly dbId : number,
    email : string , 
    userId : number , 
    googleId ?: string , 

    // method 1
    // startTrail : () => string 

    // method 2 , preferred way of writing
    startTrail() : string , 

    getCoupon(couponName : string) : number


}

interface User {
    githubToken : string
}

interface Admin extends User{
    role : "admin" | "ta"  | 'learner'
}



const suyash : User = {
    dbId : 23, 
    email : "s@s.com" , 
    userId : 123 ,
    startTrail : ()=> {
        return "trail started"
    },
    getCoupon : (name : "suyash")=>{
        return 10;
    },
    githubToken : "234",
}


const suyashAdmin : Admin = {
    dbId : 23, 
    email : "s@s.com" , 
    userId : 123 ,
    startTrail : ()=> {
        return "trail started"
    },
    getCoupon : (name : "suyash")=>{
        return 10;
    },
    githubToken : "234",
    role : "admin"
}
suyash.email = "s25@gmail.com";
export {};


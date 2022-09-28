/*

const User =  {
    name : "Suyash" , 
    email : "s@s.com",
    isActive : true
}

function createUser({name : string , isPaid : boolean}){}

let newUser = {name : "s" , isPaid : true , email : "s@s.com"};

createUser(newUser);

function createCourse(name : string , amountPaid : number):{name : string , price : number}{
    return {name : name , price : amountPaid};
}

*/

/**
 
 type User = {
     name : string ;
     email : string ; 
     isActive : boolean;
    }
    
    function createUser(user : User) : User{
        return {name : "s" , email : "S@s.com", isActive : true};
    }
    
    createUser({name : "s" , email : "S@s.com", isActive : true});
    
*/

type User = {
    // cannot modify _id.
    readonly _id : string ;
    name : string  ;
    email : string ; 
    isActive : boolean ;
    credcardDetails? : number // cardcreadDetails is optional
}

let myUser : User = {
    _id : "123",
    name : "h" , 
    email : "h@h.com",
    isActive : false
}

// ALLOWED
myUser.email = "g@g.com"

// NOT-ALLOWED
// myUser._id = "g@g.com"

type cardNumber  = {
    cardnumber : string 
}

type cardDate  = {
    cardDate: string 
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}



export {};
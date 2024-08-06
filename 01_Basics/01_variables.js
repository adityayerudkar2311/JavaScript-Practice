const accountId = 144553
let accountEmail = "aditya@google.com"
var accountPassword ="12345"
accountCity ="Pune"
let accountState;


// accountId = 2
accountEmail ="aditya@y.com"
accountPassword="21212121"
accountCity="Bengalure"


console.log(accountId);

/*
Prefer not to use var
Because of issue in block scope and function scope 
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

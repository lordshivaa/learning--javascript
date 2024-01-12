const accountId = 12345
let accountEmail = "shivam@google.com"
var accountPassword = "12321"

accountCity = "jaipur"

accountEmail = "shiv@12gmail.com"
accountPassword = "21212112"
accountCity = "bengaluru"

/*
Prefer not to us var
because of issue in block scope {} and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])


function returnFullName(firstName, lastName){
    if(!firstName || !lastName || typeof firstName !=="string" || typeof lastName !=="string"){
        return "invalid parameter"
    }
    return firstName+" "+lastName
}

console.log(returnFullName("Pushkar","Singh"));
console.log(returnFullName("Sita", ""));
console.log(returnFullName("", "Sharma"));
console.log(returnFullName(123, "Kumar"));
console.log(returnFullName());    
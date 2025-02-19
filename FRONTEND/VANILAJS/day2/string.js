function isSubstring(mainString,subString) {
    return mainString.includes(subString)
}

console.log(isSubstring("Pushkar","kar"))
console.log(isSubstring("hello world", "world")); 
console.log(isSubstring("javascript programming", "script")); 
console.log(isSubstring("openAI chatbot", "GPT")); 
console.log(isSubstring("abcdef", "gh")); 
console.log(isSubstring("testing substring function", "substring"));
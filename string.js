let data = "malar"
let reversedString=reverseString(data)
console.log("Reversed String: " , reversedString)
console.log("Is Palindrome: " , isPalindrome(data,reversedString))

function reverseString(str)
{
    let chars = str.split("")
    let reversed = ""
    for (let i = chars.length - 1; i >= 0; i--) {
        reversed = reversed + chars[i]
    }
    return reversed
}

function isPalindrome(orginalString, reversedString) 
{
   
    if (orginalString == reversedString) 
            return true
    
    else 
            return false
}


//? Problem Statement
// Given a string s, return true if it is a palindrome, or false otherwise.
// The function must work for complex phrases.
// So it must be case insensitive and avoil all non-alphanumerics.

//? Input: s = "A man, a plan, a canal: Panama"
//? Output: true

const isPalindrome = (str) => {
    const normalized  = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = normalized.split('').reverse().join('');
    
    return normalized === reversed;
};

const isPalindromeTwoPointer = (str) => {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = normalized.length - 1;
    
    while (left < right) {
        if (normalized[left] !== normalized[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("A man, a plan, a canal: Panamaaa"));

console.log(isPalindromeTwoPointer("A man, a plan, a canal: Panama"));
console.log(isPalindromeTwoPointer("A man, a plan, a canal: Panamaaa"));
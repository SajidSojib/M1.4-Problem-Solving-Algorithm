//? check if brackets are valid or not

import { Stack } from "../M3-Besic-DS/3stack.js";
const bracketChecker = (str) => {
    const stack = new Stack();
    const bracketOrder = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for(let i = 0; i < str.length; i++){
        if(str[i] === '(' || str[i] === '[' || str[i] === '{'){
            stack.push(str[i]);
        }else if(str[i]===')' || str[i] === ']' || str[i] === '}'){
            if(stack.isEmpty() || stack.peak() !== bracketOrder[str[i]]){
                return false;
            }
            stack.pop();
        }
    }
    return stack.isEmpty();
};

console.log(bracketChecker("({[]})")); // true
console.log(bracketChecker("({[})"));  // false
console.log(bracketChecker("("));      // false
console.log(bracketChecker(")[]"));      // false
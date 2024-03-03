import {puzzleInput} from "./puzzle.js"

const puzzleArray = puzzleInput.split("\n")

// Part 1

const filterVowels = (string) => {
    const matches = string.match(/[aeiou]/gi);
    return matches && matches.length >= 3
}

const filterDoubleLetters = (string) => {
    return (/(\w)\1/).test(string);
}

const filterConsonants = (string) => {
    const forbiddenSubstrings = ["ab", "cd", "pq", "xy"]
    for (const substring of forbiddenSubstrings) {
        if (string.includes(substring)) {
            return false
        }
    }
    return true
}

const niceStrings1 = puzzleArray.filter((string)=>{
    return filterVowels(string) && filterDoubleLetters(string) && filterConsonants(string)
})

console.log(`The amount of nice strings in part 1 is ${niceStrings1.length}.`)

// Part 2

const filterPairs = (string) => {
    for (let i = 0; i < string.length - 1; i++) {
        const pair = string.substring(i, i + 2);
        const restOfString = string.substring(i + 2);
        if (restOfString.includes(pair)) {
            return true;
        }
    }
    return false;
};

const filterOreoLetters = (string) => {
    for (let i = 0; i < string.length - 2; i++) {
        if (string[i] === string[i + 2]) {
            return true;
        }
    }
    return false;
};


const niceStrings2 = puzzleArray.filter((string)=>{
    return filterPairs(string) && filterOreoLetters(string)
})

console.log(`The amount of nice strings in part 2 is ${niceStrings2.length}.`)
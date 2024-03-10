import puzzleInput from './puzzle.js';

const puzzleArray = puzzleInput.split('\n')

let totalNumOfCharsInCode = 0
let totalNumOfCharsInMemory = 0

for(const string of puzzleArray) {
    
    console.log(JSON.stringify(string));

    totalNumOfCharsInCode += string.length
    
    for (let i = 1; i < string.length - 1; i++) {


        if (string[i] === '\\') {
            if (string[i + 1] === '\\' || string[i + 1] === '"') {
                i += 1
                // console.log(string)
            } else if (string[i + 1] === 'x') {
                i += 3
            }
        }

        totalNumOfCharsInMemory += 1
    }
}

console.log(`The total amount of characters of code in the file (${totalNumOfCharsInCode}) minus the total number of characters in memory for the values of the strings (${totalNumOfCharsInMemory}) is ${totalNumOfCharsInCode - totalNumOfCharsInMemory}.`)
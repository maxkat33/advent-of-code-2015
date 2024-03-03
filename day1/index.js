import { puzzleInput } from "./puzzle.js"

let count = 0
let hasCountGoneBelowZero = false


function updateCount(puzzle) {
    for (let i = 0; i < puzzle.length; i++) {
        if (puzzle[i] === "(") {
            count += 1 
        }
        else if (puzzle[i] === ")") {
            count -= 1
            if (count < 0 && !hasCountGoneBelowZero) {
                hasCountGoneBelowZero = true
                console.log(`${i} is the position at which Santa first enters the basement.`)
            }
        }
    }
}

updateCount(puzzleInput)

console.log(`${count} is Santa's final position.`)
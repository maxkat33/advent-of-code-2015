import puzzleInput from "./puzzle.js"

const puzzleArray = puzzleInput.split("\n")

let lightsGrid = new Array(1000).fill(0).map(()=> new Array(1000).fill(0))

puzzleArray.forEach(instruction => {
    const parts = instruction.split(' ')
    console.log(parts)
    const action = parts[0] === 'toggle' ? 'toggle' : parts[1]
    const coordsStart = action === 'toggle' ? parts[1] : parts[2]
    const coordsEnd = action === 'toggle' ? parts[3] : parts[4]
    
    const [xStart, yStart] = coordsStart.split(',').map(num => parseInt(num))
    const [xEnd, yEnd] = coordsEnd.split(',').map(num => parseInt(num))
    
    // Part 1 Logic 
    //
    // for (let x= xStart; x <= xEnd; x++) {
    //     for (let y = yStart; y <= yEnd; y++) {
    //         if (action === 'on') {
    //             lightsGrid[x][y] = 1
    //         }
    //         else if (action === 'off') {
    //             lightsGrid[x][y] = 0
    //         }
    //         else if (action === 'toggle') {
    //             lightsGrid[x][y] = lightsGrid[x][y] === 0 ? 1 : 0
    //         }
    //     }
    // }

    for (let x = xStart; x <= xEnd; x++) {
        for (let y = yStart; y <= yEnd; y++) {
            if (action === 'on') {
                lightsGrid[x][y] += 1
            }
            else if (action === 'off' && lightsGrid[x][y]) {
                lightsGrid[x][y] -= 1
            }
            else if (action === 'toggle') {
                lightsGrid[x][y] += 2
            }
        }
    }
})


function countLightsOn(grid) {
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                count += 1
            }
        }
    }
    return count
}

function sumTotalBrightness(grid) {
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            count += grid[i][j]
        }
    }
    return count
}

// Part 1 Solution
// console.log(`There are ${countLightsOn(lightsGrid)} lights turned on.`)

// Part 2 Solution
console.log(`The total brightness of all lights combined is ${sumTotalBrightness(lightsGrid)}.`)



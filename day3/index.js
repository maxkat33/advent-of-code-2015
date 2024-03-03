import { puzzleInput } from "./puzzle.js"

// Part 1

let uniqueHouses1 = [{x: 0, y: 0}]
let coordinates = {x: 0, y: 0}

for (let i=0; i < puzzleInput.length; i++){
    let { x, y } = coordinates
    if (puzzleInput[i] === "^") {
        coordinates = {...coordinates, y: y + 1}
    }
    else if (puzzleInput[i] === ">") {
        coordinates = {...coordinates, x: x + 1}
    }
    else if (puzzleInput[i] === "v") {
        coordinates = {...coordinates, y: y - 1}
    }
    else if (puzzleInput[i] === "<") {
        coordinates = {...coordinates, x: x - 1}
    }
    
    if (!uniqueHouses1.some(house => house.x === coordinates.x && house.y === coordinates.y)) {
        uniqueHouses1.push({ ...coordinates });
    }
}

console.log(`There are ${uniqueHouses1.length} houses that receive at least one present when Santa delivers presents on his own.`)

// Part 2

let uniqueHouses2 = [{x: 0, y: 0}]

let santaCoords = {x: 0, y: 0}
let roboSantaCoords = {x: 0, y: 0}

for (let i=0; i < puzzleInput.length; i++){
    if (i % 2 === 0) {
        let { x, y } = santaCoords
        if (puzzleInput[i] === "^") {
            santaCoords = {...santaCoords, y: y + 1}
        }
        else if (puzzleInput[i] === ">") {
            santaCoords = {...santaCoords, x: x + 1}
        }
        else if (puzzleInput[i] === "v") {
            santaCoords = {...santaCoords, y: y - 1}
        }
        else if (puzzleInput[i] === "<") {
            santaCoords = {...santaCoords, x: x - 1}
        }
        if (!uniqueHouses2.some(house => house.x === santaCoords.x && house.y === santaCoords.y)) {
            uniqueHouses2.push({ ...santaCoords });
        }
    } else {
        let { x, y } = roboSantaCoords
        if (puzzleInput[i] === "^") {
            roboSantaCoords = {...roboSantaCoords, y: y + 1}
        }
        else if (puzzleInput[i] === ">") {
            roboSantaCoords = {...roboSantaCoords, x: x + 1}
        }
        else if (puzzleInput[i] === "v") {
            roboSantaCoords = {...roboSantaCoords, y: y - 1}
        }
        else if (puzzleInput[i] === "<") {
            roboSantaCoords = {...roboSantaCoords, x: x - 1}
        }
        if (!uniqueHouses2.some(house => house.x === roboSantaCoords.x && house.y === roboSantaCoords.y)) {
            uniqueHouses2.push({ ...roboSantaCoords });
        }
    }
}

console.log(`There are ${uniqueHouses2.length} houses that receive at least one present when Santa AND Robo-Santa deliver presents together.`)

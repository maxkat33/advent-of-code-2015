import {puzzleInput} from "./puzzle.js"

function calcGiftSurfaceArea(l, w, h) {
    return 2*l*w + 2*w*h + 2*h*l
}

function calcSmallestSide(l, w, h) {
    // return smallest value out of l*w, l*h, w*h
    const minimumValue = Math.min(l*w, l*h, w*h)
    return minimumValue
}

function calcTotalPaper(l, w, h) {
    const totalSurfaceArea = calcGiftSurfaceArea(l, w, h) + calcSmallestSide(l, w, h)
    return totalSurfaceArea
}


function calcBowLength (l, w, h)  {
    return l*w*h
}

function calcRibbonLength(l, w, h) {
    return 2*(Math.min(l+w, l+h, w+h))
}

let totalSqFtPaper = 0

let totalRibbon = 0

const giftsArray = puzzle.split('\n')

const giftsObjArray = giftsArray.map(gift =>{
    const dimensions = gift.split('x');
    return ({
        l: parseInt(dimensions[0], 10),
        w: parseInt(dimensions[1], 10),
        h: parseInt(dimensions[2], 10)
    })
})

console.log(giftsArray)
console.log(giftsObjArray)


const egArray = [{l: 2, w: 3, h: 4}, {l:1, w:1, h:10}]

for (let i = 0; i < giftsObjArray.length; i++) {
    totalSqFtPaper = totalSqFtPaper + calcTotalPaper(giftsObjArray[i].l, giftsObjArray[i].w, giftsObjArray[i].h)
    totalRibbon = totalRibbon + calcBowLength(giftsObjArray[i].l, giftsObjArray[i].w, giftsObjArray[i].h) + calcRibbonLength(giftsObjArray[i].l, giftsObjArray[i].w, giftsObjArray[i].h)
}



console.log(totalRibbon)


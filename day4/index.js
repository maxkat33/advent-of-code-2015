const CryptoJS = require("crypto-js")

const puzzleKey = "yzbqklnj"

function createMD5Hash(input) {
    return CryptoJS.MD5(input).toString()
}

// const testKey = "abcdef609043"
// const testHash = CryptoJS.MD5(testKey).toString()

// console.log(createMD5Hash(puzzleKey + "3683616"))

function findPuzzleHash(puzzleKey){

    let i = 0;
    let hash = "";

    while(hash.substring(0, 6) !== "000000") {
        i++;
        hash = createMD5Hash(puzzleKey + i)
    }

    return { i, hash}
}

const puzzleHash = findPuzzleHash(puzzleKey)

console.time('hashing');
console.log(puzzleHash)
console.timeEnd('hashing');



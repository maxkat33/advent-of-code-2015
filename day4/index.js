const CryptoJS = require("crypto-js")

const puzzleKey = "yzbqklnj"

function createMD5Hash(input) {
    return CryptoJS.MD5(input).toString()
}

// const testKey = "abcdef609043"
// const testHash = CryptoJS.MD5(testKey).toString()

// console.log(createMD5Hash(puzzleKey + "3683616"))

function findPuzzleHash(puzzleKey, length){

    let i = 0;
    let hash = "";

    const target = '0'.repeat(length)

    while(hash.substring(0, length) !== target) {
        i++;
        hash = createMD5Hash(puzzleKey + i)
    }

    return { i, hash}
}


console.time('5ZeroesHashRuntime');
const puzzleHash5 = findPuzzleHash(puzzleKey, 5)
console.log(`The lowest number combined with the secret key to create an MD5 hash that begins with 5 zeroes is ${puzzleHash5.i} and the resulting hash is ${puzzleHash5.hash}`)
console.timeEnd('5ZeroesHashRuntime');


console.time('6ZeroesHashRuntime');
const puzzleHash6 = findPuzzleHash(puzzleKey, 6)
console.log(`The lowest number combined with the secret key to create an MD5 hash that begins with 6 zeroes is ${puzzleHash6.i} and the resulting hash is ${puzzleHash6.hash}`)
console.timeEnd('6ZeroesHashRuntime');
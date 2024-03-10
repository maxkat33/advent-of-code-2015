import puzzleInput from "./puzzle.js";

const puzzleArray = puzzleInput.split('\n')
let circuit = {}

puzzleArray.forEach(instruction => {
    
    const parts = instruction.split(' ')
    const target = parts[parts.length - 1]

    if (parts[1] === '->') {
        circuit[target] = parts[0];
    } else if (parts[0] === "NOT") {
        circuit[target] = ['NOT', parts[1]];
    } else {
        // This handles AND, OR, LSHIFT, RSHIFT operations
        circuit[target] = [parts[1], parts[0], parts[2]];
    }

})

const computeSignal = (wire) => {

    if (typeof circuit[wire] === 'number') {
        return circuit[wire];
    }

    if (!isNaN(parseInt(wire))) {
        return parseInt(wire);
    }

    if (!isNaN(parseInt(circuit[wire]))) {
        return parseInt(circuit[wire]);
    }

    const instruction = circuit[wire]
    let result    

    switch (instruction[0]) {
        case 'NOT':
            result = ~computeSignal(instruction[1])
            break
        case 'AND':
            result = computeSignal(instruction[1]) & computeSignal(instruction[2])
            break
        case 'OR':
            result = computeSignal(instruction[1]) | computeSignal(instruction[2])
            break
        case 'LSHIFT':
            result = computeSignal(instruction[1]) << computeSignal(instruction[2])
            break
        case 'RSHIFT':
            result = computeSignal(instruction[1]) >> computeSignal(instruction[2])
            break
        default:
            // Direct assignment or previously computed
            result = computeSignal(instruction);
            break;
    }

    // Ensures result is in 16-bit format
    result = result & 0xFFFF;
    // Cache the computed signal 
    circuit[wire] = result; 

    return result;
}

// Part 1
let signalForA = computeSignal("a")
console.log(`The signal that is ultimately provided to wire a is ${signalForA}.`)

// Part 2
// re-initialising the circuit
circuit = {}
// resetting the wires to their original signals
puzzleArray.forEach(instruction => {
    const parts = instruction.split(' ');
    const target = parts[parts.length - 1];
    if (parts[1] === '->') {
        circuit[target] = parts[0];
    } else if (parts[0] === "NOT") {
        circuit[target] = ['NOT', parts[1]];
    } else {
        circuit[target] = [parts[1], parts[0], parts[2]];
    }
});

// overriding signal b to be the orignal signal a
circuit["b"] = signalForA.toString()
// recomputing signal a with the new b signal
signalForA = computeSignal("a")

console.log(`After overriding wire b and resetting the other wires, the new signal that is ultimately provided to wire a is ${computeSignal('a')}.`)




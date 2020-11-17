// Common Constants and Variables
const victorMass = 54;
const victorHeight = 1.7;
const johnMass = 45;
const johnHeight = 1.6;
const pauMass = 46;
const pauHeight = 1.8;
const analynMass = 41;
const analynHeight = 1.5;
const amandaMass = 42;
const amandaHeight = 1.4;

let victorBMI = (victorMass / victorHeight**2);
let johnBMI = (johnMass / johnHeight**2);
let pauBMI = (pauMass / pauHeight**2);
let analynBMI = (analynMass / analynHeight**2);
let amandaBMI = (amandaMass / amandaHeight**2);


// Creates variable for normal refactoring
let two_compare = victorBMI < johnBMI;

// If Else If Refactor
if (two_compare == true) {
    console.log('Victor is healthier than Victor, with a BMI of ' + victorBMI.toFixed(1) + '.')
} else {
    console.log('John is healthier than Victor, with a BMI of ' + johnBMI.toFixed(1) + '.')
};

// Ternary Operator Refactor
(two_compare == true) ? console.log('Victor is healthier than Victor, with a BMI of ' + victorBMI.toFixed(1) + '.') 
: console.log('John is healthier than Victor, with a BMI of ' + johnBMI.toFixed(1) + '.');

// Switch Statement Refactor
switch (two_compare) {
    case true:
        console.log('Victor is healthier than Victor, with a BMI of ' + victorBMI.toFixed(1) + '.');
        break;
    case false:
        console.log('John is healthier than Victor, with a BMI of ' + johnBMI.toFixed(1) + '.');
        break;
    default:
        console.log('You created an error!');
};


// Creates object and array for sorting purposes in challenge
var arrayBMI = [victorBMI, johnBMI, pauBMI, analynBMI, amandaBMI];

var dictBMI = {
    'Victor': victorBMI,
    'John': johnBMI,
    'Pau': pauBMI,
    'Analyn': analynBMI,
    'Amanda': amandaBMI
};

// If Else If Refactor - Challenge
var min = Math.min(...arrayBMI);
if ( min == dictBMI['Victor'] ) {
    console.log('Victor is the healthiest Avion School employee, with a BMI of ' + min.toFixed(1) + '.');
} else if ( min == dictBMI['John'] ) {
    console.log('John is the healthiest Avion School employee, with a BMI of ' + min.toFixed(1) + '.');
} else if ( min == dictBMI['Pau'] ) {
    console.log('Pau is the healthiest Avion School employee, with a BMI of ' + min.toFixed(1) + '.');
} else if ( min == dictBMI['Analyn'] ) {
    console.log('Analyn is the healthiest Avion School employee, with a BMI of ' + min.toFixed(1) + '.');
} else {
    console.log('Amanda is the healthiest Avion School employee, with a BMI of ' + min.toFixed(1) + '.');
};

// Ternary Operator Refactor - Challenge
var result_ternary = Object.keys(dictBMI).reduce( (a, b) => dictBMI[a] < dictBMI[b] ? a : b );
console.log(result_ternary + ' is the healthiest Avion School employee.');

// Switch Statement Refactor - Challenge
switch (min) {
    case dictBMI['Victor']:
        console.log('Victor is the healthiest Avion School employee, with a BMI of ' + victorBMI.toFixed(1) + '.');
        break;
    case dictBMI['John']:
        console.log('John is the healthiest Avion School employee, with a BMI of ' + johnBMI.toFixed(1) + '.');
        break;
    case dictBMI['Pau']:
        console.log('Pa is the healthiest Avion School employee, with a BMI of ' + johnBMI.toFixed(1) + '.');
        break;
    case dictBMI['Analyn']:
        console.log('Analyn is the healthiest Avion School employee, with a BMI of ' + johnBMI.toFixed(1) + '.');
        break;
    case dictBMI['Amanda']:
        console.log('Amanda is the healthiest Avion School employee, with a BMI of ' + johnBMI.toFixed(1) + '.');
        break;
    default:
        console.log('You created an error!');
};







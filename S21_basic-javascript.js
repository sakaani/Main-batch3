var victorMass = 54;
var victorHeight = 1.7;
var johnMass = 45;
var johnHeight = 1.6;

let victorBMI = (victorMass / victorHeight**2);
let johnBMI = (johnMass / johnHeight**2);
let result = victorBMI > johnBMI;

if(result == true) {
    console.log('Is Victor unhealthier than John? True')
} else {
    console.log('Is Victor unhealthier than John? False')
};




pragma circom 2.1.6;

include "circomlib/circuits/comparators.circom";
include "circomlib/circuits/poseidon.circom";

template AgeVerification() {

    // Private inputs
    signal input dob;
    signal input secret;
    signal input age;

    // Public outputs
    signal output commitment;
    signal output isAdult;

    // Create commitment from DOB and secret
    component hash = Poseidon(2);

    hash.inputs[0] <== dob;
    hash.inputs[1] <== secret;

    commitment <== hash.out;

    // Prove age >= 18
    component gte = GreaterEqThan(8);

    gte.in[0] <== age;
    gte.in[1] <== 18;

    isAdult <== gte.out;
}

component main = AgeVerification();
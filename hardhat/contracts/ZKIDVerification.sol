// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./AgeVerifier.sol";

contract ZKIDVerification {
    Groth16Verifier public immutable verifier;

    struct VerificationRecord {
        bool verified;
        uint256 timestamp;
    }

    mapping(string => VerificationRecord) private records;

    event IdentityVerified(
        string proofId,
        uint256 timestamp
    );

    constructor(address _verifier) {
        verifier = Groth16Verifier(_verifier);
    }

    function verifyAgeProof(
        string memory proofId,
        uint[2] calldata pA,
        uint[2][2] calldata pB,
        uint[2] calldata pC,
        uint[2] calldata publicSignals
    ) external {
        bool valid = verifier.verifyProof(
            pA,
            pB,
            pC,
            publicSignals
        );

        require(
            valid,
            "Invalid zero-knowledge proof"
        );

        require(
            publicSignals[1] == 1,
            "Age requirement not satisfied"
        );

        records[proofId] = VerificationRecord({
            verified: true,
            timestamp: block.timestamp
        });

        emit IdentityVerified(
            proofId,
            block.timestamp
        );
    }

    function isVerified(
        string memory proofId
    ) external view returns (bool) {
        return records[proofId].verified;
    }

    function getVerification(
        string memory proofId
    )
        external
        view
        returns (
            bool verified,
            uint256 timestamp
        )
    {
        VerificationRecord memory record =
            records[proofId];

        return (
            record.verified,
            record.timestamp
        );
    }
}

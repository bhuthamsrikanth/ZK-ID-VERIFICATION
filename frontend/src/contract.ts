export const CONTRACT_ADDRESS =
 "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

export const CONTRACT_ABI = [
 "function verifyAgeProof(string proofId, uint[2] pA, uint[2][2] pB, uint[2] pC, uint[2] publicSignals)",
  "function isVerified(string proofId) view returns (bool)",
  "function getVerification(string proofId) view returns (bool verified, uint256 timestamp)",
];

export const STUDENT_CONTRACT_ADDRESS =
  "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

export const STUDENT_CONTRACT_ABI = [
  "function verifyStudentProof(string proofId, uint[2] pA, uint[2][2] pB, uint[2] pC, uint[2] publicSignals)",
  "function isStudentVerified(string proofId) view returns (bool)",
  "function getStudentVerification(string proofId) view returns (bool verified, uint256 timestamp)",
];
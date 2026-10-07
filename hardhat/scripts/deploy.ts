import { network } from "hardhat";

async function main() {
  const { ethers } = await network.connect();

  console.log("Deploying AgeVerifier...");

  const AgeVerifier =
    await ethers.getContractFactory(
      "contracts/AgeVerifier.sol:Groth16Verifier"
    );

  const ageVerifier = await AgeVerifier.deploy();

  await ageVerifier.waitForDeployment();

  const ageVerifierAddress =
    await ageVerifier.getAddress();

  console.log(
    "AgeVerifier deployed to:",
    ageVerifierAddress
  );

  console.log("Deploying ZKIDVerification...");

  const ZKIDVerification =
    await ethers.getContractFactory(
      "ZKIDVerification"
    );

  const zkIdVerification =
    await ZKIDVerification.deploy(
      ageVerifierAddress
    );

  await zkIdVerification.waitForDeployment();

  const zkIdVerificationAddress =
    await zkIdVerification.getAddress();

  console.log(
    "ZKIDVerification deployed to:",
    zkIdVerificationAddress
  );

  console.log("");
  console.log("Deployment completed successfully.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
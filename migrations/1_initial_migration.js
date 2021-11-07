const Migrations = artifacts.require("Migrations");
const Rollup = artifacts.require("RollupProcessor");
const TurboVerifier = artifacts.require("TurboVerifier");
const VerificationKeys = artifacts.require("VerificationKeys");

const _verifierAddress = "0xe565Ef90c209c452e93F8068Ee90508fa579B086"
const _escapeBlockLowerBound = 4560
const _escapeBlockUpperBound = 4800
const _contractOwner = "0xe611462ca0354C81c8aDDF4216b1D0c6c8188726"

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  //first deploy verifier
  // deployer.deploy(VerificationKeys)
  // deployer.link(VerificationKeys,TurboVerifier)
  // deployer.deploy(TurboVerifier);
  //then deploy rollup
  deployer.deploy(Rollup, _verifierAddress, _escapeBlockLowerBound, _escapeBlockUpperBound, _contractOwner);
};

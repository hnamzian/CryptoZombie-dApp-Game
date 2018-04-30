var zombie = artifacts.require("./ZombieOwnership.sol");

module.exports = function(deployer) {
  deployer.deploy(zombie);
};
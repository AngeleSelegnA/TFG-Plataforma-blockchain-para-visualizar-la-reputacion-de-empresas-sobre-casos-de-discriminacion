const complaintContract = artifacts.require("complaintContract");

module.exports = function (deployer) {
  deployer.deploy(complaintContract);
};

const ConvertLib = artifacts.require('ConvertLib')
const MetaCoin = artifacts.require('MetaCoin')
const SimpleStorage = artifacts.require('SimpleStorage')

module.exports = function(deployer) {
  deployer.deploy(ConvertLib)
  deployer.link(ConvertLib, MetaCoin)
  deployer.deploy(MetaCoin)
  deployer.deploy(SimpleStorage)
} as Truffle.Migration

// because of https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export {}

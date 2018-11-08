// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: '*', // Match any network id
      gas: 3000000,
      from: 0x4537cde134f8b5df618ed9c07e700a2ed5fe6536
    }
  }
};

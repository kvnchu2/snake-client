const net = require('net');

/**
 * Establishes connection with the game server
 */
const { connect } = require('./client.js');

const { setupInput } = require('./input.js')

console.log('Connecting ...');
connect();


setupInput();
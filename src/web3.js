import Web3 from 'web3';

// rip out meta mask's web3 version
const web3 = new Web3(window.web3.currentProvider);

export default web3;

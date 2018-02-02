const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'stage century lonely ill return clinic traffic design gorilla drip wrist close',
    'https://rinkeby.infura.io/QIs6pUyXevZs4ZFoS4yS'
)

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account ', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there']})
        .send({ gas: 1000000, from: accounts[0]})

    console.log('Contract deployed to ', result.options.address)
}
deploy();
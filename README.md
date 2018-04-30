# Crypto Zombie dApp Game

This is a Decentralised App (dApp) Game developed based on Ethereum blockchain. Smart contracts as the core of this project are written 
in Solidity language. Actually I walked through an interaction tutorial from cryptoZombie.io and I used those codes as the start point
to develop the game in a new branch. The project is accompanied by an html file (index.html) as a GUI for the dApp. Certainly I will 
improve it in near future and publish it here.


# Requirements

1- Install `node` and `npm`

2- Install `Ganache-cli` as your private testnet

3- Install `truffle` to compile, test and deploy your smart contracts.

4- Install `web3.js` in order for the front-end could interact with deployed scontract.

# Story of the Game

The game is very easy, it's all about Zombies and kitties. You can create Zombie, level it up, transfer it to others and attack to other's
Zombies or Kitties. Who are Kitties? They are from another dApp Game, cryptoKitties. It's very cool that thanks to blockchain technology
contracts can also interact to each other easily. This is the way in which Zombies can attack at Kitties in another separate dApp Game.

# How to Play?

1- Clone the repository into your directory.

2- You can compile the contracts using `truffle compile`

3- Run `ganache-cli` and you will get 10 key pairs as your account.

4- Also you can use Ropsten as your testnet instead of ganache.

5- Go to Remix.ethereum.org and open the contracts in Remix IDE.

6- In `coompile` tab select `ZombiesOwnership.sol` and compile it.

7- In `Run` tab select `Web provider` as your Environment if you use ganache or `Injected Web3` if you use Ropsten.

8- Select `ZombiesOwnership` and hit the create button to deploy the contract.

9- Now copy the contract address, and in the index.html copy it instead of current cryptoZombiesAddress variable.

That's it. Now open index.html in your browser and you can play with your Zombies.

# Future development

I do plan to improve the GUI of the Game showing zombies graphically. Also I have an idea to add a new feature in which players with cetain
conditions can sell their zombies in an Auction and get more tokens.

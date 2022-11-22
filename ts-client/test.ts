


import { txClient } from './cosmos.bank.v1beta1';

import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";


const mnemonic = "satisfy artist travel execute six make agree ozone spike rabbit inherit example laptop allow simple diagram until wisdom ill bright sight universe village bamboo";
const wallet = async () => {
	return  await  DirectSecp256k1HdWallet.fromMnemonic(mnemonic);
}
console.log(wallet())



const client = txClient({
   signer:wallet(),
    prefix: 'cosmos',
    addr: 'http://192.168.241.130:26657'
});

const tx_result = client.sendMsgSend(
    {
       value: {
           amount: [
                {
                   amount: '200',
                   denom: 'token',
                },
            ],
            fromAddress: 'cosmos1sz9gwtntv0wcx4rvga5pwup40f3ezyy4c0zwja',
            toAddress: 'cosmos1sz9gwtntv0wcx4rvga5pwup40f3ezyy4c0zwja'
        }
    }
);
console.log(tx_result);


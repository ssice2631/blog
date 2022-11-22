import {queryClient} from './cosmos.bank.v1beta1';





const client = await queryClient({addr: 'http://192.168.241.130:1317'});
const balances = await client.queryAllBalances('cosmos1sz9gwtntv0wcx4rvga5pwup40f3ezyy4c0zwja');


console.log(balances);

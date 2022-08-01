import React, { useEffect, useState } from "react";
import {ethers} from "ethers";


//*TODO: UNCLUDE VARIABLES FROM ENV
import { WALLET_BUILDER_ABI, WALLET_BUILDER_ADDRESS, BEARER_TOKEN, FAKE_USDT_ABI, FAKE_USDT_ADDRESS} from "../utils/env"



export const WalletContext = React.createContext({
    address: "x0...",
    setAddress: () => {}
  })


export const WalletProvider = ({props}) => {

    const setAddress = (address) => {
        setState({...state, address: address})
      }
    
      const initState = {
        address: "x0...",
        setAddress: setAddress
      } 

    const [state, setState] = useState(initState)


    const createWallet = async () => {
        // let provider = ethers.getDefaultProvider('rinkeby');
        // let signer = new ethers.Wallet(BEARER_TOKEN, provider);
        // const walletBuilderContract = new ethers.Contract(WALLET_BUILDER_ADDRESS, WALLET_BUILDER_ABI, signer);
    
        // console.log({
        //     signer,
        //     walletBuilderContract
        // });

        // const walletUSDTAddress = await walletBuilderContract.createWallet();
        // const wallet_wait_event = await walletUSDTAddress.wait(2);
        // let _address = wallet_wait_event.events.pop().args[0];
        return "0x83CF55E4Ab74c8DE2700dE69CE11Eb4533547dfB";
        
    };

    const getHistory = async () => {
        console.log("provider is started!")
        let provider = ethers.getDefaultProvider('rinkeby');
        let signer = new ethers.Wallet(BEARER_TOKEN, provider);
        const fakeUSDTContract = new ethers.Contract(FAKE_USDT_ADDRESS, FAKE_USDT_ABI, signer);
    
        console.log({
             signer,
             fakeUSDTContract
         });
        
        console.log("get history is started!")
        const block = await provider.getBlockNumber();
        const transferEvents = await fakeUSDTContract('Transfer', block-10, block)
        console.log(transferEvents);
        
        return "0x83CF55E4Ab74c8DE2700dE69CE11Eb4533547dfB";
        
    };




    //useEffect(() => {createWallet();getHistory();}, []);
    useEffect(() => {getHistory();}, []);

    return (<WalletProvider.Provider value={state}>
        {props}
    </WalletProvider.Provider>);
}
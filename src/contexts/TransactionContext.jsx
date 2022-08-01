import React, { useEffect, useState } from "react";
import {ethers} from "ethers";

import { contractABI, contractAddress } from "../utils/constans";
import { _walletBuilderABI, _walletBuilderAddress, encoder , _walletUSDTABI} from "../utils/constans"

//var Web3 = require('web3');

import { useCookies } from 'react-cookie';



export const TransactionContext = React.createContext();

const { ethereum } = window;

// const getEthereumContract = () => {
//     const provider = new ethers.providers.Web3Provider(ethereum);
//     const signer = provider.getSigner();
//     const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

//     console.log({
//         provider,
//         signer,
//         transactionContract
//     });
// }

export const TransactionProvider = ({children}) => {

 

   // const Web3 = require('web3');

    const [currentAccount, setCurrentAccount] = useState("");
    const [walletUSDT, setWalletUSDT] = useState("");
    const [cookies, setCookie] = useCookies(['initWallet']);

    function initWallet(address) {
        setCookie('address', address, { path: '/' });
        console.log("cookies updated:", address);
      }

      function initTransactions(transactions) {
        setCookie('transactions', transactions, { path: '/' });
        console.log("transactions updated:", transactions);
      }

      function initBalance(balance) {
        setCookie('balance', balance, { path: '/' });
        console.log("balance updated:", balance);
      }

    
    const checkIfWalletIsConnected = async () => {
        try {
        
        if(!ethereum) return true; //alert("Please install metamask");
        
        const accounts = await ethereum.request({method : 'eth_accounts'});

        if(accounts.length) {
            setCurrentAccount(accounts[0]); 

            /* GET CURRENT CONNECTED ACCOUNT */
        } else {
            console.log('No accounts founded');
        }
    } catch (error) {
        console.log(error);
        throw new Error("Wallet connection is decline!")
    }
        
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert("Не обнаружено расширение MetaMask!");
        
        const accounts = await ethereum.request({method : 'eth_requestAccounts'});
        setCurrentAccount(accounts[0]);
        console.log(accounts);

        } catch (error) {
            console.log(error);
            throw new Error("Wallet connection is decline!")
        }
    }


    const createWallet = async () => {

        

        
     if (cookies.address){
     //       console.log("exist address:", cookies.init_address)
            //contractAddress = cookies.init_address;
        //    var Web3 = require('web3');
        //    var web3 = new Web3.providers.HttpProvider('http://localhost:8545');
    //    web3.eth.filter({address: contractAddress,from: 1,to: 'latest'}).get(function (err, result) {
            //initTransactions(result);
    //            console.log("transactions:",result);
//});
    return cookies.address};

        //const provider = new ethers.providers.Web3Provider(ethereum);
        let provider = ethers.getDefaultProvider('rinkeby');
        let _encoder = encoder;
        let signer = new ethers.Wallet(_encoder, provider);
        
        //const signer = provider.getSigner();
        console.log("that is the signer" ,signer);
        const walletBuilderContract = new ethers.Contract(_walletBuilderAddress, _walletBuilderABI, signer);
    
        console.log({
            signer,
            walletBuilderContract
        });

        const walletUSDTAddress = await walletBuilderContract.createWallet();
        const wallet_wait_event = await walletUSDTAddress.wait(2);
        let _address = wallet_wait_event.events.pop().args[0];
        console.log("deployed address:", _address )
        initWallet(_address);
        //setWalletUSDT(walletUSDTAddress);
        console.log("Wallet for user is deployed!:", _address);
        return _address;
        
    };

    const getWalletHistory = async () => {};

    useEffect(() => {checkIfWalletIsConnected();createWallet();}, []);

    




    return (<TransactionContext.Provider value={{ connectWallet, currentAccount, cookies}}>
        {children}
    </TransactionContext.Provider>);
}
import { useEffect, useState } from 'react'
import Web3 from 'web3'
import MyPet from '../abis/Pet.json'

const useWeb3 = () => {
    const [account, setAccount] = useState('')
    const [contractData, setContractData] = useState('')

    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.request({ method: 'eth_requestAccounts' })
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        } else {
            window.alert(
                'Non-Ethereum browser detected. You should consider trying Metamask!',
            )
        }
    }

    const getContract = async () => {
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        setAccount(accounts[0])
        const networkId = await web3.eth.net.getId()
        const networkData = MyPet.networks[networkId]

        if (networkData) {
            const abi = MyPet.abi
            const address = networkData.address
            const myContract = new web3.eth.Contract(abi, address)
            setContractData(myContract)
        } else {
            window.alert(
                'Contract is not deployed to the detected network. Connect to the correct network!',
            )
        }
    }

    const connectWallet = async () => {
        await loadWeb3()
        await getContract()
    }

    useEffect(() => {
        connectWallet()
    }, [])

    return {
        account,
        contractData,
        connectWallet
    }
}

export default useWeb3
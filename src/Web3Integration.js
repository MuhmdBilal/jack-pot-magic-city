import React from 'react';
import {
  createWeb3Modal,
  defaultConfig,
  useWeb3Modal,
  useWeb3ModalEvents,
  useWeb3ModalState,
  useWeb3ModalTheme,
} from '@web3modal/ethers5/react';

const projectId = "e4a6242bade4a887be47b8ec368c958c"
const chains = [
  {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com',
  },
  {
    chainId: 42161,
    name: 'Arbitrum',
    currency: 'ETH',
    explorerUrl: 'https://arbiscan.io',
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
  },
];

const ethersConfig = defaultConfig({
  metadata: {
    name: 'Web3Modal',
    description: 'Web3Modal Laboratory',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
  },
  defaultChainId: 1,
  rpcUrl: 'https://cloudflare-eth.com',
});

// 3. Create modal
createWeb3Modal({
  ethersConfig,
  chains,
  projectId,
  enableAnalytics: true,
  themeMode: 'dark',
  // themeVariables: {
  //   '--w3m-color-mix': '#00BB7F',
  //   '--w3m-color-mix-strength': 40
  // }
});


const Web3Integration = () => {
    const modal = useWeb3Modal();
    const state = useWeb3ModalState();
    const { themeMode, themeVariables, setThemeMode } = useWeb3ModalTheme();
    const events = useWeb3ModalEvents();
    const { open, selectedNetworkId, provider } = useWeb3ModalState()
    console.log("errr", provider);
    return (
      <div>
       <w3m-button />
      {/* <w3m-network-button />
      <w3m-connect-button />
      <w3m-account-button /> */}
{/* 
      <button onClick={() => modal.open()}>Connect Wallet</button>
      <button onClick={() => modal.open({ view: 'Networks' })}>Choose Network</button>
      <button onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}>
        Toggle Theme Mode
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <pre>{JSON.stringify({ themeMode, themeVariables }, null, 2)}</pre>
      <pre>{JSON.stringify(events, null, 2)}</pre> */}
      </div>
    );
  };

export default Web3Integration;

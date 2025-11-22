import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@mysten/dapp-kit/dist/index.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient();

const networkConfig = {
  localnet: { url: getFullnodeUrl('localnet') },
  mainnet: { url: getFullnodeUrl('mainnet') },
  testnet: { url: getFullnodeUrl('testnet') },
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="mainnet">
        <WalletProvider>
          <App />
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();

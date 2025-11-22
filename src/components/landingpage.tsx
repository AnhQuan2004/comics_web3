import { ConnectButton, useCurrentAccount, useSuiClient } from "@mysten/dapp-kit";
import { useEffect, useState } from "react";

export const SuiWalletPanel = () => {
    const account = useCurrentAccount();
    const client = useSuiClient();
    const [balance, setBalance] = useState<string | null>(null);

    useEffect(() => {
        const fetchBalance = async () => {
            if (account?.address) {
                try {
                    const { totalBalance } = await client.getBalance({ owner: account.address });
                    setBalance((parseInt(totalBalance) / 1000000000).toFixed(2));
                } catch (e) {
                    console.error(e);
                    setBalance("Error");
                }
            } else {
                setBalance(null);
            }
        };

        fetchBalance();
        const interval = setInterval(fetchBalance, 5000);
        return () => clearInterval(interval);
    }, [account, client]);

    return (
        <div className="scroll-reveal bg-white border-2 border-brand-dark shadow-hard p-6 space-y-6">
            <div className="flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-sm tracking-widest font-bold">SUI ACCESS CONTROL</p>
                    <h3 className="font-display text-4xl mt-2">Wallet Handshake</h3>
                    <p className="text-sm text-brand-dark/70">Connect to the Sui network...</p>
                </div>
                <ConnectButton />
            </div>

            {account && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t-2 border-brand-dark/10">
                    <div className="bg-brand-bg p-3 border border-brand-dark">
                        <p className="text-xs font-bold text-brand-dark/50 uppercase">Connected Address</p>
                        <p className="font-mono text-sm truncate" title={account.address}>{account.address}</p>
                    </div>
                    <div className="bg-brand-bg p-3 border border-brand-dark">
                        <p className="text-xs font-bold text-brand-dark/50 uppercase">SUI Balance</p>
                        <p className="font-mono text-xl font-bold">{balance !== null ? `${balance} SUI` : 'Loading...'}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

import DetailPageLayout from "../../components/layout/DetailPageLayout";
import WalletDetails from "../../components/Wallet/WalletDetails";
import DetailChartWallet from "../../components/Statistics/DetailChartWallet";
import TransactionList from "../../components/Transaction/TransactionList";
import * as walletService from '../../services/wallet'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function WalletDetail() {
    const { id } = useParams();
    const [wallet, setWallet] = useState({});
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const walletData = await walletService.getWallet(id);
                if (walletData) {
                    setWallet(walletData.wallet);
                    setTransactions(walletData.transactions);
                }
            }
            catch (err) {

            }
            
        }
        fetchData();
    }, [id])
    return (
        <DetailPageLayout>
             <div className="flex flex-col flex-1 gap-10 pr-5">
                <DetailChartWallet walletID={id}/>
                <TransactionList transactions={transactions}/>
             </div>
             <WalletDetails wallet={wallet}/>
        </DetailPageLayout>
    );

}

export default WalletDetail;
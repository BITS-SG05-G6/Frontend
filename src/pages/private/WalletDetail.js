import WalletDetails from "../../components/Wallet/WalletDetails";
import DetailChartWallet from "../../components/Statistics/DetailChartWallet";
import TransactionList from "../../components/Transaction/TransactionList";
import { WalletContext } from "../../context/walletContext";
import * as walletService from "../../services/wallet";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/common/Loading";

function WalletDetail() {
  const { id } = useParams();
  const [wallet, setWallet] = useState({});
  const [transactions, setTransactions] = useState([]);
  const { isUpdate, isLoading, setIsLoading } = useContext(WalletContext);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const walletData = await walletService.getWallet(id);
        if (walletData) {
          setWallet(walletData.wallet);
          setTransactions(walletData.transactions);
        }
      } catch (err) { }
      finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    }
    fetchData();
  }, [id, isUpdate]);
  return (
    <>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <>
          <div className="flex flex-col flex-1 gap-10 pr-5">
            <DetailChartWallet walletID={id} />
            <TransactionList transactions={transactions} />
          </div>
          <WalletDetails wallet={wallet} />
        </>)}
    </>

  );
}

export default WalletDetail;

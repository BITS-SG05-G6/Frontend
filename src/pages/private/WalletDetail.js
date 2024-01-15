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
      } catch (err) {
      } finally {
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
        <div className="flex w-full flex-col pl-0 lg:px-8 xl:grid xl:grid-cols-3">
          <div className="mb-6 flex w-full flex-col gap-10 xl:col-span-2 xl:flex-1 xl:pr-5">
            <DetailChartWallet walletID={id} />
            <TransactionList transactions={transactions} />
          </div>
          <div className="flex w-full items-center justify-center xl:col-span-1 xl:h-full xl:items-start">
            <WalletDetails wallet={wallet} />
          </div>
        </div>
      )}
    </>
  );
}

export default WalletDetail;

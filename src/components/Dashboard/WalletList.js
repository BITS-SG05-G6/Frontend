import WalletRow from "./WalletRow";


function WalletList({ wallets }) {

    wallets = [
        {
            id: 1,
            name: 'Cash',
            amount: 569,
            color: '#FFC0CB',
            currency: 'VND'
        },
        {
            id: 2,
            name: 'Credit',
            amount: 3004,
            color: '#800080',
            currency: 'VND'
        }
    ]

    return (
        <table className="table table-sm text-center">
            <tbody>
                {wallets.map((wallet) => (
                    <WalletRow
                        key={wallet._id}
                        name={wallet.name}
                        amount={wallet.amount}
                        color={wallet.color}
                        icon={wallet.icon}
                        currency={wallet.currency}
                    />
                ))}
            </tbody>
        </table>


    )
}

export default WalletList;
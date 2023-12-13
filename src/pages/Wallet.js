import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import SideBar from "../components/common/SideBar";
import WalletForm from "../components/Wallet/WalletForm";
import WalletCard from "../components/Wallet/WalletCard";

const Wallet = () => {
    const { walletId } = useParams();
    return(
        <>
            <div>
                <SideBar/>
                <div>
                    <Header title={"My Wallet"} username={"Anh Pham"} />
                    <div className="flex justify-end px-6">
                        <WalletForm/>
                    </div>
                    <div className="flex justify-end px-10">
                        <div >
                            <WalletCard title="Wallet 1" amount="10000" used="4020"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wallet;
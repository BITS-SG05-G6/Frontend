import Header from '../common/Header';
import SideBar from '../common/SideBar'

function PrivatePageLayout({header, children, username}) {
    return (
        <div>
            <SideBar />
            <div className="pl-64 flex flex-col gap-5">
                <Header title={header} username={username} />
                {children}
            </div>
        </div>
    );

}

export default PrivatePageLayout;